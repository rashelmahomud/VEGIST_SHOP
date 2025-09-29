import Image from "next/image";

const DiscountCard = () => {
  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="relative overflow-hidden">
        <Image
          src={"/assates/banner-1.webp"}
          width={620}
          height={200}
          alt="dicount image"
          className="transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute left-0 top-26 pl-8">
          <h1 className="lg:text-4xl text-2xl font-semibold mb-4 text-gray-700">
            Fresh fruit,vegetable on <br /> our product
          </h1>
          <button className="py-2 px-6 bg-yellow-400 rounded-full font-semibold text-white hover:outline hover:yellow-none hover:bg-white hover:text-yellow-500 duration-300">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={"/assates/banner-3.webp"}
          width={620}
          height={200}
          alt="dicount image"
          className="transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute left-0 top-26 pl-8">
          <h1 className="lg:text-4xl text-2xl font-semibold mb-4 text-gray-700">
            Vegetable eggplant <br /> 100% fresh food
          </h1>
          <button className="py-2 px-6 bg-yellow-400 rounded-full font-semibold text-white hover:outline hover:yellow-none hover:bg-white hover:text-yellow-500 duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
