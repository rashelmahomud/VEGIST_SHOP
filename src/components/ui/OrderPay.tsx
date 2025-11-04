import { useCart } from "@/context/CartContext";
import React, { useState } from "react";

export default function OrderPaymentForm() {
  const [open, setOpen] = useState(false);
  const { totalPrice,cart,formData,setFormData } = useCart();



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const total = totalPrice + 130;


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({...formData, total });
    alert("Order submitted successfully!");
    
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-yellow-500">
        Order Payment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        {
          cart.map((item) => <div key={item.id}>
            <p className="w-full p-2 border rounded-md bg-gray-50 text-gray-700">{item.title + " " + item.quantity}</p>
          </div>)
        }
     
        <div className="w-full p-2 border rounded-md bg-gray-50 text-gray-700">
          <p className="font-semibold">Total Price: ${total}</p>
        </div>
        {open ? (
          <button
            onClick={() => setOpen(true)}
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
          >
            Done
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
          >
            Pay Now
          </button>
        )}
      </form>
    </div>
  );
}
