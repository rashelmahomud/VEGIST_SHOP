"use client";
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

export default function Home() {
  return (
    <>
      <Banner />
      <div className="lg:px-36 p-3 pt-20 dark:bg-black">
        <DiscountCard />
        <Categori />
        <TrandingPage />
      </div>
      <div className="dark:bg-black">
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
