import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faHeadphones, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "antd/es/input/Search";
import Image from "next/image";
import Link from "next/link";
const Navber = () => {
  return (
    <div className="">
      <h1 className="text-center bg-gray-900 text-white p-4 font-semibold">
        <span className="animate-ping text-yellow-500 duration-500 opacity-100 font-semibold">
          Free shipping
        </span>
        orders from all item
      </h1>
      <div className="container mx-auto py-4 px-2 m-3 lg:px-30">
        
        <div className="grid grid-cols-3 justify-center items-center">
          <div className="">
            <Image
              src={"/assates/logo-1.svg"}
              width={100}
              height={100}
              alt="image logo"
            />
          </div>

          <div>
            <Search
              placeholder="search your stor"
              size="large"
              enterButton
              variant="outlined"
            />
          </div>

          <div className="grid grid-cols-2 mx-auto mr-10 justify-center items-center">
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faUser}
                className="w-8 hover:text-yellow-500 duration-300 text-gray-500"
              />
              <div>
                <Link href={"/"}>
                  <h1 className="hover:text-yellow-500 duration-300 font-semibold text-gray-500">
                    ACCOUNT
                  </h1>
                </Link>
                <Link href={"/"}>
                  <small className="hover:text-yellow-500 duration-300 font-semibold text-gray-500">
                    Register | Login
                  </small>
                </Link>
              </div>
            </div>

            <div className="flex gap-5 mx-5 justify-center items-center">
              <Link href={"/"}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="w-8 hover:text-yellow-500 duration-300 text-gray-500"
                />
              </Link>
              <Link href={"/"}>
                <FontAwesomeIcon
                  icon={faShopify}
                  className="w-8 hover:text-yellow-500 duration-300 text-gray-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    <p className="border-b-1 mx-36 border-gray-200 "></p>
      <div className="flex justify-between items-center lg:px-36">
     
        <ul className="grid grid-cols-6 gap-5 divide-x-1 divide-gray-300">
          <li className="text-gray-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-gray-500">
            <Link href={"/"}>Shop</Link>
          </li>
          <li className="text-gray-500">
            <Link href={"/"}>Collection</Link>
          </li>
          <li className="text-gray-500">
            <Link href={"/"}>Blogs</Link>
          </li>
          <li className="text-gray-500">
            <Link href={"/"}>Pages</Link>
          </li>
          <li className="text-gray-500">
            <Link href={"/"}>Buy vegist</Link>
          </li>
        </ul>
        <div className="flex jusity-center items-center lg:mr-18 gap-5">
            <FontAwesomeIcon icon={faHeadphones} className="w-8 text-gray-500" />
            <div>
                <h1 className="ml-2 font-semibold text-gray-500">Hotline:</h1>
                <span className="font-semibold hover:text-yellow-500 duration-300 text-gray-500">+8801835199061</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
