"use client";
import { Products } from "@/components/type/ProductType";
import {
  faCcMastercard,
  faCcVisa,
  faFacebook,
  faPaypal,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faStar, faTruck } from "@fortawesome/free-regular-svg-icons";
import {
  faDollar,
  faMinus,
  faPlus,
  faWarning,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TrandingId = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const [count, setCount] = useState(1);
  const [need, setNeed] = useState("1KG");
  const [country, setCountry] = useState("canada");

  const handelClick = (name: string) => {
    setNeed(name);
  };
  const handelCountry = (country: string) => {
    setCountry(country);
  };

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
    <div>
      <div className="bg-[url('/assates/detailsBanner.webp')] flex justify-center text-yellow-600 items-center bg-cover bg-no-repert h-30">
        <span>
          <Link href={"/"}>Home</Link>
        </span>
        <span>
          <Link href={"/tranding"}>/ Organic coconet</Link>
        </span>
      </div>
      <div className="lg:px-36 p-3 my-10">
        <div className="flex flex-row gap-5">
          <div className="basis-2/2">
            {productDetails.map((productD) => (
              <div
                key={productD.id}
                className="grid lg:grid-cols-2 grid-cols-1 gap-5 "
              >
                <div>
                  <div>
                    <Image
                      src={productD.img}
                      width={400}
                      height={400}
                      alt="image"
                    />
                  </div>

                  <div className="flex gap-10 mt-5">
                    <Image
                    className="border-1 border-gray-300 hover:border-yellow-500"
                      src={'/assates/tendingProduct/tran (3).jpg'}
                      width={100}
                      height={50}
                      alt="image"
                    />
                    <Image
                    className="border-1 border-gray-300 hover:border-yellow-500"
                      src={productD.img}
                      width={100}
                      height={50}
                      alt="image"
                    />
                    <Image
                    className="border-1 border-gray-300 hover:border-yellow-500"
                      src={'/assates/tendingProduct/tran (2).jpg'}
                      width={100}
                      height={50}
                      alt="image"
                    />
                 
                  </div>
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-gray-600">
                    {productD.title}
                  </h1>
                  <p className="border-b border-gray-200 my-3"></p>
                  <div className="flex text-gray-600 my-3 gap-2">
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-3 text-yellow-600"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-3 text-yellow-600"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-3 text-yellow-600"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-3 text-yellow-600"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-3 text-yellow-600"
                      />
                    </div>
                    <p> 2 reviews</p>
                  </div>
                  <div>
                    <div className="flex gap-2 mb-3 relative">
                      <strong className="pr-2 text-gray-600 ">
                        Availability:
                      </strong>
                      <span className="w-4 h-4 bg-green-600 rounded-full p-2 mt-1"></span>
                      <p>12 in stock</p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-gray-600 my-3">
                    <p>
                      {productD.cost}{" "}
                      <span className="line-through text-gray-500">$44.00</span>
                    </p>
                    <button className="bg-red-600  rounded-full px-2 items-center font-semibold text-white">
                      20%
                    </button>
                  </div>
                  <p className="text-gray-500 mb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>

                  <div className="text-gray-500">
                    <p>
                      <strong>Size :</strong> {need}
                    </p>
                    <div className="flex gap-5 mt-3">
                      <Link
                        onClick={() => handelClick("1KG")}
                        href={""}
                        className="bg-gray-200 hover:border hover:border-yellow-500 active border border-yellow-500 rounded-full px-3 py-2"
                      >
                        1KG
                      </Link>

                      <Link
                        onClick={() => handelClick("2KG")}
                        href={""}
                        className="bg-gray-200 hover:border hover:border-yellow-500 rounded-full px-3 py-2"
                      >
                        2KG
                      </Link>

                      <Link
                        onClick={() => handelClick("3KG")}
                        href={""}
                        className="bg-gray-200 hover:border hover:border-yellow-500 rounded-full px-3 py-2"
                      >
                        3KG
                      </Link>
                    </div>
                  </div>
                  <div className="mt-3 text-gray-600">
                    <p>
                      <strong>Meterial :</strong> {country}
                    </p>
                    <div className="flex gap-5 mt-3">
                      <button>
                        <Link
                          onClick={() => handelCountry("canada")}
                          href={""}
                          className="bg-gray-200 hover:border hover:border-yellow-500 rounded-full px-3 border active border-yellow-500 py-2"
                        >
                          CANADA
                        </Link>
                      </button>
                      <button>
                        <Link
                          onClick={() => handelCountry("india")}
                          href={""}
                          className="bg-gray-200 hover:border hover:border-yellow-500 rounded-full px-3 py-2"
                        >
                          INDIA
                        </Link>
                      </button>
                      <button>
                        <Link
                          onClick={() => handelCountry("germany")}
                          href={""}
                          className="bg-gray-200 hover:border hover:border-yellow-500 rounded-full px-3 py-2"
                        >
                          GERMANY
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="flex my-5 gap-5">
                    <h1 className="text-xl font-semibold text-gray-600">
                      Quantity :
                    </h1>

                    <p className="border px-3 py-1 rounded-full hover:border-yellow-500">
                      <button onClick={() => setCount(count + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>

                      <span className="mx-5">{count}</span>

                      <button onClick={() => setCount(count - 1)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </p>
                  </div>
                  <div className="flex gap-5 p-2">
                    <button>
                      <Link
                        href={""}
                        className="px-14 py-3 text-white text-semibold bg-yellow-500 rounded-full"
                      >
                        Add to cart
                      </Link>
                    </button>
                    <button className="text-gray-600">
                      <Link
                        href={""}
                        className="px-14 py-3 text-white text-semibold bg-gray-800 rounded-full"
                      >
                        Buy it now
                      </Link>
                    </button>
                  </div>
                  <div className="flex items-center my-3 gap-5">
                    <FontAwesomeIcon icon={faHeart} />
                    <h3>Wishlist</h3>
                  </div>
                  <p className="border-b border-gray-200 my-3"></p>
                  <div className="text-gray-700 mb-3">
                    <p>SKU: 123456</p>
                  </div>
                  <div className="flex items-center gap-5 ">
                    <p className="text-xl font-semibold text-gray-500 mb-2">
                      Share :
                    </p>
                    <div className="flex gap-3 text-gray-500">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="hover:text-yellow-500"
                      />
                      <FontAwesomeIcon
                        icon={faX}
                        className="hover:text-yellow-500"
                      />
                      <FontAwesomeIcon
                        icon={faPinterest}
                        className="hover:text-yellow-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="w-10 py-1 px-2 rounded-md bg-white border border-gray-300 duration-300"
                    />
                    <FontAwesomeIcon
                      icon={faPaypal}
                      className="w-10 px-2 py-1 rounded-md bg-white border border-gray-300 duration-300"
                    />
                    <FontAwesomeIcon
                      icon={faCcVisa}
                      className="w-10 px-2 py-1 rounded-md bg-white border border-gray-300 duration-300"
                    />
                    <FontAwesomeIcon
                      icon={faDollar}
                      className="w-10 px-2 py-1 rounded-md bg-white border border-gray-300 duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basis-1/3">
            <div className="text-center bg-gray-50 p-8">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-4xl bg-white text-yellow-500 p-3 rounded-full"
              />
              <h1 className="font-semibold my-3">DELIVERY INFO</h1>
              <p className="text-gray-400 text-sm/7">
                From then, delivery is generally within 2-10 days, depending on
                your location.
              </p>
            </div>
            <div className="text-center bg-gray-50 p-8 my-5">
              <FontAwesomeIcon
                icon={faDollar}
                className="text-4xl bg-white text-yellow-500 p-3 rounded-full"
              />
              <h1 className="font-semibold my-3">30 DAYS RETURNS</h1>
              <p className="text-gray-400 text-sm/7">
                Not the right fit? No worries. We'll arrange pick up and a full
                refund within 7 days including the delivery fee.
              </p>
            </div>
            <div className="text-center bg-gray-50 p-8">
              <FontAwesomeIcon
                icon={faWarning}
                className="text-4xl bg-white text-yellow-500 p-3 rounded-full"
              />
              <h1 className="font-semibold my-3">10 YEAR WARRANTY</h1>
              <p className="text-gray-400 text-sm/7">
                Quality comes first and our products are designed to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrandingId;
