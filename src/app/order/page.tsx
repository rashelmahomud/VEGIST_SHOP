'use client'
import { useCart } from "@/context/CartContext";



const OrderPage = () => {
    const {formData} = useCart();
 
    console.log(formData)
    return (
        <div className="lg:px-36 p-3 my-10">
            <h1 className="text-xl font-semibold">All Customer Orders : </h1>

           <ul>
            <li>{formData.name}</li>
            <li>{formData.cost}</li>
            <li>{formData.phone}</li>
            <li>{formData.email}</li>
            <li>{formData.address}</li>
           </ul>
        </div>
    );
};

export default OrderPage;