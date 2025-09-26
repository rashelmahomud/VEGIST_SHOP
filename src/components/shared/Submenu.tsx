import Link from "next/link";

const Submenu = () => {
  const menuDesign = "font-bold text-gray-500 mb-2 hover:text-yellow-500 duration-300";
  return (
    <div className="flex  bg-gray-50">
      <ul className=" text-center p-5 lg:w-[500px] text-left">
        <Link href={"/"}>
          <li className={menuDesign}>Fresh Frouts</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Fruit & nut</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Snack foods</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Home</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Home</li>
        </Link>
      </ul>
      <ul className="w-full text-center p-5 text-left">
        <Link href={"/"}>
          <li className={menuDesign}>Mix Frouts</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Oranges</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Ghee beverages</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Home</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Home</li>
        </Link>
      </ul>
      <ul className="w-full text-center p-5 text-left">
        <Link href={"/"}>
          <li className={menuDesign}> Bananars & Plantains</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Fresh gala</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Fifts mixed fruits</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Home</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Home</li>
        </Link>
      </ul>
      <ul className="w-full text-center p-5 text-left">
        <Link href={"/"}>
          <li className={menuDesign}>Apples Bariys</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Pears produce</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Fresh green orange</li>
        </Link>
        <Link href={"/"}>
          <li className={menuDesign}>Home</li>
        </Link>
        <Link href={"/"}>
          <li className="text-gray-500 font-semibold hover:text-yellow-500">
            Home
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Submenu;
