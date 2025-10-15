"use client";
import React, { useState } from "react";

export default function BlogDetail() {
  const images = [
    "/assates/shop/shop(1).jpg",
    "/assates/shop/shop(2).jpg",
    "/assates/shop/shop(3).jpg",
    "/assates/shop/shop(2).jpg",
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: images */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            Blog Title — Design & UI Tips
          </h1>

          {/* Big image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[active]}
              alt={`Blog image`}
              className="w-full h-[420px] object-cover block"
              loading="eager"
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex items-center gap-3">
            {images.slice(1, 4).map((src, index) => {
              const realIndex = index + 1;

              const selected = realIndex === active;
              return (
                <button
                  key={index}
                  onClick={() => setActive(realIndex)}
                  aria-pressed={selected}
                  className={`relative rounded-lg overflow-hidden ring-2 ring-transparent focus:outline-none focus:ring-offset-2 focus:ring-yellow-300 transition-all duration-200 ${
                    selected ? "ring-yellow-500 scale-105" : "hover:scale-105"
                  }`}
                >
                  <img
                    src={src}
                    alt={'thambile'}
                    className="w-24 h-24 object-cover block"
                  />
                </button>
              );
            })}

            {/* Optional: show first image as a thumbnail too */}
            {/* <button
              onClick={() => setActive(0)}
              className={`ml-2 rounded-lg overflow-hidden ring-2 ring-transparent focus:outline-none focus:ring-offset-2 focus:ring-yellow-300 transition-all duration-200 ${
                active === 0 ? "ring-yellow-500 scale-105" : "hover:scale-105"
              }`}
            >
              <img
                src={images[0]}
                alt="Thumbnail 1"
                className="w-24 h-24 object-cover block"
              />
            </button> */}
          </div>
        </div>

        {/* not importent this is  */}
        {/* Right: meta / other 3 blog cards */}
        <aside className="space-y-6">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h4 className="font-semibold mb-2">About this post</h4>
            <p className="text-sm text-gray-600">Published: Oct 13, 2025</p>
            <p className="text-sm text-gray-600">Author: Md Rashel</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
