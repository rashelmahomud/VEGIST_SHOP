"use client";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  interface Products {
    id: number;
    title: string;
    cost: string;
    review: string;
    img: string;
  }

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
    }
  ];
  return (
    <div className="lg:px-36">
      <h1 className="text-4xl font-semibold text-gray-800 my-10 text-center">
        Our products
      </h1>
      <div>
        <div className="w-full mt-10">
          {/* Tab Headers */}
          <div className="flex justify-center border-b border-gray-300">
            <button
              onClick={() => setActiveTab("1")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "1"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              SPECIAL PRODUCT
            </button>
            <button
              onClick={() => setActiveTab("2")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "2"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              BEST PRODUTS
            </button>
            <button
              onClick={() => setActiveTab("3")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "3"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              BESTSELLING
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {activeTab === "1" && (
              <div className="grid lg:grid-cols-4 gap-4 px-6 py-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center rounded-full p-2 relative group"
                  >
                    <Link href={"/"}>
                      <Image
                        src={item.img}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover"
                      />
                    </Link>
                    <div className="absolute group-hover:w-full group-hover:h-full duration-700">
                      <Image
                        src={"/assates/shop/shop(3).jpg"}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover invisible group-hover:visible group-hover:opacity-100"
                      />

                      <div className="flex gap-10 absolute bottom-30 left-10 invisible group-hover:visible duration-700">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                        <FontAwesomeIcon
                          icon={faBagShopping}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                      </div>
                    </div>

                    <div className=" mt-2 p-1">
                      <h1 className="text-xl font-semibold text-gray-500">
                        {item.title}
                      </h1>
                      <p className="font-semibld text-gray-500">{item.cost}</p>
                      <div className="flex gap-2">
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
                        <p className="font-semibld text-gray-500">
                          {item.review}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}


            {activeTab === "2" && <div className="grid lg:grid-cols-4 gap-4 px-6 py-6">
                {items.reverse().map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center rounded-full p-2 relative group"
                  >
                    <Link href={"/"}>
                      <Image
                        src={item.img}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover"
                      />
                    </Link>
                    <div className="absolute group-hover:w-full group-hover:h-full duration-700">
                      <Image
                        src={"/assates/shop/shop(3).jpg"}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover invisible group-hover:visible group-hover:opacity-100"
                      />

                      <div className="flex gap-10 absolute bottom-30 left-10 invisible group-hover:visible duration-700">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                        <FontAwesomeIcon
                          icon={faBagShopping}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                      </div>
                    </div>

                    <div className=" mt-2 p-1">
                      <h1 className="text-xl font-semibold text-gray-500">
                        {item.title}
                      </h1>
                      <p className="font-semibld text-gray-500">{item.cost}</p>
                      <div className="flex gap-2">
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
                        <p className="font-semibld text-gray-500">
                          {item.review}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>}
            {activeTab === "3" && <div className="grid lg:grid-cols-4 gap-4 px-6 py-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center rounded-full p-2 relative group"
                  >
                    <Link href={"/"}>
                      <Image
                        src={item.img}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover"
                      />
                    </Link>
                    <div className="absolute group-hover:w-full group-hover:h-full duration-700">
                      <Image
                        src={"/assates/shop/shop(3).jpg"}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover invisible group-hover:visible group-hover:opacity-100"
                      />

                      <div className="flex gap-10 absolute bottom-30 left-10 invisible group-hover:visible duration-700">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                        <FontAwesomeIcon
                          icon={faBagShopping}
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
                        />
                      </div>
                    </div>

                    <div className=" mt-2 p-1">
                      <h1 className="text-xl font-semibold text-gray-500">
                        {item.title}
                      </h1>
                      <p className="font-semibld text-gray-500">{item.cost}</p>
                      <div className="flex gap-2">
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
                        <p className="font-semibld text-gray-500">
                          {item.review}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
