"use client";
import {  ProductsType } from "@/components/type/ProductType";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type CartItem = ProductsType & { quantity: number  };

type CartContextType = {
  cart: CartItem[];
  handelCart: (product: ProductsType) => void;
  removeCart: (product: ProductsType) => void;
  totalPrice: number;
  handelIncrement: any;
  handelDicrement: any;
  kg:number;
  setKg:(kg:number) => void;
  country:string;
  setCountry:(country:string) => void;
  handelClick:any,
  formData:any,
  setFormData:any
};

const CartContexts = createContext<CartContextType | undefined>(undefined);

export const CartContext = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [kg, setKg] = useState(1);
   const [country, setCountry] = useState("");
     const [formData, setFormData] = useState({
       name: "",
       email: "",
       phone: "",
       address: ""
     });

  const handelCart = (product: ProductsType) => {
    setCart((cart): any => {
      const existing = cart.find((item) => item.id === product.id);
      if (existing) {
        return cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...product, quantity: 1 }];
      }
    });
  };
  const handelClick = (productId: number, selectedKg: number) => {
  setCart((prevCart) =>
    prevCart.filter((item) => item.id === productId ? { ...item, kg: selectedKg } : item )
  );
  setKg(selectedKg);
};


  const removeCart = (product: ProductsType) => {
    setCart((cart) => cart.filter((item) => item.id !== product.id));
  };

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.cost * item.quantity, 0);
  }, [cart]);


  // count product part
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
        kg,
        setKg,
        country,
        setCountry,
        handelClick,
        formData,
        setFormData

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
