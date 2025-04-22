import Slider from "react-slick";
import { heroSliderSettings, ImageList } from "../constants";

const Hero = ({ handleOrderPopup }: { handleOrderPopup: () => void }) => {
  return (
    <div className="relative flex min-h-[550px] items-center justify-center overflow-hidden bg-gray-100 duration-200 sm:min-h-[650px] dark:bg-gray-950 dark:text-white">
      {/* background pattern */}
      <div className="bg-primary/40 absolute -top-1/2 right-0 h-[700px] w-[700px] rotate-45 rounded-3xl"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...heroSliderSettings}>
          {ImageList.map((item) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="order-2 flex flex-col justify-center gap-4 pt-12 text-center sm:order-1 sm:pt-0 sm:text-left">
                  <h1
                    className="relative z-10 text-5xl font-bold sm:text-6xl lg:text-7xl"
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {item.title}
                  </h1>
                  <p
                    className="text-sm"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      className="from-primary to-secondary rounded-full bg-gradient-to-r px-4 py-2 text-white duration-200 hover:scale-105"
                      onClick={() => handleOrderPopup()}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    className="relative z-10"
                    data-aos="zoom-in"
                    data-aos-once="true"
                  >
                    <img
                      className="mx-auto h-[300px] w-[300px] object-contain sm:h-[450px] sm:scale-125 lg:scale-120"
                      src={item.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
