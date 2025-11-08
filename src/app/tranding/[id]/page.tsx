"use client";
import { ProductsType } from "@/components/type/ProductType";
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
  faRing,
  faWarning,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Rate } from "antd";
import Link from "next/link";
import TrandingPage from "../page";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

const TrandingId = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = React.use(params);

  const [active, setActive] = useState("1");
  const [open, setOpen] = useState(false);
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

  const { id } = resolvedParams;
  const {
    handelCart,
    cart,
    handelIncrement,
    handelDicrement,
    kg,
    country,
    setCountry,
    handelClick,
  } = useCart();

  const productDetails = items.find(
    (item) => item.id.toString() === id.toString()
  );

  if (!productDetails) {
    return <p>Loading ....</p>;
  }

  const currentProduct = cart.find(
    (item: any) => item.id === productDetails?.id
  );

  const handelCountry = (country: string) => {
    setCountry(country);
  };

  const reviewOpen = () => {
    setOpen(true);
  };
  const cancelReview = () => {
    setOpen(false);
  };

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
        <div className="lg:flex lg:flex-row gap-5">
          <div className="basis-2/2">
            {/* =============== map area downwords */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
              <div>
                <div>
                  <Image
                    src={productDetails?.img}
                    width={380}
                    height={500}
                    alt="image"
                  />
                </div>

                <div className="flex gap-10 mt-5">
                  <Image
                    className="border-1 border-gray-300 hover:border-yellow-500"
                    src={"/assates/tendingProduct/tran (3).jpg"}
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <Image
                    className="border-1 border-gray-300 hover:border-yellow-500"
                    src={productDetails?.img}
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <Image
                    className="border-1 border-gray-300 hover:border-yellow-500"
                    src={"/assates/tendingProduct/tran (2).jpg"}
                    width={100}
                    height={100}
                    alt="image"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-gray-600">
                  {productDetails?.title}
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
                  <p className="flex gap-3">
                    $
                    {(
                      (productDetails?.cost || 0) *
                      (currentProduct?.quantity || 1)
                    ).toFixed(2)}
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

                {/* how kg needs for your */}
                <div className="text-gray-500">
                  <p>Size : {kg}kg</p>
                  <div className="flex gap-5 mt-3">
                    {productDetails?.kgs?.map((kg) => (
                      <Link
                        key={kg}
                        onClick={() => handelClick(currentProduct?.id, kg)}
                        href={""}
                        className="bg-gray-200 hover:border hover:border-yellow-500 active border border-yellow-500 rounded-full px-3 py-2"
                      >
                        {kg}kg
                      </Link>
                    ))}
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
                <div className="flex lg:justify-start justify-center my-5 gap-5">
                  <h1 className="text-xl font-semibold text-gray-600">
                    Quantity :
                  </h1>
                  {/* count section  */}
                  <div className="border px-3 py-1 rounded-full hover:border-yellow-500">
                    <button onClick={() => handelIncrement(productDetails?.id)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>

                    <span className="mx-5">
                      {currentProduct?.quantity || 0}
                    </span>

                    <button onClick={() => handelDicrement(productDetails?.id)}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 p-2 lg:justify-start justify-center">
                  {/* add to cart section  */}
                  <button>
                    <Link
                      onClick={() =>
                        productDetails && handelCart(productDetails)
                      }
                      href={``}
                      className="lg:px-14 px-3 py-3 text-white text-semibold bg-yellow-500 rounded-full"
                    >
                      Add to cart
                    </Link>
                  </button>
                  <button className="text-gray-600">
                    <Link
                      href={"/cart"}
                      className="lg:px-14 px-3 py-3 text-white text-semibold bg-gray-800 rounded-full"
                    >
                      Buy it now
                    </Link>
                  </button>
                </div>
                <div className="flex items-center lg:justify-start justify-center my-3 gap-5">
                  <FontAwesomeIcon icon={faHeart} />
                  <h3>Wishlist</h3>
                </div>
                <p className="border-b border-gray-200 my-3"></p>
                <div className="flex flex-col lg:items-start items-center">
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
            </div>
            {/* ============== map area */}
          </div>
          <div className="basis-1/3 lg:mt-0 mt-3">
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
      <div>
        <div className="lg:flex gap-10 justify-center mb-5">
          <button className="border rounded-full py-2 px-3 border-gray-400">
            <Link onClick={() => setActive("1")} href={""}>
              DESCRIPTION
            </Link>
          </button>
          <button className="hover:border rounded-full py-2 px-3 border-gray-400">
            <Link onClick={() => setActive("2")} href={""}>
              ADDITIONAL INFORMATION
            </Link>
          </button>
          <button className="hover:border rounded-full py-2 px-3 border-gray-400">
            <Link onClick={() => setActive("3")} href={""}>
              REVIEWS
            </Link>
          </button>
        </div>
        <div className="lg:px-36 p-3">
          <div>
            {active === "1" && (
              <div>
                <div>
                  <h1 className="text-2xl font-semibold mb-2 text-gray-600">
                    More Detail
                  </h1>
                  <ul>
                    <li className="p-2 text-gray-600">
                      <FontAwesomeIcon
                        icon={faRing}
                        className="mr-3 text-gray-400 text-sm"
                      />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </li>
                    <li className="p-2 text-gray-600">
                      <FontAwesomeIcon
                        icon={faRing}
                        className="mr-3 text-gray-400 text-sm"
                      />
                      Lorem Ipsum has been the ‘s standard dummy text. Lorem
                      Ipsumum is simply dummy text.
                    </li>
                    <li className="p-2 text-gray-600">
                      <FontAwesomeIcon
                        icon={faRing}
                        className="mr-3 text-gray-400 text-sm"
                      />
                      type here your detail one by one li more add
                    </li>
                    <li className="p-2 text-gray-600">
                      <FontAwesomeIcon
                        icon={faRing}
                        className="mr-3 text-gray-400 text-sm"
                      />
                      has been the industry’s standard dummy text ever since.
                      Lorem Ips
                    </li>
                    <li className="p-2 text-gray-600">
                      <FontAwesomeIcon
                        icon={faRing}
                        className="mr-3 text-gray-400 text-sm"
                      />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li className="p-2 text-gray-600">
                      <FontAwesomeIcon
                        icon={faRing}
                        className="mr-3 text-gray-400 text-sm"
                      />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the ‘s standard
                      dummy text. Lorem Ipsum has been the industry’s standard
                      dummy text ever since. Lorem Ipsum is simply dummy text.
                    </li>
                  </ul>
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-700 mb-3">
                      Key Specification
                    </h1>
                    <ul>
                      <li className="p-2 text-gray-500 text-sm">
                        <FontAwesomeIcon
                          icon={faRing}
                          className="mr-2 text-gray-500"
                        />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </li>
                      <li className="p-2 text-gray-500 text-sm">
                        <FontAwesomeIcon
                          icon={faRing}
                          className="mr-2 text-gray-500"
                        />
                        Lorem Ipsum has been the ‘s standard dummy text. Lorem
                        Ipsumum is simply dummy text.
                      </li>
                      <li className="p-2 text-gray-500 text-sm">
                        <FontAwesomeIcon
                          icon={faRing}
                          className="mr-2 text-gray-500"
                        />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the ‘s
                        standard dummy text. Lorem Ipsum has been the industry’s
                        standard dummy text ever since. Lorem Ipsum is simply
                        dummy text.
                      </li>
                      <li className="p-2 text-gray-500 text-sm">
                        <FontAwesomeIcon
                          icon={faRing}
                          className="mr-2 text-gray-500"
                        />
                        has been the industry’s standard dummy text ever since.
                        Lorem Ips.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            {active === "2" && (
              <div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 border p-2 w-1/2 border-gray-300">
                    vendor:
                  </span>
                  <p className="text-gray-500 border p-2 w-full border-gray-300">
                    vegist
                  </p>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 border p-2 w-1/2 border-gray-300">
                    size:
                  </span>
                  <p className="text-gray-500 p-2 w-full border border-gray-300">
                    1kg, 2kg, 3kg
                  </p>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 border p-2 w-1/2 border-gray-300">
                    Meterial:
                  </span>
                  <p className="text-gray-500 p-2 w-full border border-gray-300">
                    canada, india, germany
                  </p>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 border p-2 w-1/2 border-gray-300">
                    SKU:
                  </span>
                  <p className="text-gray-500 p-2 w-full border border-gray-300">
                    123456
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            {active === "3" && (
              <div>
                <h1 className="text-2xl font-semibold text-gray-600 text-center">
                  Customer Reviews
                </h1>
                <div className="flex justify-center gap-10 my-10 items-center">
                  <div className="border-r-1 p-3 border-gray-300">
                    <Rate disabled />
                    <p className="text-sm text-gray-500">
                      Be the first to write a review
                    </p>
                  </div>
                  <div>
                    <button onClick={() => reviewOpen()}>
                      <Link
                        href={""}
                        className="lg:py-3 py-1 lg:px-5 px-2 text-white font-semibold bg-yellow-500 rounded-full"
                      >
                        Write a review
                      </Link>
                    </button>
                  </div>
                </div>
                {/* // hidden subject  */}
                {/* review part  */}
                {open ? (
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-500">
                        Write a review
                      </h1>
                      <h4 className="text-center my-2 text-gray-500">Rating</h4>
                      <Rate />
                      <h4 className="text-center my-3 text-gray-500">
                        Review Title
                      </h4>
                    </div>
                    <div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Give your review a little"
                          className="w-96 py-2 px-4 border border-gray-300"
                        />
                        <h2 className="text-center text-gray-500 my-3">
                          review
                        </h2>
                        <textarea
                          className="border border-gray-300 w-full p-2"
                          placeholder="write your comments here"
                        />
                      </div>
                      <div className="flex gap-10 justify-center mt-3">
                        <button
                          className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg"
                          onClick={() => cancelReview()}
                        >
                          <Link href={""}>Cancel Review</Link>
                        </button>
                        <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg">
                          <Link href={""}>Submite Review</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:px-36 p-3">
        <TrandingPage />
      </div>
    </div>
  );
};

export default TrandingId;
