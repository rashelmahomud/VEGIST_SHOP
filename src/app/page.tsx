import Banner from "@/components/ui/Banner";
import Categori from "@/components/ui/Categori";
import DiscountCard from "@/components/ui/DiscountCard";

export default function Home() {
  return (
    <div>
      <Banner />

      <div className="lg:px-30 mt-20">
        <DiscountCard />
        <Categori />
      </div>
    </div>
  );
}
