import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payments_GetWay_PK);
const Payments = () => {
    return (
        <div className="w-[95%] mx-auto">
            <SectionTitle header="PAYMENT">
            </SectionTitle>
            <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payments;