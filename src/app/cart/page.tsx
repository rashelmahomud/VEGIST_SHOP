"use client";

import OrderPaymentForm from "@/components/ui/OrderPay";
import { useCart } from "@/context/CartContext";
import { Button, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeCart, totalPrice,kg,country } = useCart();
  console.log(kg)

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="lg:px-36 p-3 my-10">
      <div>
        <h1 className="text-2xl font-semibold mb-4">🛒 Your Cart</h1>
        <div className="lg:flex gap-10 border border-gray-300 p-3">
          <div>
            {cart.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <ul className="grid gap-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="lg:flex items-center gap-10 border border-gray-100 p-4 rounded-xl text-xl"
                  >
                    <Image
                      src={item.img}
                      width={100}
                      height={100}
                      alt="cart image"
                    />

                    <h3 className="font-semibold">{item.title}</h3>
                    <p>size:{kg}kg</p>
                    <p>metarial:{country}</p>

                    <p>Cost: {item.cost * item.quantity}</p>
                    <p>Item: {item.quantity}</p>
                    <Button onClick={() => removeCart(item)}>Delete</Button>
                  </div>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm mx-auto border border-gray-100">
            <h1 className="text-center text-2xl font-bold text-yellow-500 tracking-wide">
              WELCOME BOSS 🛒
            </h1>

            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex justify-between text-base">
                <span className="font-semibold">Total Price:</span>
                <span className="text-gray-900 font-bold">${totalPrice}</span>
              </p>
              <p className="flex justify-between text-base">
                <span className="font-semibold">Delivery Cost:</span>
                <span className="text-gray-900 font-bold">$130</span>
              </p>
              <hr className="my-3 border-gray-200" />
              <p className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Grand Total:</span>
                <span className="text-yellow-500">${totalPrice + 130}</span>
              </p>
            </div>

            <button className="w-full mt-6">
              <Link
                href=""
                type="primary"
                onClick={showDrawer}
                className="block text-center w-full bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-yellow-300/50"
              >
                Pay Now 💳
              </Link>
              <Drawer
                title="Basic Drawer"
                closable={{ "aria-label": "Close Button" }}
                onClose={onClose}
                open={open}
              >
                <OrderPaymentForm />
              </Drawer>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
