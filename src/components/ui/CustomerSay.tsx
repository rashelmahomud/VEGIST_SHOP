import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

const CustomerSayPage = () => {
  interface Products {
    id: number;
    title: string;
    description: string;
    name: string;
  }

  const items: Products[] = [
    {
      id: 1,
      title: "Friendly Supports",
      description:
        "Because the mail never stops. It just keeps coming and coming and coming Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps",
      name: "rashel mahomud",
    },
    {
      id: 2,
      title: "Friendly Supports",
      description:
        "Because the mail never stops. It just keeps coming and coming and coming Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps",
      name: "rashel mahomud",
    },
  ];
  const shops: Products[] = [
    {
      id: 1,
      title: "Friendly Supports",
      description:
        "Because the mail never stops. It just keeps coming and coming and coming Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps",
      name: "rashel mahomud",
    },
    {
      id: 2,
      title: "Friendly Supports",
      description:
        "Because the mail never stops. It just keeps coming and coming and coming Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps",
      name: "rashel mahomud",
    },
  ];
  return (
    <div className="lg:px-36 mt-10">
      <h1 className="text-4xl font-semibold text-gray-800 text-center">
        Our customer say
      </h1>
      <Carousel autoplay>
        <div>
          <div className="grid lg:grid-cols-2 gap-4 px-6 py-6 text-center">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center rounded-full p-2 relative group"
              >
                <div className=" mt-2 p-1">
                  <FontAwesomeIcon
                    className="bg-yellow-500 border rounded-full p-2 text-white border-5 border-yellow-300 w-20"
                    icon={faQuoteLeft}
                  />

                  <h1 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h1>
                  <p className="font-semibld text-gray-500">
                    {item.description}
                  </p>
                  <p className="font-semibld text-gray-700 text-xl">
                    {item.name}
                  </p>
                  <div className="flex gap-2 justify-center items-center mt-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* slide 0.2  */}
        <div>
          <div className="grid grid-cols-2 gap-4 px-6 py-6 text-center">
            {shops.map((shop) => (
              <div
                key={shop.id}
                className="flex flex-col justify-center rounded-full p-2 relative group"
              >
                <div className=" mt-2 p-1">
                  <FontAwesomeIcon
                    className="bg-yellow-500 border rounded-full p-2 text-white border-5 border-yellow-300 w-20"
                    icon={faQuoteLeft}
                  />{" "}
                  <h1 className="text-xl font-semibold text-gray-800">
                    {shop.title}
                  </h1>
                  <p className="font-semibld text-gray-500">
                    {shop.description}
                  </p>
                  <p className="font-semibld text-gray-700 text-xl">
                    {shop.name}
                  </p>
                  <div className="flex gap-2 justify-center items-center mt-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomerSayPage;
