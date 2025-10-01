import { faCashApp, faReacteurope } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane, faTired } from "@fortawesome/free-regular-svg-icons";
import { faCar, faMicrophoneLines, faTransgenderAlt, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#faf8ed]">
      <div className="lg:px-36">
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
              Lorem ipsum iasds simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPaperPlane} className="text-4xl text-yellow-500" />
            <div><h2 className="text-xl font-semibold text-yellow-500">Address</h2>
            <p className="text-gray-500">
              38 block street arean licard <br />
              hamonia road sydney, australia
            </p></div>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-5xl text-yellow-500" />
            <div><h2 className="font-semibold text-yellow-500 text-xl mb-2">Get in touch</h2>
            <p className="text-gray-500">
              (+880 1835199061) <br />
              support@demo.com
            </p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
