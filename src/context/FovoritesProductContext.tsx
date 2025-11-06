'use client'
import { ProductsType } from "@/components/type/ProductType";
import { createContext, ReactNode, useContext, useState } from "react";

type FavoriteProductContextType = {
  productsFavorite: ProductsType[];
  toggleProductsFavorites: (item: ProductsType) => void;
};

const FavoriteProductContext = createContext<
  FavoriteProductContextType | undefined
>(undefined);

export const FovoritesProductContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [productsFavorite, setProductsFavorite] = useState<ProductsType[]>([]);

  const toggleProductsFavorites = (product: ProductsType) => {
    setProductsFavorite((prev): any => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <FavoriteProductContext.Provider
      value={{ productsFavorite, toggleProductsFavorites }}
    >
      {children}
    </FavoriteProductContext.Provider>
  );
};

export const useProductFavorite = () => {
  const context = useContext(FavoriteProductContext);
  if (!context) throw new Error("this products favorite dont show");
  return context;
};
