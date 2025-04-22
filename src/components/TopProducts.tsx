import { FaStar } from "react-icons/fa6";
import { TopProductsData } from "../constants";

const TopProducts = ({
  handleOrderPopup,
}: {
  handleOrderPopup: () => void;
}) => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="mb-24 text-left">
          <p className="text-primary text-sm" data-aos="fade-up">
            Top Rated Products for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Best Products
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi
            voluptatem ex officia ratione!
          </p>
        </div>

        {/* body section */}
        <div className="grid grid-cols-1 place-items-center gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {TopProductsData.map((item) => (
            <div
              data-aos="zoom-in"
              className="dark:hover:bg-primary group relative max-w-[300px] rounded-2xl bg-white shadow-xl duration-300 hover:bg-black/80 hover:text-white dark:bg-gray-800"
              key={item.id}
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  className="mx-auto block max-w-[140px] -translate-y-20 transform drop-shadow-md duration-300 group-hover:scale-105"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="flex w-full items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="line-clamp-2 text-sm text-gray-500 duration-300 group-hover:text-white">
                  {item.description}
                </p>
                <button
                  className="bg-primary group-hover:text-primary mt-4 rounded-full px-4 py-1 text-white duration-300 group-hover:bg-white hover:scale-105"
                  onClick={() => handleOrderPopup()}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
