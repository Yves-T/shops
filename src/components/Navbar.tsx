import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Logo from "../assets/logo.png";
import { DropdownLinks, Menu } from "../constants";
import DarkMode from "./DarkMode";

const Navbar = ({ handleOrderPopup }: { handleOrderPopup: () => void }) => {
  return (
    <div className="relative z-40 bg-white shadow-md duration-200 dark:bg-gray-900 dark:text-white">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between">
          <div>
            <a className="flex gap-2 text-2xl font-bold sm:text-3xl" href="#">
              <img className="w-10" src={Logo} alt="Logo" />
              Shopsy
            </a>
          </div>
          {/* search bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="group relative hidden sm:block">
              <input
                className="focus:border-primary w-[200px] rounded-full border border-gray-300 bg-white px-2 py-1 transition-all duration-300 group-hover:w-[300px] focus:border-1 focus:outline-none sm:w-[200px] dark:border-gray-500 dark:bg-gray-800"
                type="text"
                placeholder="search"
              />
              <IoMdSearch className="group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
            </div>
            {/* order button */}
            <button
              className="from-primary to-secondary items-centerr group flex gap-3 rounded-full bg-gradient-to-r px-4 py-1 text-white transition-all duration-200"
              onClick={() => handleOrderPopup()}
            >
              <span className="hidden transition-all duration-200 group-hover:block">
                Order
              </span>
              <FaCartShopping className="cursor-pointer text-xl text-white drop-shadow-sm" />
            </button>

            {/* dark mode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div className="flex justify-center" data-aos="zoom-in">
        <ul className="hidden items-center gap-4 sm:flex">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                className="hover:text-primary inline-block px-4 duration-200"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* simple drop dwon and links */}
          <li className="group relative cursor-pointer">
            <a className="flex items-center gap-[2px] py-2" href="#">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md group-hover:block">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      className="hover:bg-primary/20 inline-block w-full rounded-md p-2"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
