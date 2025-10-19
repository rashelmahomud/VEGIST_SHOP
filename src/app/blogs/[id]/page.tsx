"use client";
import { BlogsType } from "@/components/type/ProductType";
import { faFacebook, faPinterest } from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faFileText,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faQuoteLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons/faQuestionCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blob } from "stream/consumers";

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
    title: "fresh everytime helthy",
    dec: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of",
    image:
      "/assates/recent-news/blog-3_01262cce-ca6e-4f5a-a9a8-93b9016af364.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.",
  },
  {
    id: 3,
    title: "Fresh everytime helthy",
    dec: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of",
    image:
      "/assates/recent-news/blog-4_1ff8c58f-79d1-4e97-bff0-e7c236171b97.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.",
  },
];

export default function BlogDetail({ params }: BlogsDetailsType) {
  const { id } = React.use(params);

  const b = Blogs.find((blog) => blog.id.toString() === id);

  return (
    <div>
      <div className="flex bg-gray-50 py-5 gap-5 items-center justify-center">
        <Link href={"/"}> Home</Link>
        <Link href={"/"}> News</Link>
        <Link href={"/"}>Fresh organics brand...</Link>
      </div>
      <div className="lg:px-36 flex gap-5 p-3 mx-auto my-10">
        <div className="basis-1/3 ">
          <div>
            <Input.Search placeholder="email@exmple.com" variant="underlined" />
            <h1 className="p-2 text-xl">Recent Posts</h1>
          </div>
          <div className="flex flex-col p-2 relative">
            {Blogs.map((blog) => (
              <div key={blog.id} className="flex gap-3 items-center">
                <Link href={`/blogs/${blog.id}`}>
                  <Image src={blog.image} alt="img" width={100} height={50} />
                </Link>
                {/* blogs number  */}

                <div className="text-gray-400 my-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      className="w-10 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                      icon={faFile}
                    />
                    May 13,2025
                  </div>
                  <p className="mt-2 text-gray-700">
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2">
            <h1 className="my-10 font-semibold text-gray-500">Categoris</h1>
            <ul className="space-y-3 text-gray-500">
              <li>
                <Link href={""}>Fresh fruits</Link>
              </li>
              <li>
                <Link href={""}>Organic wine</Link>
              </li>
              <li>
                <Link href={""}>Organic juice</Link>
              </li>
              <li>
                <Link href={""}>Dairy & chesse</Link>
              </li>
              <li>
                <Link href={""}>fresh meat</Link>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <h1 className="my-10 font-semibold text-gray-500">Tags</h1>
            <ul className="flex gap-2">
              <li className="border border-gray-500 p-1 font-semibold text-gray-500">
                <Link href={""}>DINNER</Link>
              </li>
              <li className="border border-gray-500 p-1 font-semibold text-gray-500">
                <Link href={""}>GROCERY</Link>
              </li>
              <li className="border border-gray-500 p-1 font-semibold text-gray-500">
                <Link href={""}>ORGANIC</Link>
              </li>
              <li className="border border-gray-500 p-1 font-semibold text-gray-500">
                <Link href={""}>PASTA</Link>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <h1 className="text-xl font-semibold text-gray-500">Newsletter</h1>
            <Input placeholder="email@exmple.com" style={{ width: "300px" }} />
          </div>
        </div>
        <div className="basis-2/3 space-y-3">
          <Image
            src={
              b?.image ||
              "/assates/recent-news/blog-2_f16054cd-c759-43fc-a870-37322e322142.webp"
            }
            height={600}
            width={1000}
            alt="image"
          />

          <p className="text-xl font-semibold text-gray-500">{b?.title}</p>
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
          <p className="text-gray-500">{b?.description}</p>
          <div className="flex gap-5">
            <Image
              src={"/assates/recent-news/my.webp"}
              width={150}
              height={100}
              alt="image"
            />
            <div className="text-gray-500">
              <p>{b?.dec}</p> <br />
              <p>{b?.dec}</p>
            </div>
          </div>
          <p className="text-gray-500">{b?.description}</p>
          <p className="text-green-600">{b?.dec}</p>
          <p className="text-gray-500">{b?.description}</p>
          <div className="bg-gray-200 p-4 text-center">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-4xl text-gray-500"
            />
            <p className="text-gray-500 text-xl">
              Fresh organics brand and picnic
            </p>
            <p className="text-green-600">Spacing Tech</p>
          </div>
          <ul className="flex gap-2 my-10">
            <li className="bg-green-700 text-white py-1 px-2 rounded-md">
              <Link href={""}>Dinner</Link>
            </li>
            <li className="bg-green-700 text-white py-1 px-2 rounded-md">
              <Link href={""}>Grocery</Link>
            </li>
            <li className="bg-green-700 text-white py-1 px-2 rounded-md">
              <Link href={""}>Handmade</Link>
            </li>
            <li className="bg-green-700 text-white py-1 px-2 rounded-md">
              <Link href={""}>Organic</Link>
            </li>
            <li className="bg-green-700 text-white py-1 px-2 rounded-md">
              <Link href={""}>Pasta</Link>
            </li>
          </ul>
          <ul className="flex items-center gap-2">
            <li className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <Link href={""}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <Link href={""}>
                <FontAwesomeIcon icon={faX} />
              </Link>
            </li>
            <li className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <Link href={""}>
                <FontAwesomeIcon icon={faPinterest} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
