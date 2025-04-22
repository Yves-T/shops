import Slider from "react-slick";
import { TestimonialData, testimonialSliderSettings } from "../constants";

const Testimonials = () => {
  return (
    <div className="mb-10 py-10">
      <div className="container">
        {/* header section */}
        <div className="mx-auto mb-10 max-w-[600px] text-center">
          <p className="text-primary text-sm" data-aos="fade-up">
            What our customers are saying
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Testimonials
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi
            voluptatem ex officia ratione!
          </p>
        </div>

        {/* testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...testimonialSliderSettings}>
            {TestimonialData.map((item) => (
              <div className="my-6">
                <div
                  className="bg-primary/10 relative mx-4 flex flex-col gap-4 rounded-xl px-6 py-8 shadow-lg dark:bg-gray-800"
                  key={item.id}
                >
                  <div className="mb-4">
                    <img
                      className="h-20 w-20 rounded-full"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{item.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute top-0 right-0 font-serif text-9xl text-black/20">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
