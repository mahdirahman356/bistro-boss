import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    let [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transectionId, setTransectionId] = useState("");
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const {user} = useContext(AuthContext)
    let totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        axiosSecure.post("/create-payment-intent", {price: totalPrice})
        .then(res => {
            if (res.data && res.data.clientSecret) {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
              } else {
                setError("Failed to get client secret from server.");
              }
        })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!stripe || !elements) {
            setLoading(true);
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            setLoading(false);
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
            setLoading(false);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || "anonymous",  
                  name: user?.displayName || "anonymous",
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError)
            setLoading(false);
          }
          else{
            console.log('payments intent', paymentIntent)
            if(paymentIntent.status === "succeeded"){
                setTransectionId(paymentIntent.id)
                const paymentInfo = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(),
                    transectionId: paymentIntent.id,
                    menuIds: cart.map(cart => cart.menuId),
                    cartIds: cart.map(cart => cart._id),
                    status: "pending"
                }
                const res = await axiosSecure.post('/payments', paymentInfo)
                  console.log(res.data)
                    refetch()
                    if(res.data.paymentResult.insertedId){
                        Swal.fire({
                            title: 'Success',
                            text: `Thank you for the payment`,
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                    setLoading(false);

            }
          }
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex flex-col items-center justify-center mt-20">
                    <button disabled={!stripe || !clientSecret } className="btn bg-[#D1A054] text-white w-[300px]" type="submit">
                    {loading ?
                            <span className="loading loading-spinner text-white"></span>
                            : "Pay"
                        }
                    </button>
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                    {transectionId && <p className="text-green-500 text-sm mt-2">Your Transection Id: {transectionId}</p>}
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;