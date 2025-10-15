"use client";
import { ProductsType } from "@/components/type/ProductType";
import Image from "next/image";
import React, { useState } from "react";

interface ProductDetailsType {
  params: Promise<{ id: string }>;
}

const ProductId = ({ params }: ProductDetailsType) => {
  const { id } = React.use(params);

  const [active, setActive] = useState(0);

  const items: ProductsType[] = [
    {
      id: 1,
      title: "Sp. red fresh guava",
      cost: "$10.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (1).jpg",
      discount: "30%",
      images: [
        "/assates/shop/shop(1).jpg",
        "/assates/shop/shop(2).jpg",
        "/assates/shop/shop(3).jpg",
        "/assates/shop/shop(4).jpg",
      ],
    },
    {
      id: 2,
      title: "Fresh Vegitable",
      cost: "$13.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (2).jpg",
      images: [
        "/assates/shop/shop(1).jpg",
        "/assates/shop/shop(2).jpg",
        "/assates/shop/shop(3).jpg",
        "/assates/shop/shop(4).jpg",
      ],
    },
    {
      id: 3,
      title: "Orange juice naturale",
      cost: "$30.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (3).jpg",
      discount: "30%",
      images: [
        "/assates/shop/shop(1).jpg",
        "/assates/shop/shop(2).jpg",
        "/assates/shop/shop(3).jpg",
        "/assates/shop/shop(4).jpg",
      ],
    },
    {
      id: 4,
      title: "fresh mango",
      cost: "$20.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (4).jpg",
      images: [
        "/assates/shop/shop(1).jpg",
        "/assates/shop/shop(2).jpg",
        "/assates/shop/shop(3).jpg",
        "/assates/shop/shop(4).jpg",
      ],
    },
    {
      id: 5,
      title: "fresh fish",
      cost: "$12.00",
      review: "no review",
      img: "/assates/shop/shop(5).jpg",
      discount: "20%",
      images: [
        "/assates/shop/shop(1).jpg",
        "/assates/shop/shop(2).jpg",
        "/assates/shop/shop(3).jpg",
        "/assates/shop/shop(4).jpg",
      ],
    },
    {
      id: 6,
      title: "fresh fish",
      cost: "$15.00",
      review: "no review",
      img: "/assates/tendingProduct/copi.jpg",
      images: [
        "/assates/shop/shop(1).jpg",
        "/assates/shop/shop(2).jpg",
        "/assates/shop/shop(3).jpg",
        "/assates/shop/shop(4).jpg",
      ],
    },
    {
      id: 7,
      title: "fresh fish",
      cost: "$10.00",
      review: "no review",
      img: "/assates/shop/shop(9).jpg",
      discount: "30%",
      images: [
        "/assates/shop/shop(1).jpg",
        "/assates/shop/shop(2).jpg",
        "/assates/shop/shop(3).jpg",
        "/assates/shop/shop(4).jpg",
      ],
    },
    {
      id: 8,
      title: "fresh fish",
      cost: "$15.00",
      review: "no review",
      img: "/assates/shop/shop(10).webp",
      discount: "30%",
      images: [
        "/assates/shop/shop(1).jpg",
        "/assates/shop/shop(2).jpg",
        "/assates/shop/shop(3).jpg",
        "/assates/shop/shop(4).jpg",
      ],
    },
  ];

  const product = items.find((item) => item.id.toString() === id);

  if (!product) {
    return <p>Product not found !</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <p className="text-2xl font-semibold text-center my-2">
            {product.title}
          </p>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg my-5">
            {active ? (
              <Image
                width={600}
                height={500}
                src={product.images[active]}
                alt={`Blog image`}
                className="w-full h-[420px] object-cover block"
                loading="eager"
                priority
              />
            ) : (
              <Image
                width={600}
                height={500}
                src={product.img}
                alt={`Blog image`}
                className="w-full h-[420px] object-cover block"
                loading="eager"
                priority
              />
            )}
          </div>
          <div>
            {product?.images?.map((img, index): any => {
              const realIndex = index + 0;
              const selected = index === active;

              return (
                <button
                  key={index}
                  onClick={() => setActive(realIndex)}
                  className={`relative rounded-lg overflow-hidden ring-2 ring-transparent focus:outline-none focus:ring-offset-2 focus:ring-yellow-300 transition-all duration-200 ${
                    selected ? "ring-yellow-500 scale-105" : "hover:scale-105"
                  }`}
                >
                  <Image
                    width={300}
                    height={300}
                    src={img}
                    alt={"thambile"}
                    className="w-24 h-24 object-cover block"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
