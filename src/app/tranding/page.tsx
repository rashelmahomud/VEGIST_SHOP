import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

const TrandingPage = () => {
      const items = [
    { id: 1, title: "Sp. red fresh guava", img: "/assates/tendingProduct/tran (1).jpg" },
    { id: 2, title: "Fresh Vegitable", img: "/assates/tendingProduct/tran (2).jpg" },
    { id: 3, title: "Orange juice naturale", img: "/assates/tendingProduct/tran (3).jpg" },
    { id: 4, title: "fresh mango", img: "/assates/tendingProduct/tran (4).jpg" }
   
  ];
  const shops = [
    { id: 1, title: "fresh fish", img: "/assates/shop/shop(5).jpg" },
    { id: 2, title: "fresh fish", img: "/assates/shop/shop(6).webp" },
    { id: 3, title: "fresh fish", img: "/assates/shop/shop(9).jpg" },
    { id: 4, title: "fresh fish", img: "/assates/shop/shop(10).webp" }

  ];
  return (
    <div className="mt-20 py-10">
      <h1 className="text-4xl font-semibold text-gray-600 text-center mb-2">
        Trending products
      </h1>
        <Carousel autoplay>
        <div>
          <div className="grid grid-cols-4 gap-4 px-6 py-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center  rounded-full p-2 relative group"
              >
                <Link
                  href={"/"}
                  className="border rounded-full border-gray-300"
                >
                  <Image
                    src={item.img}
                    alt="cat1"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </Link>

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
                className="flex items-center justify-center rounded-full p-2 relative group"
              >
                <Link
                  href={"/"}
                  className="border rounded-full border-gray-300"
                >
                  <Image
                    src={shop.img}
                    alt="cat1"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover "
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

export default TrandingPage;
