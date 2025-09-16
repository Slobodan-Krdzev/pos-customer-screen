import { useEffect } from "react";
import "./App.css";
import { initSignalR } from "./signalR/signalRService";
// import type { Product } from "./types/Types";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

// const dummyData: Product[] = [
//   {
//     OperationType: 1,
//     IdCombination: null,
//     Quantity: 13,
//     Round: 1,
//     StatusType: 0,
//     Note: "",
//     IsOnHold: false,
//     IsComboProduct: false,
//     Id: 0,
//     IdProduct: 278262,
//     DisplayOrder: 7,
//     Name: "TA29. Tonijn Handrol",
//     Price: 3.6,
//     HasModifiers: false,
//     ShowModifiers: false,
//     OutOfStock: false,
//     ProductModifiers: [],
//     CurrentCourse: {
//       Id: 0,
//       DisplayOrder: 0,
//       Name: null,
//       IsChangable: false,
//       CourseTime: 0,
//     },
//     IsOpenPrice: false,
//     IdTaxType: 0,
//     New: true,
//     ProductSubCategoryName: "GUNKAN",
//     DateCreated: "2025-09-11T11:17:19.337Z",
//   },
//   {
//     OperationType: 1,
//     IdCombination: null,
//     Quantity: 1,
//     Round: 1,
//     StatusType: 0,
//     Note: "",
//     IsOnHold: false,
//     IsComboProduct: false,
//     Id: 0,
//     IdProduct: 239576,
//     DisplayOrder: 3,
//     Name: "TA20. zeewier & tofu Gunkan",
//     Price: 2.3,
//     HasModifiers: false,
//     ShowModifiers: false,
//     OutOfStock: false,
//     ProductModifiers: [],
//     CurrentCourse: {
//       Id: 0,
//       DisplayOrder: 0,
//       Name: null,
//       IsChangable: false,
//       CourseTime: 0,
//     },
//     IsOpenPrice: false,
//     IdTaxType: 0,
//     New: true,
//     ProductSubCategoryName: "GUNKAN",
//     DateCreated: "2025-09-11T11:17:19.032Z",
//   },
//   {
//     OperationType: 1,
//     IdCombination: null,
//     Quantity: 1,
//     Round: 1,
//     StatusType: 0,
//     Note: "",
//     IsOnHold: false,
//     IsComboProduct: false,
//     Id: 0,
//     IdProduct: 278261,
//     DisplayOrder: 6,
//     Name: "TA28. Zalm Handrol",
//     Price: 3.4,
//     HasModifiers: false,
//     ShowModifiers: false,
//     OutOfStock: false,
//     ProductModifiers: [],
//     CurrentCourse: {
//       Id: 0,
//       DisplayOrder: 0,
//       Name: null,
//       IsChangable: false,
//       CourseTime: 0,
//     },
//     IsOpenPrice: false,
//     IdTaxType: 0,
//     New: true,
//     ProductSubCategoryName: "GUNKAN",
//     DateCreated: "2025-09-11T11:17:18.595Z",
//   },
//   {
//     OperationType: 1,
//     IdCombination: null,
//     Quantity: 1,
//     Round: 1,
//     StatusType: 0,
//     Note: "",
//     IsOnHold: false,
//     IsComboProduct: false,
//     Id: 0,
//     IdProduct: 239575,
//     DisplayOrder: 2,
//     Name: "TA19. tonijn & tofu Gunkan",
//     Price: 2.4,
//     HasModifiers: false,
//     ShowModifiers: false,
//     OutOfStock: false,
//     ProductModifiers: [],
//     CurrentCourse: {
//       Id: 0,
//       DisplayOrder: 0,
//       Name: null,
//       IsChangable: false,
//       CourseTime: 0,
//     },
//     IsOpenPrice: false,
//     IdTaxType: 0,
//     New: true,
//     ProductSubCategoryName: "GUNKAN",
//     DateCreated: "2025-09-11T11:17:18.344Z",
//   },
//   {
//     OperationType: 1,
//     IdCombination: null,
//     Quantity: 1,
//     Round: 1,
//     StatusType: 0,
//     Note: "",
//     IsOnHold: false,
//     IsComboProduct: false,
//     Id: 0,
//     IdProduct: 278259,
//     DisplayOrder: 4,
//     Name: "TA26. Zeewier Handrol",
//     Price: 3.4,
//     HasModifiers: false,
//     ShowModifiers: false,
//     OutOfStock: false,
//     ProductModifiers: [],
//     CurrentCourse: {
//       Id: 0,
//       DisplayOrder: 0,
//       Name: null,
//       IsChangable: false,
//       CourseTime: 0,
//     },
//     IsOpenPrice: false,
//     IdTaxType: 0,
//     New: true,
//     ProductSubCategoryName: "GUNKAN",
//     DateCreated: "2025-09-11T11:17:17.798Z",
//   },
//   {
//     OperationType: 1,
//     IdCombination: null,
//     Quantity: 1,
//     Round: 1,
//     StatusType: 0,
//     Note: "",
//     IsOnHold: false,
//     IsComboProduct: false,
//     Id: 0,
//     IdProduct: 278260,
//     DisplayOrder: 5,
//     Name: "TA27. California Handrol",
//     Price: 3.2,
//     HasModifiers: false,
//     ShowModifiers: false,
//     OutOfStock: false,
//     ProductModifiers: [],
//     CurrentCourse: {
//       Id: 0,
//       DisplayOrder: 0,
//       Name: null,
//       IsChangable: false,
//       CourseTime: 0,
//     },
//     IsOpenPrice: false,
//     IdTaxType: 0,
//     New: true,
//     ProductSubCategoryName: "GUNKAN",
//     DateCreated: "2025-09-11T11:17:17.434Z",
//   },
//   {
//     OperationType: 1,
//     IdCombination: null,
//     Quantity: 4,
//     Round: 1,
//     StatusType: 0,
//     Note: "",
//     IsOnHold: false,
//     IsComboProduct: false,
//     Id: 0,
//     IdProduct: 239574,
//     DisplayOrder: 1,
//     Name: "TA18. Zalm Gunkan",
//     Price: 2.3,
//     HasModifiers: false,
//     ShowModifiers: false,
//     OutOfStock: false,
//     ProductModifiers: [],
//     CurrentCourse: {
//       Id: 0,
//       DisplayOrder: 0,
//       Name: null,
//       IsChangable: false,
//       CourseTime: 0,
//     },
//     IsOpenPrice: false,
//     IdTaxType: 0,
//     New: true,
//     ProductSubCategoryName: "GUNKAN",
//     DateCreated: "2025-09-11T11:17:17.076Z",
//   },
//   {
//     OperationType: 1,
//     IdCombination: null,
//     Quantity: 8,
//     Round: 1,
//     StatusType: 0,
//     Note: "",
//     IsOnHold: false,
//     IsComboProduct: false,
//     Id: 0,
//     IdProduct: 363108,
//     DisplayOrder: 1,
//     Name: "2. Tonijn Nigiri",
//     Price: 0,
//     HasModifiers: false,
//     ShowModifiers: false,
//     OutOfStock: false,
//     ProductModifiers: [],
//     CurrentCourse: {
//       Id: 0,
//       DisplayOrder: 0,
//       Name: null,
//       IsChangable: false,
//       CourseTime: 0,
//     },
//     IsOpenPrice: false,
//     IdTaxType: 0,
//     New: true,
//     ProductSubCategoryName: "1-9",
//     DateCreated: "2025-09-11T11:17:14.656Z",
//   },
// ];

// const dummyData: Product[] = [];

function getCurrentDate() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}

function getCurrentTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${ampm}`;
}

function App() {
  const ordersSlice = useSelector((state: RootState) => state.orders);
  useEffect(() => {
    initSignalR();
  }, []);

  useEffect(() => {
    console.log("Orders slice updated:", ordersSlice.orders);
  }, [ordersSlice]);

  return (
    <div className="relative min-h-[100dvh] !h-[100dvh]  w-full flex pt-[4vw] md:pt-4 lg:py-[1.5vw] items-start lg:items-center justify-center bg-black overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="background"
          className="w-full h-full object-cover blur-lg scale-105 opacity-70"
        />
      </div>
      {/* Main content layout */}

      <div className="relative z-10  w-[90%] md:max-w-[90%] lg:max-w-[85%] flex flex-col lg:flex-row items-center justify-center md:gap-3 lg:gap-10 lg:py-12">

        {/* TITLE */}
        <div className="flex flex-col items-center justify-center text-white md:w-1/2 w-full mb-4 md:mb-0">
          <h1
            className="font-bold text-4xl lg:text-7xl xl:text-[150px] tracking-tight mb-2"
            style={{ fontFamily: "cursive" }}
          >
            Duiven
          </h1>
          <div className="text-sm lg:text-base xl:text-3xl font-light text-center">
            KOREAN BBQ | SUSHI | DRIVE THRU
          </div>
          <div className="lg:mt-2 flex flex-col items-center">
            <span className="text-sm lg:text-md xl:text-2xl my-1 xl:my-4">
              Active Order
            </span>
            <span className="relative flex w-3 h-3 xl:w-5 xl:h-5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full w-3 h-3 xl:w-5 xl:h-5 bg-green-400"></span>
            </span>
          </div>
        </div>

        {ordersSlice.orders.length > 0 && (
          <div className="bg-[#343A40B2] rounded-3xl border-[1px] border-[#666a6e] text-white w-[90%] lg:w-[60%]">
            {/* Top Logo and Date */}
            <div className="flex justify-between items-center px-6 md:px-8 py-3 md:py-4 xl:py-6 border-b border-[#666a6e]">
              {/* <p className="text-md">#0003</p> */}
              <img src="/nomiLogo.png" alt="Logo" className="w-[30%] md:w-[15%]" />
              <div className=" basis-7/12">
                <p className="text-right text-xs md:text-md xl:text-xl font-light">
                  {getCurrentDate()}
                </p>
                <p className="text-right text-xs md:text-md xl:text-xl font-light">
                  {getCurrentTime()}
                </p>
              </div>
            </div>

            <div className="bg-[#9393935e] px-6 md:px-8 py-2 md:py-2 xl:py-4 text-xl md:text-lg xl:text-3xl ">
              Your Order
            </div>

            <div className="px-6 md:px-8 py-1 mb-4 md:mb-2 overflow-scroll md:min-h-[400px] xl:min-h-[420px]  md:max-h-[400px] xl:max-h-[420px] my-scroll scrollbar-hide-x">
              {ordersSlice.orders.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-white text-sm xl:text-xl py-2  xl:py-4"
                >
                  <span className="w-6 text-center text-gray-300 ">
                    {item.Quantity}
                  </span>
                  <span className="flex-1 !ml-4 break-words xl:text-xl">
                    {item.Name}
                  </span>
                  <span className="text-right xl:text-xl">
                    {(item.Price * item.Quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="px-8 mb-6">
              <div className="flex items-center justify-between bg-[#87714C] bg-opacity-80 rounded-full px-6 py-3">
                <span className="text-lg xl:text-3xl font-semibold text-white">
                  Total
                </span>
                <span className="text-xl xl:text-3xl font-medium text-white">
                  {ordersSlice.orders
                    .reduce((sum, item) => sum + item.Price * item.Quantity, 0)
                    .toFixed(2)}
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
