import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

const Categori = () => {
  interface Categori {
    id: number;
    title: string;
    img: string;
  }

  const items: Categori[] = [
    { id: 1, title: "Fresh Fist", img: "/assates/shop/shop (1).jpg" },
    { id: 2, title: "Fresh Vegitable", img: "/assates/shop/shop (2).jpg" },
    { id: 3, title: "Fresh Orange", img: "/assates/shop/shop (3).jpg" },
    { id: 4, title: "fresh mango", img: "/assates/shop/shop (4).jpg" },
    { id: 5, title: "excellent mongo", img: "/assates/shop/shop (5).jpg" },
    { id: 6, title: "fresh fish", img: "/assates/shop/shop (6).jpg" },
    { id: 7, title: "fresh fish", img: "/assates/shop/shop(7).jpg" },
    { id: 8, title: "fresh fish", img: "/assates/shop/shop(8).webp" },
    { id: 9, title: "fresh fish", img: "/assates/shop/shop(9).jpg" },
    { id: 10, title: "fresh fish", img: "/assates/shop/shop(10).webp" },
    { id: 11, title: "fresh fish", img: "/assates/shop/shop(1).jpg" },
    { id: 12, title: "fresh fish", img: "/assates/shop/shop(5).jpg" },
  ];

  return (
    <div className="lg:my-20 my-5">
      <Carousel
        dots={false}
        autoplay
        infinite
        autoplaySpeed={3000} // slow move
        slidesToShow={6} // show 5 items
        slidesToScroll={1} // scroll 1 by 1
        pauseOnHover={true}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="items-center justify-center rounded-full p-2 relative group"
          >
            <Link href={"/"} className="">
              <Image
                src={item.img}
                alt="cat1"
                width={200}
                height={200}
                className="border border-0.5 border-gray-300 rounded-full object-cover w-40 h-40 "
              />
            </Link>
            <div className="absolute top-2 left-2 group-hover:bg-gray-800 group-hover:opacity-40 group-hover:text-white font-semibold group-hover:w-40 group-hover:h-40 group-hover:bg-gray-500 rounded-full duration-700 group-hover:scale-90 group-hover:rotate-180 group-hover:bg-gradient-to-tr group-hover:from-gray-800 group-hover:to-gray-500">
              <p className="invisible group-hover:visible text-center mt-15 group-hover:opacity-100">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Categori;
