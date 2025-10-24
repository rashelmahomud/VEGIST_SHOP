"use client";
import { Products } from "@/components/type/ProductType";
import { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  cart: Products[];
  handelCart: (product: Products) => void;
};

const CartContexts = createContext<CartContextType | undefined>(undefined);

export const CartContext = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Products[]>([]);

  const handelCart = (product: Products) => {
   setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContexts.Provider value={{ cart, handelCart }}>
      {children}
    </CartContexts.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContexts);
  if (!context) throw new Error("have a some issus in cart oparations");
  return context;
};
