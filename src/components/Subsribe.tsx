import Banner from "../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subsribe = () => {
  return (
    <div
      className="mb-20 bg-gray-100 text-white dark:bg-gray-800"
      style={BannerImg}
      data-aos="zoom-in"
    >
      <div className="container py-10 backdrop-blur-sm">
        <div className="mx-auto max-w-xl space-y-6">
          <h1 className="!text-center text-2xl font-semibold sm:text-left sm:text-4xl">
            Get Notified About New Products
          </h1>
          <input
            className="w-full bg-white p-3"
            type="text"
            placeholder="Enter your email"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default Subsribe;
