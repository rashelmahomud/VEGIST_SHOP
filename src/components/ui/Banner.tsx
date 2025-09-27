import { Carousel } from "antd";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mt-2">
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div className="relative">
          <Image
            src={"/assates/banner/slider1.webp"}
            alt=""
            width={1600}
            height={600}
          />
          <div className="absolute top-0 left-0 lg:mx-36 top-50">
            <h1 className="font-semibold text-2xl text-gray-800">
              Summer vage sale
            </h1>
            <h2 className="lg:text-6xl text-3xl my-3 text-gray-800 font-semibold">
              Fresh fruits <br />& vegitables
            </h2>
            <button className="py-2 px-6 bg-yellow-400 rounded-full font-semibold text-white hover:outline hover:yellow-none hover:bg-white hover:text-yellow-500">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={
              "/assates/banner/slider3_7f623fd1-a932-4b5c-92c7-292044869712.webp"
            }
            alt=""
            width={1600}
            height={600}
          />
          <div className="absolute top-50 left-92 lg:mx-36 text-center">
            <h1 className="font-semibold text-2xl text-gray-800">
              Top Selling!
            </h1>
            <h2 className="lg:text-6xl text-3xl my-3 text-gray-800 font-semibold mb-8 text-gray-800">
              Fresh for your health
            </h2>
            <button className="py-2 px-6 bg-yellow-400 rounded-full font-semibold text-white hover:outline hover:yellow-none hover:bg-white hover:text-yellow-500">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/assates/banner/slider2.webp"}
            alt=""
            width={1600}
            height={600}
          />
          <div className="absolute top-0 right-0 lg:mx-36 top-50">
            <h1 className="font-semibold text-2xl text-gray-800">
              Summer vage sale
            </h1>
            <h2 className="lg:text-6xl text-3xl my-3 text-gray-800 font-semibold">
              Prod Of Indian <br />
              100% packeging
            </h2>
            <button className="py-2 px-6 bg-yellow-400 rounded-full font-semibold text-white hover:outline hover:yellow-none hover:bg-white hover:text-yellow-500">
              Shop Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
