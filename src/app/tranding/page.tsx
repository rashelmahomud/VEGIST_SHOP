import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

const TrandingPage = () => {
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
  ];
  const shops: Products[] = [
    {
      id: 1,
      title: "fresh fish",
      cost: "$12.00",
      review: "no review",
      img: "/assates/shop/shop(5).jpg",
    },
    {
      id: 2,
      title: "fresh fish",
      cost: "$15.00",
      review: "no review",
      img: "/assates/tendingProduct/copi.jpg",
    },
    {
      id: 3,
      title: "fresh fish",
      cost: "$10.00",
      review: "no review",
      img: "/assates/shop/shop(9).jpg",
    },
    {
      id: 4,
      title: "fresh fish",
      cost: "$15.00",
      review: "no review",
      img: "/assates/shop/shop(10).webp",
    },
  ];
  return (
    <div className="mt-20 py-10">
      <h1 className="text-4xl font-semibold text-gray-600 text-center mb-2">
        Trending products
      </h1>
      <Carousel>
        <div>
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
                    <p className="font-semibld text-gray-500">{item.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* slide 0.2  */}
        <div>
          <div className="grid grid-cols-4 gap-4 px-6 py-6">
            {shops.map((shop) => (
              <div
                key={shop.id}
                className="flex flex-col justify-center rounded-full p-2 relative group"
              >
                <Link href={"/"}>
                  <Image
                    src={shop.img}
                    alt="cat1"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover "
                  />
                </Link>
                <div className=" mt-2 p-1">
                  <h1 className="text-xl font-semibold text-gray-500">
                    {shop.title}
                  </h1>
                  <p className="font-semibld text-gray-500">{shop.cost}</p>
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
                    <p className="font-semibld text-gray-500">{shop.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TrandingPage;
