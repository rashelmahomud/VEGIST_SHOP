import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faFileText } from "@fortawesome/free-regular-svg-icons/faFileText";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const BlogsPage = () => {
  interface BlogsType {
    id: number;
    title: string;
    dec: string;
    image: string;
  }
  const Blogs: BlogsType[] = [
    {
      id: 1,
      title: "All time fresh everytime helthy",
      dec: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of",
      image:
        "/assates/recent-news/blog-2_f16054cd-c759-43fc-a870-37322e322142.webp",
    },
    {
      id: 2,
      title: "All time fresh everytime helthy",
      dec: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of",
      image:
        "/assates/recent-news/blog-3_01262cce-ca6e-4f5a-a9a8-93b9016af364.webp",
    },
    {
      id: 3,
      title: "All time fresh everytime helthy",
      dec: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of",
      image:
        "/assates/recent-news/blog-4_1ff8c58f-79d1-4e97-bff0-e7c236171b97.webp",
    },
  ];

  return (
    <div className="lg:px-36 my-10">
      <h1 className="text-center text-3xl font-semibold text-gray-600 my-10">
        Recent News
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-2 relative">
        {Blogs.map((blog) => (
          <div key={blog.id}>
            <Link href={"/"}>
              <Image
                src={blog.image}
                alt="img"
                width={400}
                height={100}
                className="lg:h-[300px]"
              />
            </Link>
              <p className="absolute px-6 py-4 rounded-b-2xl -top-5 left-10 bg-yellow-500 text-white text-3xl font-semibold">{blog.id}</p> 
              {/* blogs number  */}
        
           
            <div className="border border-gray-200 p-2">
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
                    icon={faFileText}
                  />
                  0 Comments
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-500">
                {blog.title}
              </h2>
              <p className="text-gray-500">{blog.dec}</p>
              <button className="font-semibold mt-2 text-gray-600">
                <Link href={"/"} className="flex items-center">
                  Read More
                  <FontAwesomeIcon
                    className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full"
                    icon={faArrowRight}
                  />
                </Link>
              </button>
            </div>
          
          </div>
        ))}
      </div>
      <button className="bg-yellow-500 rounded-full text-white  font-semibold p-3 px-5 my-5 flex mx-auto">
        <Link href={"/"}>View All News</Link>
      </button>
    </div>
  );
};

export default BlogsPage;
