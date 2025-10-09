import { Products } from "@/components/type/ProductType";
import Image from "next/image";

const TrandingId = ({ params }: { params: Promise<{ id: number }> }) => {
  const { id }:any = params;
  const items: Products[] = [
    {
      id: 1,
      title: "Sp. red fresh guava",
      cost: "$10.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (1).jpg",
    },
    {
      id: 2,
      title: "Fresh Vegitable",
      cost: "$13.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (2).jpg",
    },
    {
      id: 3,
      title: "Orange juice naturale",
      cost: "$30.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (3).jpg",
    },
    {
      id: 4,
      title: "fresh mango",
      cost: "$20.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (4).jpg",
    },
    {
      id: 5,
      title: "fresh fish",
      cost: "$12.00",
      review: "no review",
      img: "/assates/shop/shop(5).jpg",
    },
    {
      id: 6,
      title: "fresh fish",
      cost: "$15.00",
      review: "no review",
      img: "/assates/tendingProduct/copi.jpg",
    },
    {
      id: 7,
      title: "fresh fish",
      cost: "$10.00",
      review: "no review",
      img: "/assates/shop/shop(9).jpg",
    },
    {
      id: 8,
      title: "fresh fish",
      cost: "$15.00",
      review: "no review",
      img: "/assates/shop/shop(10).webp",
    },
  ];

  const productDetails = items.filter(
    (item) => item.id.toString() === id.toString()
  );


  return (
    <div className="lg:px-36 p-3 my-10">
     {
        productDetails.map((productD) => <div key={productD.id}>
            <Image  src={productD.img} width={300} height={200} alt="image"/>
        </div>)
     }
    </div>
  );
};

export default TrandingId;
