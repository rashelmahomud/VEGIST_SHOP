"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "antd";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeCart,totalPrice } = useCart();


  return (
    <div className="lg:px-36 p-3 my-10">
      <div>
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
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="cart image"
                />
                <h3 className="font-semibold">{item.title}</h3>
                <p>size:</p>
                <p>metarial:</p>
                <p>ID : {item.id}</p>
             
              <p>Cost: {item.cost * item.quantity}</p>
              <p>Item: {item.quantity}</p>
                <Button onClick={() => removeCart(item)}>Delete</Button>
              </div>
            ))}
          </ul>

        )}
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
}
