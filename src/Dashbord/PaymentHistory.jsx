import SectionTitle from "../SectionTitle/SectionTitle";
import usePayment from "../Hooks/usePayment";

const PaymentHistory = () => {
    const [payment] = usePayment()
    const payments = payment.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return (
        <div className="w-[95%] mx-auto">
            <SectionTitle
            header="PAYMENT HISTORY"
            subHeader="---At a Glance!---"
            ></SectionTitle>
           
           {payment.length === 0 ?  <div className="flex flex-col items-center">
                <p className="text-gray-400 text-2xl font-semibold text-center my-4">You haven't made any payments yet. </p> 
                
            </div> 
            : 
             <div>
             <div className="my-5">
                   <p className="md:text-2xl font-bold">Total Payments: {payment.length}</p>
               </div>
               <div className="overflow-x-auto rounded-t-2xl">
                   <table className="table">
                       {/* head */}
                       <thead className="bg-[#D1A054] text-white rounded-t-3xl">
                           <tr>
                               <th></th>
                               <th>Email</th>
                               <th>Transection Id</th>
                               <th>Total Price</th>
                               <th>Date</th>
                           </tr>
                       </thead>
                       <tbody className="font-semibold text-gray-700">
                           {/* row 1 */}
                           {
                               payments.map((payment, index) => <tr key={index} className="hover whitespace-nowrap">
                                   <td>{index + 1}</td>
                                   <td>
                                       <p className=""> {payment.email} </p>
                                   </td>
                                   <td>
                                       <div className="">{payment.transectionId}</div>
   
                                   </td>
                                   <td>
                                       <div className="">{parseFloat(payment.price).toFixed(2)}$</div>
                                   </td>
                                   <td>
                                   <div className="">{payment.date.split('T')[0]}</div>
                                   </td>
                               </tr>)
                           }
                       </tbody>
                   </table>
               </div>
             </div>}

         
        </div>
    );
};

export default PaymentHistory;