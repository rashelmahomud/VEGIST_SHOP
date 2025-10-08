import { faHeadphones } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Submenu from "./Submenu";
import SubCollection from "./SubCollection";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const NavDivise = () => {
  // const [childrenDaware, setChildrenDaware] = useState(false);
  // const showChildrenDaware = () => {
  //   setChildrenDaware(true);
  // };

  // const onChildrenDrawerClose = () => {
  //   setChildrenDaware(false);
  // };

  const menuDesign =
    "font-bold text-gray-500 mb-2 hover:text-yellow-500 duration-300 w-full";
  return (
    <div className="lg:flex justify-between items-center lg:px-36 px-3">
      <ul className="grid lg:grid-cols-6 lg:gap-5 gap-2 divide-x-1 divide-gray-300">
        <li className="group text-gray-500 flex gap-1 hover:text-yellow-500 duration-200 relative duration-300 font-semibold">
          <Link href={"/"} className="">
            Home
          </Link>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="w-3"
            // onClick={showChildrenDaware}
          />

          {/* <Drawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={onChildrenDrawerClose}
            open={childrenDaware}
          > */}
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
          {/* </Drawer> */}
        </li>
        <li className="group text-gray-500 flex gap-1 hover:text-yellow-500 duration-200 relative duration-300 font-semibold">
          <Link href={"/"}>Shop</Link>
          <FontAwesomeIcon icon={faAngleDown} className="w-3" />
          <div className="absolute mt-10 invisible group-hover:opacity-100 group-hover:visible duration-300 z-1">
            <Submenu />
          </div>
        </li>

        <li className="group text-gray-500 flex gap-1 hover:text-yellow-500 duration-200 font-semibold relative duration-300">
          <Link href={"/"}>Collection</Link>
          <FontAwesomeIcon icon={faAngleDown} className="w-3" />
          <div className="absolute mt-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300 z-1">
            <SubCollection />
          </div>
        </li>
        <li className="text-gray-500 hover:text-yellow-500 duration-200 font-semibold">
          <Link href={"/"}>Blogs</Link>
        </li>
        <li className="group text-gray-500 flex gap-1 hover:text-yellow-500 duration-200 relative duration-300 font-semibold">
          <Link href={"/"}>Pages</Link>
          <FontAwesomeIcon icon={faAngleDown} className="w-3" />
          <ul className="absolute m-2 mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 w-[150px] rounded-b-lg z-1 bg-white text-center">
            <Link href={"/"}>
              <li className={menuDesign}>About US</li>
            </Link>
            <Link href={"/"}>
              <li className={menuDesign}>Contact Us</li>
            </Link>
            <Link href={"/"}>
              <li className={menuDesign}>Payment Policy</li>
            </Link>
            <Link href={"/"}>
              <li className={menuDesign}>Privet Policy</li>
            </Link>
            <Link href={"/"}>
              <li className={menuDesign}>Privet Policy</li>
            </Link>
            <Link href={"/"}>
              <li className={menuDesign}>Return Policy</li>
            </Link>
            <Link href={"/"}>
              <li className={menuDesign}>conditions</li>
            </Link>
          </ul>
        </li>
        <li className="text-gray-500 hover:text-yellow-500 duration-200 font-semibold relative">
          <Link href={'/'}><span className="absolute w-10 h-5 text-center text-white bg-red-800 -top-4 left-15 text-sm">HOT</span></Link>
          <Link href={"/"} >Buy vegist</Link>
        </li>
      </ul>
      <div className="lg:flex jusity-center items-center lg:mr-18 gap-5 lg:block hidden">
        <Link href={"/"}>
          <FontAwesomeIcon
            icon={faHeadphones}
            className="text-3xl text-gray-500 hover:text-yellow-500"
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
  );
};

export default NavDivise;
