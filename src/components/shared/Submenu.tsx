const Submenu = () => {
  const menuDesign = "font-bold text-gray-500 mb-2 hover:text-yellow-500";
  return (
    <div className="flex  bg-gray-50">
      <ul className=" text-center p-5 lg:w-[500px] text-left">
        <li className={menuDesign}>Fresh Frouts</li>
        <li className={menuDesign}>Fruit & nut</li>
        <li className={menuDesign}>Snack foods</li>
        <li className={menuDesign}>Home</li>
        <li className={menuDesign}>Home</li>
      </ul>
      <ul className="w-full text-center p-5 text-left">
        <li className={menuDesign}>Mix Frouts</li>
        <li className={menuDesign}>Oranges</li>
        <li className={menuDesign}>Ghee beverages</li>
        <li className={menuDesign}>Home</li>
        <li className={menuDesign}>Home</li>
      </ul>
      <ul className="w-full text-center p-5 text-left">
        <li className={menuDesign}> Bananars & Plantains</li>
        <li className={menuDesign}>Fresh gala</li>
        <li className={menuDesign}>Fifts mixed fruits</li>
        <li className={menuDesign}>Home</li>
        <li className={menuDesign}>Home</li>
      </ul>
      <ul className="w-full text-center p-5 text-left">
        <li className={menuDesign}>Apples Bariys</li>
        <li className={menuDesign}>Pears produce</li>
        <li className={menuDesign}>Fresh green orange</li>
        <li className={menuDesign}>Home</li>
        <li className="text-gray-500 font-semibold hover:text-yellow-500">
          Home
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
