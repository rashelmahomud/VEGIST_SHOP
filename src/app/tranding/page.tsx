"use client";

import { Products } from "@/components/type/ProductType";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  faEye,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoritePage from "../favorite/page";
import { useFavorite } from "@/context/FavoriteContext";

// interface TrandingPageProps {
//   favorite: Products[];
//   setFavorite: React.Dispatch<React.SetStateAction<Products[]>>;
// }

const TrandingPage = () => {
// const TrandingPage = ({ favorite, setFavorite }: TrandingPageProps) => {

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
      title: "Fresh Vegetable",
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
      title: "Fresh mango",
      cost: "$20.00",
      review: "no review",
      img: "/assates/tendingProduct/tran (4).jpg",
    },
    {
      id: 5,
      title: "Fresh fish",
      cost: "$12.00",
      review: "no review",
      img: "/assates/shop/shop(5).jpg",
    },
    {
      id: 6,
      title: "Coffee beans",
      cost: "$15.00",
      review: "no review",
      img: "/assates/tendingProduct/copi.jpg",
    },
    {
      id: 7,
      title: "Seafood platter",
      cost: "$10.00",
      review: "no review",
      img: "/assates/shop/shop(9).jpg",
    },
    {
      id: 8,
      title: "Fresh shrimp",
      cost: "$15.00",
      review: "no review",
      img: "/assates/shop/shop(10).webp",
    },
  ];
  // const {favorite} = useContext(FavoriteContext)

  // ✅ Handle Heart Click
  const { favorites, toggleFavorite } = useFavorite();

  // const handleHeart = (item: Products) => {
  //   const isFavorite = favorites.some((fav) => fav.id === item.id);
  //   if (isFavorite) {
  //     // Remove from favorites
  //     toggleFavorite(favorites.filter((fav) => fav.id !== item.id));
  //   } else {
  //     // Add to favorites
  //      toggleFavorite([...favorites, item]);
  //   }
  // };


  return (
    <div className="mt-20 py-10">
      <h1 className="text-4xl font-semibold text-gray-600 text-center mb-2">
        Trending Products
      </h1>

      <Carousel autoplay autoplaySpeed={3000}>
        {/* Slide 1 */}
        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-6 py-6">
            {items.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center rounded-lg p-2 relative group"
              >
                <Link href={`/tranding/${item.id}`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </Link>

                {/* Hover Layer */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg flex justify-center items-center gap-4">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                  />
                  <FontAwesomeIcon
                    onClick={() => toggleFavorite(item)}
                    icon={faHeart}
                    className={`w-10 p-2 bg-white duration-300 rounded-full cursor-pointer ${
                      favorites.some((fav) => fav.id === item.id)
                        ? "text-red-500"
                        : "text-gray-500 hover:text-white hover:bg-yellow-500"
                    }`}
                  />
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                  />
                </div>

                <div className="mt-2 p-1">
                  <h1 className="text-xl font-semibold text-gray-500">
                    {item.title}
                  </h1>
                  <p className="font-semibold text-gray-500">{item.cost}</p>
                  <div className="flex gap-1 items-center">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="w-3 text-yellow-600"
                      />
                    ))}
                    <p className="ml-1 text-gray-500">{item.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-6 py-6">
            {items.slice(4, 8).map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center rounded-lg p-2 relative group"
              >
                <Link href={`/tranding/${item.id}`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </Link>

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg flex justify-center items-center gap-4">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                  />
                  <FontAwesomeIcon
                    onClick={() => toggleFavorite(item)}
                    icon={faHeart}
                    className={`w-10 p-2 bg-white duration-300 rounded-full cursor-pointer ${
                      favorites.some((fav) => fav.id === item.id)
                        ? "text-red-500"
                        : "text-gray-500 hover:text-white hover:bg-yellow-500"
                    }`}
                  />
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                  />
                </div>

                <div className="mt-2 p-1">
                  <h1 className="text-xl font-semibold text-gray-500">
                    {item.title}
                  </h1>
                  <p className="font-semibold text-gray-500">{item.cost}</p>
                  <div className="flex gap-1 items-center">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="w-3 text-yellow-600"
                      />
                    ))}
                    <p className="ml-1 text-gray-500">{item.review}</p>
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
