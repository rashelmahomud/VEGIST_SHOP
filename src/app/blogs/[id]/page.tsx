"use client";
import { BlogsType } from "@/components/type/ProductType";
import {
  faFile,
  faFileText,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogsDetailsType {
  params: Promise<{ id: string }>;
}
const Blogs: BlogsType[] = [
  {
    id: 1,
    title: "All time fresh everytime helthy",
    dec: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of",
    image:
      "/assates/recent-news/blog-2_f16054cd-c759-43fc-a870-37322e322142.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.",
  },
  {
    id: 2,
    title: "All time fresh everytime helthy",
    dec: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of",
    image:
      "/assates/recent-news/blog-3_01262cce-ca6e-4f5a-a9a8-93b9016af364.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.",
  },
  {
    id: 3,
    title: "All time fresh everytime helthy",
    dec: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of",
    image:
      "/assates/recent-news/blog-4_1ff8c58f-79d1-4e97-bff0-e7c236171b97.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.",
  },
];

export default function BlogDetail({ params }: BlogsDetailsType) {
  const { id } = React.use(params);

  const blog = Blogs.find((blog) => blog.id.toString() === id);

  return (
    <div>
      <div className="flex bg-gray-50 p-3 gap-5 items-center justify-center">
        <Link href={"/"}> Home</Link>
        <Link href={"/"}> News</Link>
        <Link href={"/"}>Fresh organics brand...</Link>
      </div>
      <div className="lg:px-36 flex gap-10 p-3 mx-auto p-6">
        <div className="basis-1/2">
          <div className="lg:px-36 my-10">
            <div className="flex  p-2 relative">
              {Blogs.map((blog) => (
                <div key={blog.id} className="">
                  <Link href={''}>
                    <Image
                      src={blog.image}
                      alt="img"
                      width={50}
                      height={50}
                      className="lg:h-[100px]"
                    />
                  </Link>
                  {/* blogs number  */}

                    <div className=" text-gray-500 my-2">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                          icon={faFile}
                        />
                        May 13,2025
                      </div>
                      <p>{blog.title}</p>
                    </div>
                
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="basic-1/5 space-y-3">
          {/* <Image src={blog?.image} height={600} width={1000} alt="image" /> */}
          <p className="text-xl font-semibold text-gray-500">{blog?.title}</p>
          <div className="flex justify-between text-gray-500 my-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                icon={faFile}
              />
              May 13,2025
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                icon={faUser}
              />
              By Spacing Teach
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                icon={faFileText}
              />
              0 Comments
            </div>
          </div>
          <p className="text-gray-500">{blog?.description}</p>
        </div>
      </div>
    </div>
  );
}
