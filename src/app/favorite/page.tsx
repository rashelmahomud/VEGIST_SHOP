"use client";
import { useFavorite } from "@/context/FavoriteContext";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const FavoritePage = () => {
  const { favorites, toggleFavorite } = useFavorite();

  return (
    <div className="lg:px-36 p-3 my-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        ❤️ Your Favorites
      </h2>
      {favorites?.length > 0 && (
        <div className="mt-10 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {favorites.map((item: any) => (
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
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg">
                  <Link href={`/tranding/${item.id}`}>
                    <Image
                      src={"/assates/shop/shop(1).jpg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover relative"
                    />
                  </Link>
                  <div className="flex gap-4 left-20 absolute top-50">
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
      )}
    </div>
  );
};

export default FavoritePage;
