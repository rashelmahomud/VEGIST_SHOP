import Search from "antd/es/input/Search";

const LatestDeal = () => {
  return (
    <div className="bg-[url('/assates/banner3-min.jpg')] h-70 bg-cover my-10">

      <div className="lg:px-36 w-1/2 flex flex-col lg:justify-self-end justify-self-center  pt-16">
        <h1 className="lg:text-2xl text-xl font-semibold text-white text-center">Get the latest deals</h1>
        <p className="text-white mb-2 text-center">And receive 20% off coupon for first shopping</p>
        <div>
          <Search
            placeholder="Enter your email address"
            allowClear
            enterButton={
              <button className="bg-yellow-500 text-white font-semibold p-3 rounded-br-lg rounded-tr-lg">
                Subscribe
              </button>
            }
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestDeal;
