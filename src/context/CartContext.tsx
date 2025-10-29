"use client";
import { Products } from "@/components/type/ProductType";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type CartItem = Products & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  handelCart: (product: Products) => void;
  removeCart: any;
  totalPrice: any;
  handelIncrement: any;
  handelDicrement: any;
};

const CartContexts = createContext<CartContextType | undefined>(undefined);

export const CartContext = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handelCart = (product: Products) => {
    setCart((prevCart): any => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeCart = (product: Products) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item: any) => acc + item.cost * item.quantity, 0);
  }, [cart]);

  const handelIncrement = (product: number): void => {
    setCart((prevCart) =>
      prevCart.map((item): any =>
        item.id === product ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handelDicrement = (product: number): void => {
    setCart((prevCart) =>
      prevCart
        .map((item): any =>
          item.id === product ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContexts.Provider
      value={{
        cart,
        handelCart,
        removeCart,
        totalPrice,
        handelIncrement,
        handelDicrement,
      }}
    >
      {children}
    </CartContexts.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContexts);
  if (!context) throw new Error("have a some issus in cart oparations");
  return context;
};
