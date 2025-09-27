import { faShopify } from "@fortawesome/free-brands-svg-icons";
import {
  faHeadphones,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "antd/es/input/Search";
import Image from "next/image";
import Link from "next/link";
import Submenu from "./Submenu";
import SubCollection from "./SubCollection";
const Navber = () => {
  const menuDesign = "font-bold text-gray-500 mb-2 hover:text-yellow-500 duration-300 w-full";
  return (
    <div className="">
      <h1 className="text-center bg-gray-900 text-white p-4 font-semibold">
        <span className="animate-ping text-yellow-500 duration-300 opacity-100 font-semibold mx-2">
           Free shipping
        </span>
         orders from all item
      </h1>
      <div className="container mx-auto py-4 px-2 m-3 lg:px-30">
        <div className="grid lg:grid-cols-3 justify-center items-center">
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
              
              className=""
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
      <p className="border-b-1 mx-36 border-gray-200 mb-2"></p>
      <div className="lg:flex justify-between items-center  lg:px-36 px-3">
        <ul className="grid lg:grid-cols-6 lg:gap-5 gap-2 divide-x-1 divide-gray-300">
          <li className="group text-gray-500 flex gap-1 hover:text-yellow-500 duration-200 relative duration-300 font-semibold">
            <Link href={"/"} className="">
              Home
            </Link>
            <FontAwesomeIcon icon={faAngleDown} className="w-3" />
            <ul className="absolute mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 z-1 bg-white w-full text-center rounded-b-lg">
              <Link href={"/"}>
                <li className={menuDesign}>about</li>
              </Link>
              <Link href={"/"}>
                <li className={menuDesign}>contact</li>
              </Link>
              <Link href={"/"}>
                <li className={menuDesign}>blogs</li>
              </Link>
              <Link href={"/"}>
                <li className={menuDesign}>use me</li>
              </Link>
              <Link href={"/"}>

                <li className={menuDesign}>vegist</li>
              </Link>
            </ul>
          </li>
          <li className="group text-gray-500 flex gap-1 hover:text-yellow-500 duration-200 relative duration-300 font-semibold">
            <Link href={"/"}>Shop</Link>
            <FontAwesomeIcon icon={faAngleDown} className="w-3" />
            {/* <p className="absolute mt-10 w-[1000px] -ml-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300"> <Submenu /></p> */}
            <div className="absolute mt-10 invisible group-hover:opacity-100 group-hover:visible duration-300 z-1">
              <Submenu />
            </div>
          </li>

          <li className="group text-gray-500 flex gap-1 hover:text-yellow-500 duration-200 font-semibold relative duration-300">
            <Link href={"/"}>Collection</Link>
            <FontAwesomeIcon icon={faAngleDown} className="w-3" />
            <div className="absolute mt-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300 "><SubCollection /></div>
          </li>
          <li className="text-gray-500 hover:text-yellow-500 duration-200 font-semibold">
            <Link href={"/"}>Blogs</Link>
          </li>
          <li className="group text-gray-500 flex gap-1 hover:text-yellow-500 duration-200 relative duration-300 font-semibold">
            <Link href={"/"}>Pages</Link>
            <FontAwesomeIcon icon={faAngleDown} className="w-3" />
            <ul className="absolute m-2 mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 w-[150px] rounded-b-lg z-1 bg-white text-center">
             <Link href={'/'}> <li className={menuDesign}>About US</li></Link>
              <Link href={'/'}><li className={menuDesign}>Contact Us</li></Link>
              <Link href={'/'}><li className={menuDesign}>Payment Policy</li></Link>
              <Link href={'/'}><li className={menuDesign}>Privet Policy</li></Link>
              <Link href={'/'}><li className={menuDesign}>Privet Policy</li></Link>
              <Link href={'/'}><li className={menuDesign}>Return Policy</li></Link>
             <Link href={'/'}> <li className={menuDesign}>conditions</li></Link>
            </ul>
          </li>
          <li className="text-gray-500 hover:text-yellow-500 duration-200 font-semibold">
            <Link href={"/"}>Buy vegist</Link>
          </li>
        </ul>
        <div className="flex jusity-center items-center lg:mr-18 gap-5">
          <Link href={"/"}>
            <FontAwesomeIcon
              icon={faHeadphones}
              className="w-8 text-gray-500 hover:text-yellow-500"
            />
          </Link>
          <div>
            <h1 className="ml-2 font-semibold text-gray-500">Hotline:</h1>
            <Link href={"/"}>
              <span className="font-semibold hover:text-yellow-500 duration-300 text-gray-500">
                +8801835199061
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
