import { Carousel } from "antd";
import Image from "next/image";

const Categori = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-semibold text-gray-600 text-center mb-2">
        Shop by Category
      </h1>

      <Carousel autoplay dots={true}>
        <div>
          <div className="grid grid-cols-6 gap-4 px-6 py-6">
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat1"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat2"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat3"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat4"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat5"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat6"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
          </div>
        </div>
        {/* slide 0.2  */}
        <div>
          <div className="grid grid-cols-6 gap-4 px-6 py-6">
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat1"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat2"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat3"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat4"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat5"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <Image
                src="/assates/shop/25_525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg"
                alt="cat6"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Categori;
