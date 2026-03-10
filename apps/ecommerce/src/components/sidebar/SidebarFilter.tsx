// import axios from 'axios';
// import { CheckboxFilter } from '../../../../../libs/ui/src/components/checkboxFilter/index';
// import { Slider } from '../../../../../libs/ui/src/components/slider-input/index';

// import React, { useEffect, useState } from 'react'

// const SidebarFilter = () => {

//   const [category, setCategory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // to get the form values

//   const [brands, setBrands] = useState<string[]>([]);
//   const [colors, setColors] = useState<string[]>([]);
//   const [price, setPrice] = useState<number>(500);
//   const [discount, setDiscount] = useState<number>(20);

//     useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/scrapper/myntra/categories",
//         );
//         const data = response.data.data;
//         console.log(data);
//         setCategory(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="lg:w-[15vw] md:w-[25vw] w-[20vw] h-[calc(100vh)] z-10 fixed top-[100px] left-0 dark:bg-neutral-900 dark:text-white text-black bg-neutral-100 overflow-y-auto md:block hidden">
//           {/* <div className="h-1/12 flex justify-center items-center border-b border-neutral-400 dark:border-neutral-600">

//             {/* bread crumbs */}
//           {/* </div> */}

//           <div className="w-full h-full border-r dark:border-neutral-600 border-neutral-400 space-y-8 flex flex-col justify-start items-center">
//             <div className="w-10/12 h-[60px] font-semibold text-lg border-b border-neutral-400 dark:border-neutral-600 flex justify-start items-center">
//               Filters
//             </div>

//             {/* Categories */}
//             <CheckboxFilter
//               label="Categories"
//               className="w-10/12 flex"
//               options={
//                 category
//               }
//               selectedValues={category}
//               onChange={setCategory}
//             />

//             {/* <div className="w-full border-t border-neutral-400 dark:border-neutral-600"></div> */}

//             {/* Brands */}
//             <CheckboxFilter
//               className="w-10/12 flex"
//               label="Brands"
//               options={[
//                 { label: "Nike", value: "nike" },
//                 { label: "Adidas", value: "adidas" },
//                 { label: "Puma", value: "puma" },
//               ]}
//               selectedValues={brands}
//               onChange={setBrands}
//             />

//             {/* <div className="border-t border-neutral-400 dark:border-neutral-600"></div> */}

//             {/* Price Slider */}
//             <div className="w-10/12 flex flex-col gap-2">
//               <Slider
//                 label="Price"
//                 min={0}
//                 max={5000}
//                 step={100}
//                 value={price}
//                 unit="₹"
//                 onChange={setPrice}
//               />
//             </div>

//             {/* Colors */}
//             <CheckboxFilter
//               label="Color"
//               className="w-10/12"
//               options={[
//                 { label: "Black", value: "black" },
//                 { label: "White", value: "white" },
//                 { label: "Red", value: "red" },
//               ]}
//               selectedValues={colors}
//               onChange={setColors}
//             />

//             {/* Discount Slider */}
//             <div className="w-10/12 flex flex-col gap-2">
//               <Slider
//                 label="Discount Range"
//                 className="w-full"
//                 min={0}
//                 max={80}
//                 step={5}
//                 value={discount}
//                 unit="%"
//                 onChange={setDiscount}
//                 inputClassName="accent-green-500"
//               />
//             </div>
//           </div>
//         </div>
//   )
// }

// export default SidebarFilter

import React from "react";

const SidebarFilter = () => {
  return (
    <div className="lg:w-[15vw] md:w-[25vw] w-[20vw] h-[calc(100vh-15vh)] flex flex-col justify-center items-center z-50  rounded-md">
      <div className="h-[60px] text-2xl font-semibold">Filter</div>

      <div className="flex-1 flex justify-center items-center bg-neutral-800">
        dark:bg-neutral-800 bg-neutral-200
      </div>
    </div>
  );
};

export default SidebarFilter;
