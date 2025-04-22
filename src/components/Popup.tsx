import { IoCloseOutline } from "react-icons/io5";

type Props = {
  orderPopup: boolean;
  setOrderPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popup = ({ orderPopup, setOrderPopup }: Props) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black/50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4 shadow-md duration-200 dark:bg-gray-900">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="cursor-pointer text-2xl"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4">
                <input
                  className="mb-4 w-full rounded-full border border-gray-300 px-2 py-1 dark:border-gray-500 dark:bg-gray-800"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="mb-4 w-full rounded-full border border-gray-300 px-2 py-1 dark:border-gray-500 dark:bg-gray-800"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="mb-4 w-full rounded-full border border-gray-300 px-2 py-1 dark:border-gray-500 dark:bg-gray-800"
                  type="text"
                  placeholder="Address"
                />
                <div className="flex justify-center">
                  <button className="from-primary to-secondary rounded-full bg-gradient-to-r px-4 py-1 text-white duration-200 hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
