"use client";
import { ProductsType } from "@/components/type/ProductType";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProductDetailsType {
  params: Promise<{ id: string }>;
}

const ProductId = ({ params }: ProductDetailsType) => {
  const { id } = React.use(params);
  const {handelCart,cart, handelDicrement, handelIncrement} = useCart();

  const [active, setActive] = useState(0);
  const [selectedsize, setSelectedSize] = useState('1kg');

 const items: ProductsType[] = [
     {
       id: 1,
       title: "Sp. red fresh guava",
       cost: 10.0,
       review: "no review",
       img: "/assates/tendingProduct/tran (1).jpg",
        discount: "30%",
       images: [
         "/assates/shop/shop(1).jpg",
         "/assates/shop/shop(2).jpg",
         "/assates/shop/shop(3).jpg",
         "/assates/shop/shop(4).jpg",
       ],
       kgs: [1, 2, 3, 4, 5],
     },
     {
       id: 2,
       title: "Fresh Vegitable",
       cost: 13.0,
       review: "no review",
       img: "/assates/tendingProduct/tran (2).jpg",
        discount: "30%",
       images: [
         "/assates/shop/shop(1).jpg",
         "/assates/shop/shop(2).jpg",
         "/assates/shop/shop(3).jpg",
         "/assates/shop/shop(4).jpg",
       ],
       kgs: [1, 2, 3, 4, 5],
     },
     {
       id: 3,
       title: "Orange juice naturale",
       cost: 30.0,
       review: "no review",
       img: "/assates/tendingProduct/tran (3).jpg",
        discount: "30%",
       images: [
         "/assates/shop/shop(1).jpg",
         "/assates/shop/shop(2).jpg",
         "/assates/shop/shop(3).jpg",
         "/assates/shop/shop(4).jpg",
       ],
       kgs: [1, 2, 3, 4, 5],
     },
     {
       id: 4,
       title: "fresh mango",
       cost: 20.0,
       review: "no review",
       img: "/assates/tendingProduct/tran (4).jpg",
        discount: "30%",
       images: [
         "/assates/shop/shop(1).jpg",
         "/assates/shop/shop(2).jpg",
         "/assates/shop/shop(3).jpg",
         "/assates/shop/shop(4).jpg",
       ],
       kgs: [1, 2, 3, 4, 5],
     },
     {
       id: 5,
       title: "fresh fish",
       cost: 12.0,
       review: "no review",
       img: "/assates/shop/shop(5).jpg",
        discount: "30%",
       images: [
         "/assates/shop/shop(1).jpg",
         "/assates/shop/shop(2).jpg",
         "/assates/shop/shop(3).jpg",
         "/assates/shop/shop(4).jpg",
       ],
       kgs: [1, 2, 3, 4, 5],
     },
     {
       id: 6,
       title: "fresh fish",
       cost: 15.0,
       review: "no review",
       img: "/assates/tendingProduct/copi.jpg",
        discount: "30%",
       images: [
         "/assates/shop/shop(1).jpg",
         "/assates/shop/shop(2).jpg",
         "/assates/shop/shop(3).jpg",
         "/assates/shop/shop(4).jpg",
       ],
       kgs: [1, 2, 3, 4, 5],
     },
     {
       id: 7,
       title: "fresh fish",
       cost: 10.0,
       review: "no review",
       img: "/assates/shop/shop(9).jpg",
        discount: "30%",
       images: [
         "/assates/shop/shop(1).jpg",
         "/assates/shop/shop(2).jpg",
         "/assates/shop/shop(3).jpg",
         "/assates/shop/shop(4).jpg",
       ],
       kgs: [1, 2, 3, 4, 5],
     },
     {
       id: 8,
       title: "fresh fish",
       cost: 15.0,
       review: "no review",
       img: "/assates/shop/shop(10).webp",
        discount: "30%",
       images: [
         "/assates/shop/shop(1).jpg",
         "/assates/shop/shop(2).jpg",
         "/assates/shop/shop(3).jpg",
         "/assates/shop/shop(4).jpg",
       ],
       kgs: [1, 2, 3, 4, 5],
     },
   ];

  // fake size
  const sizes = ["1kg", "2Kg", "3kg"];

  const product = items.find((item) => item.id.toString() === id);

    const currentProduct = cart.find(
    (item: any) => item.id === product?.id
  );

  if (!product) {
    return <p>Product not found !</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
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
          <div className="flex flex-row gap-10">
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
                    width={100}
                    height={100}
                    src={img}
                    alt={"thambile"}
                    className="w-24 h-24 object-cover block"
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div>
          {/* details part   */}
          <div className="space-y-3 p-3">
            <h1 className="text-3xl font-semibold"> {product.title}</h1>
            <p className="text-gray-600">{product.review}</p>
            <div className="flex gap-5 items-center">
              <p className="text-xl font-bold text-yellow-600">
                Price: ${product.cost}
              </p>
              {product.discount && (
                <p className="bg-yellow-200 px-5 py-1 rounded-full">
                  {product.discount} OFF
                </p>
              )}
            </div>
            <p className="text-gray-500">
              Enjoy the freshness of our {product.title}. perfect on your dayly
              meals _ full and flavor and helth benifit.
            </p>

            <div>
              {/* size  */}

              <p className="text-xl">Select Size: {selectedsize}</p>
              <div className="flex gap-8">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md border-gray-300 p-2 my-1 ${
                      active.toString() === size
                        ? "bg-gray-500 text-3xl"
                        : "hover:bg-yellow-500 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {/* counter app down  */}
              <div>
                <h1 className="text-xl mt-3 text-gray-500">Quentity:</h1>
                <button
                  onClick={() => handelIncrement(product.id)}
                  className="text-2xl border w-12 h-12 rounded-full border-gray-500 gap-10 cursor-pointer hover:bg-yellow-500 hover:text-white"
                >
                  +
                </button>
                <span className="mx-3 text-2xl font-semibold text-gray-500">
                  {currentProduct?.quantity || 0}
                </span>
                <button
                  onClick={() => handelDicrement(product.id)}
                  className="text-2xl border w-12 h-12 rounded-full border-gray-500 gap-10 cursor-pointer hover:bg-yellow-500 hover:text-white"
                >
                  -
                </button>
              </div>
              {/* button buy and add to cart  */}
              <div className="flex gap-10 mt-3">
                <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg">
                  <Link onClick={() => handelCart(product)} href={""}>Add to Cart</Link>
                </button>
                <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg">
                  <Link href={""}>By Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
