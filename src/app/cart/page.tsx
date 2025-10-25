"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

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
            <div
              key={item.id}
              className="flex items-center gap-10  border p-4 rounded-xl text-xl"
            >
            <Image src={item.img} width={100} height={100} alt="cart image" />
              <h3 className="font-semibold">{item.title}</h3>
              <p>size:</p>
              <p>metarial:</p>
              <p>quentity : {cart.length}</p>
              <p>{item.cost}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
