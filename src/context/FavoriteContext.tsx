'use client';

import { Products } from "@/components/type/ProductType";
import { createContext, useContext, useState, ReactNode } from "react";


type FavoriteContextType = {
  favorites: Products[];
  toggleFavorite: (product: Products) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Products[]>([]);

  const toggleFavorite = (product: Products) => {
    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id); // remove if already favorite
      } else {
        return [...prev, product]; // add new favorite
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error("useFavorite must be used inside FavoriteProvider");
  return context;
};
