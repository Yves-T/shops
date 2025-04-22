import { FaStar } from "react-icons/fa6";
import { ProductsData } from "../constants";

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="mx-auto mb-10 max-w-[600px] text-center">
          <p className="text-primary text-sm" data-aos="fade-up">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Products
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi
            voluptatem ex officia ratione!
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {/* product section */}
            {ProductsData.map((item) => (
              <div
                className="space-y-3"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
              >
                <img
                  className="h-[220px] w-[150px] rounded-md object-cover"
                  src={item.img}
                  alt={item.title}
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="bg-primary mt-10 cursor-pointer rounded-md px-5 py-1 text-center text-white">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
