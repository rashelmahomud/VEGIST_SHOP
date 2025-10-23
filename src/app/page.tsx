'use client'
import Banner from "@/components/ui/Banner";
import Categori from "@/components/ui/Categori";
import DiscountCard from "@/components/ui/DiscountCard";
import TrandingPage from "./tranding/page";
import DealOfDay from "@/components/ui/DealOfDay";
import ProductsPage from "./products/page";
import CustomerSayPage from "@/components/ui/CustomerSay";
import LatestDeal from "@/components/ui/LatestDeal";
import BlogsPage from "./blogs/page";
import Testimonial from "@/components/ui/Testimonial";
import { Products } from "@/components/type/ProductType";
import { useState } from "react";

export default function Home() {
const [favorite, setFavorite] = useState<Products[]>([]);


  return (
    <>
      <Banner />

      <div className="lg:px-36 p-3 mt-20">
        <DiscountCard />

        <Categori />

         <TrandingPage favorite={favorite} setFavorite={setFavorite} /> 
      </div>
      <div>
        <DealOfDay />
        <ProductsPage />
        <CustomerSayPage />
        <BlogsPage />
        <LatestDeal />
        <Testimonial />
      </div>
    </>
  );
}
