"use client";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faList,
  faMagnifyingGlass,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Drawer, Modal, Space } from "antd";
import Search from "antd/es/input/Search";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { DrawerProps } from "antd";
import NavDivise from "./NavDivise";
import { useFavorite } from "@/context/FavoriteContext";
import { useCart } from "@/context/CartContext";
import { useProductFavorite } from "@/context/FovoritesProductContext";
const Navber = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const { favorites } = useFavorite();
  const {productsFavorite} = useProductFavorite();

  const { cart } = useCart();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="">
        <h1 className="text-center bg-gray-900 text-white p-3 font-semibold">
          <span className="relative inline-block text-yellow-400 font-bold mx-2">
            <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-50 animate-ping [animation-delay:500ms]"></span>
            <span className="relative animate-bounce [animation-delay:1s]">
              Free Shipping
            </span>
          </span>
          on all orders!
        </h1>
      </div>

      <div className="sticky top-0 bg-white z-40">
        <div className="container mx-auto py-4 px-2 m-3 lg:px-30">
          <div className="grid lg:grid-cols-3 grid-cols-2 items-center justify-center test-center align-items-center mx-auto">
            <Link href={"/"}>
              {" "}
              <Image
                src={"/assates/logo-1.svg"}
                width={100}
                height={100}
                alt="image logo"
              />
            </Link>

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
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                ) : (
                  <div
                    className="lg:hidden block mt-5 text-gray-500 text-xl"
                    onClick={showDrawer}
                  >
                    <FontAwesomeIcon icon={faList} />
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
                  <Link href={"/favorite"}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="lg:text-3xl text-xl hover:text-yellow-500 duration-300 text-gray-500"
                    />
                  </Link>
                  <span className="absolute bg-yellow-500 font-semibold lg:w-4 lg:h-4 w-3 h-3 right-0 top-0 rounded-full flex justify-center items-center text-white">
                    {/* {favorites.length} */}
                    {productsFavorite.length}
                  </span>
                </div>
                <div className="relative">
                  <Link href={"/cart"}>
                    <FontAwesomeIcon
                      icon={faShopify}
                      className="lg:text-3xl text-xl hover:text-yellow-500 duration-300 text-gray-500"
                    />
                  </Link>
                  <span className="absolute bg-yellow-500 font-semibold lg:w-4 lg:h-4 w-3 h-3 right-0 top-0 rounded-full flex justify-center items-center text-white">
                    {cart.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="border-b-1 mx-36 border-gray-200 mb-2"></p>

        <div className="lg:block hidden">
          <NavDivise />
        </div>
      </div>

      {/* resonsive phone version  */}
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>OK</Button>
          </Space>
        }
      >
        <NavDivise />
      </Drawer>
    </div>
  );
};

export default Navber;
