"use client";
import { ProductsType } from "@/components/type/ProductType";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  

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
  return (
    <div className="lg:px-36">
      <h1 className="text-4xl font-semibold text-gray-800 my-10 text-center">
        Our products
      </h1>
      <div>
        <div className="w-full mt-10">
          {/* Tab Headers */}
          <div className="lg:flex justify-center border-b border-gray-300">
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
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-6 py-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center rounded-full p-2 relative group"
                  >
                    <Link href={`/products/${item.id}`}>
                      <Image
                        src={item.img}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover relative"
                      />
                      {item.discount ? (
                        <span className="absolute top-3 right-5 z-1 text-white bg-red-600 p-1 px-2 w-12 h-7 flex justify-center items-center rounded-full">
                          {item.discount}
                        </span>
                      ) : (
                        ""
                      )}
                    </Link>
                    <div className="absolute group-hover:w-full group-hover:h-full duration-700">
                      <Link href={`/products/${item.id}`}>
                        <Image
                          src={item.images[2]}
                          alt="cat1"
                          width={300}
                          height={200}
                          className="rounded-lg object-cover invisible group-hover:visible group-hover:opacity-100 relative"
                        />
                      </Link>
                      <div className="flex gap-10 invisible group-hover:visible duration-100 absolute bottom-40 left-12">
                        <FontAwesomeIcon
                          className="bg-white text-gray-500 hover:text-white hover:bg-yellow-500 p-2 rounded-full w-10 duration-300"
                          icon={faEye}
                        />
                        <FontAwesomeIcon
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                          icon={faHeart}
                        />
                        <FontAwesomeIcon
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                          icon={faBagShopping}
                        />
                      </div>
                    </div>

                    <div className=" mt-2 p-1">
                      <h1 className="text-xl font-semibold text-gray-500">
                        {item.title}
                      </h1>
                      <p className="font-semibld text-gray-500">{item.cost}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-sm text-yellow-600"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-sm text-yellow-600"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-sm text-yellow-600"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-sm text-yellow-600"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-sm text-yellow-600"
                      />
                      <p className="font-semibld text-gray-500">
                        {item.review}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "2" && (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-6 py-6">
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
                        className="rounded-lg object-cover relative"
                      />
                      {item.discount ? (
                        <span className="absolute top-3 right-5 z-1 text-white bg-red-600 p-1 px-2 w-12 h-7 flex justify-center items-center rounded-full">
                          {item.discount}
                        </span>
                      ) : (
                        ""
                      )}
                    </Link>
                    <div className="absolute group-hover:w-full group-hover:h-full duration-700">
                      <Image
                        src={"/assates/shop/shop(3).jpg"}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover invisible group-hover:visible group-hover:opacity-100 relative"
                      />
                      <div className="flex gap-10 invisible group-hover:visible duration-100 absolute bottom-40 left-12">
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
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
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
            {activeTab === "3" && (
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
                        className="rounded-lg object-cover relative"
                      />
                      {item.discount ? (
                        <span className="absolute top-3 right-5 z-1 text-white bg-red-600 p-1 px-2 w-12 h-7 flex justify-center items-center rounded-full">
                          {item.discount}
                        </span>
                      ) : (
                        ""
                      )}
                    </Link>
                    <div className="absolute group-hover:w-full group-hover:h-full duration-700">
                      <Image
                        src={"/assates/shop/shop(3).jpg"}
                        alt="cat1"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover invisible group-hover:visible group-hover:opacity-100 relative"
                      />
                      <div className="flex gap-10 invisible group-hover:visible duration-100 absolute bottom-40 left-12">
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
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-sm text-yellow-600"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
