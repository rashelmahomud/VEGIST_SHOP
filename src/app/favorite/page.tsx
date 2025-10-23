"use client";
import { useFavorite } from "@/context/FavoriteContext";
import Image from "next/image";

const FavoritePage = () => {
  const { favorites, toggleFavorite } = useFavorite();
  console.log(favorites, "favorites");

  return (
    <div className="lg:px-36 p-3 my-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        ❤️ Your Favorites
      </h2>
      {favorites?.length > 0 && (
        <div className="mt-10 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {favorites.map((fav: any) => (
              <div key={fav.id} className="p-2 border rounded-lg">
                <Image
                  src={fav.img}
                  alt={fav.title}
                  width={350}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <p className="text-gray-600 mt-2">{fav.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
