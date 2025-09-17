import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./redux/store";
import { initSignalR } from "./signalR/signalRService";

const formatDateTime = (dateTimeString: string) => {
  const dateObj = new Date(dateTimeString);

  const date = dateObj
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");

  const time = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return { date, time };
};

function App() {
  const ordersSlice = useSelector((state: RootState) => state.orders);
  useEffect(() => {
    initSignalR();
  }, []);

  const { date, time } = formatDateTime(
    ordersSlice.payload?.TimeActivation || new Date().toISOString()
  );

  return (
    <div
      className={`relative min-h-[100dvh] !h-[100dvh] w-full flex justify-center bg-black overflow-hidden ${
        ordersSlice.payload
          ? " items-start lg:items-center pt-[4vw] md:pt-4 lg:py-[1.5vw]"
          : "items-center"
      }`}
    >
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      {/* Main content layout */}

      <div
        className={`relative z-10  w-[98%] md:max-w-[90%] lg:max-w-[85%] flex flex-col lg:flex-row items-center justify-center md:gap-3 lg:gap-10 lg:py-12 `}
      >
        {/* TITLE */}
        <div
          className={`flex flex-col items-center justify-center text-white md:w-1/2 w-full mb-4 md:mb-0 `}
        >
          <h1
            className=" text-5xl lg:text-7xl xl:text-[6vw] 2xl:text-[7vw] mb-2 titleFont"
            style={{ fontFamily: "cursive" }}
          >
            Duiven
          </h1>
          <div className="text-sm lg:text-base xl:text-2xl font-light text-center tracking-tight">
            KOREAN BBQ | SUSHI | DRIVE THRU
          </div>
          <div className="lg:mt-2 flex flex-col items-center">
            <span className="text-sm lg:text-md xl:text-xl my-1 xl:my-4 tracking-tight">
              Active Order
            </span>
            <span className="relative flex w-3 h-3 xl:w-5 xl:h-5 !mt-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full w-3 h-3 xl:w-5 xl:h-5 bg-green-400"></span>
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {ordersSlice.payload?.ListOfProducts &&
          ordersSlice.payload?.ListOfProducts?.length > 0 && (
            <div className="bg-[#343A40B2] rounded-3xl border-[1px] border-[#666a6e] text-white w-[90%] lg:w-[70%]">
              <div className="flex justify-between items-center px-6 md:px-8 py-3 md:py-4 xl:py-6 border-b border-[#666a6e]">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-[30%] md:w-[15%]"
                />
                <div className=" basis-7/12">
                  <p className="text-right text-xs md:text-md xl:text-xl font-light">
                    {date}
                  </p>
                  <p className="text-right text-xs md:text-md xl:text-xl font-light lowercase">
                    {time}
                  </p>
                </div>
              </div>

              <div className="bg-[#9393935e] px-6 md:px-8 py-2 md:py-2 xl:py-4 text-xl md:text-lg xl:text-3xl ">
                Your Order
              </div>

              <div className="px-6 md:px-8 py-1 mb-4 md:mb-2 overflow-scroll max-h-[310px] md:min-h-[480px] xl:min-h-[420px] md:max-h-[400px] xl:max-h-[420px] my-scroll scrollbar-hide-x">
                {ordersSlice.payload?.ListOfProducts?.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-white text-sm xl:text-xl pt-2 pb-1 xl:pt-4 xl:pb-1.5">
                      <span className="w-6 text-center lg:text-lg">
                        {idx + 1}
                      </span>
                      <span className="flex-1 !ml-4 break-words text-base lg:text-lg">
                        {item.Name}
                      </span>

                      <div className="flex !justify-end  ">
                        <div className="bg-[#87714C] rounded text-sm !px-3 text-center  flex justify-center items-center">
                          {item.Quantity}
                        </div>
                        <span className="text-right text-md lg:text-lg min-w-[35px] lg:min-w-[50px] !ml-3 font-[320] ">
                          {(item.Price * item.Quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div>
                      {item.Modifiers &&
                        item.Modifiers.length > 0 &&
                        item.Modifiers.map((mod, modIdx) => (
                          <div
                            key={modIdx}
                            className="flex items-center justify-between text-white text-sm xl:text-xl pl-6"
                          >
                            <span className="flex-1 !ml-4 break-words xl:text-xl">
                              -- {mod.Name}
                            </span>

                            <div className="flex justify-end text-[#C2C2C2]">
                              <span>1x</span>
                              <span className="text-right xl:text-xl !ml-2 ">
                                {mod.Price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-8 mb-6">
                <div className="flex items-center justify-between bg-[#87714C] bg-opacity-80 rounded-full px-6 py-3 lg:py-5">
                  <span className="text-lg xl:text-3xl font-semibold text-white">
                    Total
                  </span>
                  <span className="text-xl xl:text-3xl font-medium text-white">
                    €{" "}
                    {ordersSlice.payload?.ListOfProducts.reduce(
                      (sum, item) => sum + item.Price * item.Quantity,
                      0
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
