import Image from "next/image";
import Link from "next/link";

const SubCollection = () => {
  return (
    <ul className="flex lg:w-[830px] p-2 bg-gray-50">
      <Link href={"/"}>
        <li>
          <Image
            className="p-2 w-full"
            src={"/assates/menuImage/banner5.jpg"}
            width={200}
            height={200}
            alt="image submenu"
          />
        </li>
      </Link>
      <Link href={"/"}>
        <li>
          <Image
            className="p-2 w-full"
            src={"/assates/menuImage/banner6.jpg"}
            width={200}
            height={200}
            alt="image submenu"
          />
        </li>
      </Link>
      <Link href={"/"}>
        <li>
          <Image
            className="p-2 w-full"
            src={"/assates/menuImage/image1.jpg"}
            width={200}
            height={200}
            alt="image submenu"
          />
        </li>
      </Link>
    </ul>
  );
};

export default SubCollection;
