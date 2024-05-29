import SectionTitle from "../SectionTitle/SectionTitle";
import usePayment from "../Hooks/usePayment";

const PaymentHistory = () => {
    const [payment] = usePayment()

    return (
        <div className="w-[95%] mx-auto">
            <SectionTitle
            header="PAYMENT HISTORY"
            subHeader="---At a Glance!---"
            ></SectionTitle>
            <div className="my-5">
                <p className="md:text-2xl font-bold">Total Payments: {payment.length}</p>
            </div>
            <div className="overflow-x-auto rounded-t-2xl">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white rounded-t-3xl">
                        <tr>
                            <th>Email</th>
                            <th>Transection Id</th>
                            <th>Total Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payment.map((payment, index) => <tr key={index}>
                                <td>
                                    <p className=""> {payment.email} </p>
                                </td>
                                <td>
                                    <div className="">{payment.transectionId}</div>

                                </td>
                                <td>
                                    <div className="">${payment.price}</div>
                                </td>
                                <td>
                                <div className="">{payment.date.split('T')[0]}</div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;