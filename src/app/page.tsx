import Banner from "@/components/ui/Banner";
import DiscountCard from "@/components/ui/DiscountCard";

export default function Home() {
  return (
    <div>
      <Banner />

      <div className="lg:px-30 mt-20">
        <DiscountCard />
      </div>
    </div>
  );
}
