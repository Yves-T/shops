import Image1 from "../assets/hero/women.png";
import Image2 from "../assets/hero/shopping.png";
import Image3 from "../assets/hero/sale.png";
import Img1 from "../assets/women/women.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";
import Img5 from "../assets/shirt/shirt.png";
import Img6 from "../assets/shirt/shirt2.png";
import Img7 from "../assets/shirt/shirt3.png";

export const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

export const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

export const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

export const TopProductsData = [
  {
    id: 1,
    img: Img5,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img6,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img7,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const heroSliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

export const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

export const testimonialSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
