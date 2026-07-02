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
  faAngleUp,
  faCar,
  faDollar,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const getTime = new Date();
  const getFullYear = getTime.getFullYear();

  const fDesign =
    "border-b border-dotted py-2 text-gray-600 dark:text-gray-200 hover:text-yellow-500 duration-100";

    const fDesign2 = "bg-yellow-500 border rounded-full p-4 text-white border-5 border-white ring-2 ring-yellow-400 text-4xl"


const footerLinks = [
  {
    title: "Top Categories",
    items: [
      "Fresh Fruits",
      "Organic Wine",
      "Organic Juice",
      "Dairy & Cheese",
      "Fresh Meat",
    ],
  },
  {
    title: "Services",
    items: [
      "About Vegist",
      "FAQ's",
      "Organic Juice",
      "News",
      "Store Location",
    ],
  },
  {
    title: "Privacy & Terms",
    items: [
      "Payment Policy",
      "Privacy Policy",
      "Return Policy",
      "Shipping Policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "My Account",
    items: [
      "My Account",
      "My Cart",
      "Order History",
      "My Wishlist",
      "My Address",
    ],
  },
];

const socialIcons = [
  faFacebook,
  faInstagram,
  faPinterest,
  faWhatsapp,
  faYoutube,
  faLinkedin,
];


const paymentIcons = [
  faCcMastercard,
  faPaypal,
  faCcVisa,
  faDollar,
];

  return (
    <div className="bg-[#faf8ed] dark:bg-black">
      <div className="lg:px-36 p-3">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 grid-cols-1 mx-auto p-2 py-10">
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              className={fDesign2}
              icon={faCar}
            />
            <p className="font-semibold text-gray-600 dark:text-gray-200">
              Free Delivery
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
               className={fDesign2}
              icon={faCashApp}
            />
            <p className="font-semibold text-gray-600 dark:text-gray-200">
              Cash On Delivery
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
               className={fDesign2}
              icon={faReacteurope}
            />
            <p className="font-semibold text-gray-600 dark:text-gray-200">
              30 Days Return
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
                className={fDesign2}
              icon={faMicrophoneLines}
            />
            <p className="font-semibold text-gray-600 dark:text-gray-200">
              Online Support
            </p>
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
            <p className="text-gray-500 dark:text-gray-200">
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
              <p className="text-gray-500 dark:text-gray-200">
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
              <p className="text-gray-500 dark:text-gray-200">
                (+880 1835199061) <br />
                support@demo.com
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-10">

          {
            footerLinks.map((section) => (
              <ul key={section.title}>
                <li className="font-semibold text-yellow-500"><Link href="/">{section.title}</Link></li>
                {
                  section.items.map((item) => (
                    <li key={item} className={fDesign}><Link href={'/'}>{item}</Link></li>
                  ))
                }
              </ul>
            ))
          }



        </div>
      </div>
      <div className="bg-yellow-500 p-4">
        <div className=" absolute right-8">
          <Link href={""}>
            <FontAwesomeIcon
              icon={faAngleUp}
              className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
            />
          </Link>
        </div>
        <div className="lg:px-36 mx-auto grid lg:grid-cols-3">
          <h1 className="text-gray-200 font-semibold  flex justify-center md:justify-start">
            Copyright © 2025-{getFullYear} by Rashel Mahomud
          </h1>
          <div className="flex gap-2 lg:my-0 my-3 justify-center">

            {
              socialIcons.map((icon) => ( 
              <FontAwesomeIcon key={icon.iconName}
              icon={icon}
              className="w-10 p-2 bg-white text-gray-500 hover:text-white hover:bg-yellow-500 duration-300 rounded-full  "
            />))
            }
          </div>


          <div className="flex gap-2 lg:justify-end justify-center ">

            {
              paymentIcons.map((picon) => (
  <FontAwesomeIcon
  key={picon.iconName}
              icon={picon}
              className="w-10 px-2 py-1 rounded-md bg-white hover:bg-yellow-500 duration-300"
            />
              ) )
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
