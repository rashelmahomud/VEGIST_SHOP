"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="lg:px-36 p-3 my-10">
      <h1 className="text-2xl font-semibold mb-4">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="grid gap-4">
          {cart.map((item) => (
            <li key={item.id} className="border p-4 rounded-xl">
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.cost}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
