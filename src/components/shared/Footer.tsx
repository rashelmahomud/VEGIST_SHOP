import {
  faCashApp,
  faCcMastercard,
  faCcVisa,
  faFacebook,
  faInstagram,
  faLinkedin,
  faPaypal,
  faPinterest,
  faReacteurope,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faCar,
  faDollar,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const fDesign =
    "border-b border-dotted py-2 text-gray-600 hover:text-yellow-500 duration-100";
  return (
    <div className="bg-[#faf8ed]">
      <div className="lg:px-36 p-3">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto p-2 py-10">
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className="bg-yellow-500 border rounded-full p-4 text-white border-5 border-white ring-2 ring-yellow-400 text-4xl"
              icon={faCar}
            />
            <p className="font-semibold text-gray-600">Free Delivery</p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className="bg-yellow-500 border rounded-full p-4 text-white border-5 border-white ring-2 ring-yellow-400 text-4xl"
              icon={faCashApp}
            />
            <p className="font-semibold text-gray-600">Cash On Delivery</p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className="bg-yellow-500 border rounded-full p-4 text-white border-5 border-white ring-2 ring-yellow-400 text-4xl"
              icon={faReacteurope}
            />
            <p className="font-semibold text-gray-600">30 Days Return</p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className="bg-yellow-500 border rounded-full p-4 text-white border-5 border-white ring-2 ring-yellow-400 text-4xl"
              icon={faMicrophoneLines}
            />
            <p className="font-semibold text-gray-600">Online Support</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 my-5">
          <div>
            <Image
              src={"/assates/logo-1.svg"}
              alt="fLogo"
              width={120}
              height={120}
            />
            <p className="text-gray-500">
              Lorem ipsum iasds simply dummy text of the <br /> printing and
              typesetting industry.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-4xl text-yellow-500"
            />
            <div>
              <h2 className="text-xl font-semibold text-yellow-500">Address</h2>
              <p className="text-gray-500">
                38 block street arean licard <br />
                hamonia road sydney, australia
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-5xl text-yellow-500"
            />
            <div>
              <h2 className="font-semibold text-yellow-500 text-xl mb-2">
                Get in touch
              </h2>
              <p className="text-gray-500">
                (+880 1835199061) <br />
                support@demo.com
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-10">
          <ul>
            <li className="font-semibold text-yellow-500 text-gray-600 hover:text-yellow-500 duration-100">
              <Link href={"/"}>Top Catagoris</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Fresh fruits</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Organic wine</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Organic juice</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Dairy & chesse</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Fresh meat</Link>
            </li>
          </ul>
          <ul>
            <li className="font-semibold text-yellow-500 text-gray-600 hover:text-yellow-500 duration-100">
              <Link href={"/"}>Services</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>About vegist</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Faq's</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Organic juice</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>News</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Store location</Link>
            </li>
          </ul>
          <ul>
            <li className="font-semibold text-yellow-500 text-gray-600 hover:text-yellow-500 duration-100">
              <Link href={"/"}>Privacy & terms</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Payment policy</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Privet Policy</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Return Policy</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Shipping policy</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Terms & conditions</Link>
            </li>
          </ul>
          <ul>
            <li className="font-semibold text-yellow-500 text-gray-600 hover:text-yellow-500 duration-100">
              <Link href={"/"}>My Account</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>My Account</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>My cart</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>Order historis</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>My wishlist</Link>
            </li>
            <li className={fDesign}>
              <Link href={"/"}>My Address</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-500 p-4">
        <div className="lg:px-36 mx-auto grid lg:grid-cols-3">
          <h1 className="text-white font-semibold">
            Copyright © 2025 by spacingtech
          </h1>
          <div className="lg:flex gap-2">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
            />
          </div>
          <div className="lg:flex gap-2 justify-end">
            <FontAwesomeIcon
              icon={faCcMastercard}
              className="w-10 px-2 py-1 rounded-md bg-white hover:bg-yellow-500 duration-300"
            />
            <FontAwesomeIcon
              icon={faPaypal}
              className="w-10 px-2 py-1 rounded-md bg-white hover:bg-yellow-500 duration-300"
            />
            <FontAwesomeIcon
              icon={faCcVisa}
              className="w-10 px-2 py-1 rounded-md bg-white hover:bg-yellow-500 duration-300"
            />
            <FontAwesomeIcon
              icon={faDollar}
              className="w-10 px-2 py-1 rounded-md bg-white hover:bg-yellow-500 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
