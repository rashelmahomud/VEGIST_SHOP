import Banner from "@/components/ui/Banner";
import Categori from "@/components/ui/Categori";
import DiscountCard from "@/components/ui/DiscountCard";
import TrandingPage from "./tranding/page";
import DealOfDay from "@/components/ui/DealOfDay";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div>
      <Banner />

      <div className="lg:px-36 mt-20">
        <DiscountCard />
        <Categori />
        <TrandingPage />
      </div>
      <DealOfDay />
      <ProductsPage />
    </div>
  );
}
