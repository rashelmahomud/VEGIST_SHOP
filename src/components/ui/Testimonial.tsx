import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

const Testimonial = () => {
  const images = [
    "/assates/testi/1.avif",
    "/assates/testi/2.avif",
    "/assates/testi/3.avif",
    "/assates/testi/4.avif",
    "/assates/testi/6.webp",
  ];
  return (
    <div className="w-full lg:my-20 my-5 lg:px-36">
      <Carousel
        dots={false}
        autoplay
        infinite
        autoplaySpeed={3000} // slow move
        slidesToShow={5} // show 5 items
        slidesToScroll={1} // scroll 1 by 1
        pauseOnHover={true}
        responsive={[
          {
            breakpoint: 1280,
            settings: {slidesToShow: 4}
          },
           {
            breakpoint: 768, // sm screens
            settings: { slidesToShow: 2 },
          },
        ]}
      >
        {images.map((src, i) => (
          <div key={i} className="px-2">
            <Link href={"/"}>
              <Image
                src={src}
                alt={`img`}
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
