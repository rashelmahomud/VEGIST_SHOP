import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

const Categori = () => {
  const items = [
    { id: 1, img: "/assates/shop/shop (1).jpg" },
    { id: 2, img: "/assates/shop/shop (2).jpg" },
    { id: 3, img: "/assates/shop/shop (3).jpg" },
    { id: 4, img: "/assates/shop/shop (4).jpg" },
    { id: 5, img: "/assates/shop/shop (5).jpg" },
    { id: 6, img: "/assates/shop/shop (6).jpg" },
  ];
  const shops = [
    { id: 7, img: "/assates/shop/shop(7).jpg" },
    { id: 8, img: "/assates/shop/shop(8).webp" },
    { id: 9, img: "/assates/shop/shop(9).jpg" },
    { id: 10, img: "/assates/shop/shop(10).webp" },
    { id: 11, img: "/assates/shop/shop(1).jpg" },
    { id: 12, img: "/assates/shop/shop(5).jpg" },
  ];

  return (
    <div className=" bg-gray-100 mt-20 px-2 py-10">
      <h1 className="text-4xl font-semibold text-gray-600 text-center mb-2">
        Shop by Category
      </h1>

      <Carousel autoplay dots={true}>
        <div>
          <div className="grid grid-cols-6 gap-4 px-6 py-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center  rounded-full p-2"
              >
                <Link href={"/"} className="border rounded-full border-gray-300">
                  <Image
                    src={item.img}
                    alt="cat1"
                    width={200}
                    height={200}
                    className="rounded-full object-cover w-40 h-40"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* slide 0.2  */}
        <div>
          <div className="grid grid-cols-6 gap-4 px-6 py-6">
            {shops.map((shop) => (
              <div
                key={shop.id}
                className="flex items-center justify-center rounded-full p-2"
              >
                <Link href={"/"} className="border rounded-full border-gray-300">
                  <Image
                    src={shop.img}
                    alt="cat1"
                    width={200}
                    height={200}
                    className="rounded-full object-cover w-40 h-40 "
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Categori;
