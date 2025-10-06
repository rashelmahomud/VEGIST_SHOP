"use client";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faHeadphones, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faCross,
  faCrosshairs,
  faList,
  faMagnifyingGlass,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import Search from "antd/es/input/Search";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SubCollection from "./SubCollection";
import Submenu from "./Submenu";

const Navber = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const menuDesign =
    "font-bold text-gray-500 mb-2 hover:text-yellow-500 duration-300 w-full";
  return (
    <div className="">
      <h1 className="text-center bg-gray-900 text-white p-4 font-semibold">
        <span className="animate-ping text-yellow-500 duration-300 opacity-100 font-semibold mx-2">
          Free shipping
        </span>
        orders from all item
      </h1>
      <div className="container mx-auto py-4 px-2 m-3 lg:px-30">
        <div className="grid lg:grid-cols-3 grid-cols-2 items-center justify-center test-center align-items-center mx-auto">
          <Image
            src={"/assates/logo-1.svg"}
            width={100}
            height={100}
            alt="image logo"
          />

          <div className="hidden lg:block">
            <Search
              placeholder="search your stor"
              size="large"
              enterButton={
                <button>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="bg-gray-800 hover:bg-yellow-500 duration-100 text-white rounded-full w-1/2 text-xl p-2.5 -ml-5"
                  />
                </button>
              }
              variant="outlined"
              className=""
            />
          </div>

          <div className="grid grid-cols-2 mx-auto lg:mr-10 justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              {open ? (
                <div className="lg:hidden block mt-5 text-gray-500 text-xl">
                  <FontAwesomeIcon icon={faList} />
                </div>
              ) : (
                <div className="lg:hidden block mt-5 text-gray-500 text-xl">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              )}
              <FontAwesomeIcon
                icon={faUser}
                className="lg:text-3xl text-xl hover:text-yellow-500 duration-300 text-gray-500 lg:mt-0 mt-5"
              />
              <Modal
                title="Basic Modal"
                closable={{ "aria-label": "Custom Close Button" }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Search
                  placeholder="search your stor"
                  size="large"
                  enterButton={
                    <button>
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="bg-gray-800 hover:bg-yellow-500 duration-100 text-white rounded-full w-1/2 text-xl p-2.5 -ml-5"
                      />
                    </button>
                  }
                  variant="outlined"
                  className=""
                />
              </Modal>
              <div className="lg:hidden block ">
                <FontAwesomeIcon
                  type="primary"
                  onClick={showModal}
                  icon={faMagnifyingGlass}
                  className="text-gray-500 text-xl mt-5"
                />
              </div>
              {/* // hidden small device  */}
              <div className="lg:block hidden">
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

            <div className="flex gap-5 mx-5 justify-center items-center lg:mt-0 mt-6">
              <div className="relative">
                <Link href={"/"}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="lg:text-3xl text-xl hover:text-yellow-500 duration-300 text-gray-500"
                  />
                </Link>
                <span className="absolute bg-yellow-500 font-semibold w-4 h-4 right-0 top-0 rounded-full flex justify-center items-center text-white">
                  0
                </span>
              </div>
              <div className="relative">
                <Link href={"/"}>
                  <FontAwesomeIcon
                    icon={faShopify}
                    className="lg:text-3xl text-xl hover:text-yellow-500 duration-300 text-gray-500"
                  />
                </Link>
                <span className="absolute bg-yellow-500 font-semibold w-4 h-4 right-0 top-0 rounded-full flex justify-center items-center text-white">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="border-b-1 mx-36 border-gray-200 mb-2"></p>

      <div className="lg:flex justify-between items-center lg:px-36 px-3">
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
                {" "}
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
                {" "}
                <li className={menuDesign}>conditions</li>
              </Link>
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
    </div>
  );
};

export default Navber;
