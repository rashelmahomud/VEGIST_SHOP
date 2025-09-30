const DealOfDay = () => {
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();
  const minite = date.getMinutes();
  const secound = date.getSeconds();

  return (
    <div className="bg-[url('/assates/dealbanner.webp')] h-[450px] bg-cover bg-no-repet bg-center bg-fixed px-36 flex flex-col justify-center">
      <p className="text-white font-semibold text-xl">
        We offer a hot deal offer every festival
      </p>
      <h2 className="text-2xl font-semibold text-white my-3">
        Deal Of the day!
      </h2>
      <div className="flex gap-2">
        <div className="flex flex-col items-center bg-yellow-500 p-3 rounded-lg text-white font-semibold my-4">
          <span className="text-2xl">{day}</span>
          <p>DAY</p>
        </div>
        <div className="flex flex-col items-center bg-yellow-500 p-3 rounded-lg text-white font-semibold my-4">
          <span className="text-2xl">{hours}</span>
          <p>HRS</p>
        </div>
        <div className="flex flex-col items-center bg-yellow-500 p-3 rounded-lg text-white font-semibold my-4">
          <span className="text-2xl">{secound}</span>
          <p>MIN</p>
        </div>
        <div className="flex flex-col items-center bg-yellow-500 p-3 rounded-lg text-white font-semibold my-4">
          <span className="text-2xl">{secound}</span>
          <p>SEC</p>
        </div>
      </div>

      <button className="py-2 px-6 bg-yellow-400 rounded-full font-semibold text-white hover:outline hover:yellow-none hover:bg-white hover:text-yellow-500 w-1/7">
        Shop Collection
      </button>
    </div>
  );
};

export default DealOfDay;
