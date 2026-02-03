"use client";

import React, { ReactNode, useState } from "react";
import { CheckboxFilter } from "../../../../../libs/ui/src/components/checkboxFilter/index";
import { Slider } from "../../../../../libs/ui/src/components/slider-input/index";

const layout = ({ children }: { children: ReactNode }) => {
  // 🔹 Filter states
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(500);
  const [discount, setDiscount] = useState<number>(20);

  return (
    <div className="w-screen min-h-[120vh] flex justify-center items-center py-8 bg-neutral-100 dark:bg-neutral-900">
      <div className="lg:w-10/12 w-11/12 flex justify-end items-center relative">
        {/* Sidebar */}
        <div className="lg:w-[15vw] md:w-[25vw] w-[20vw] h-[calc(100vh-100px)] z-10 absolute top-[100px] left-0 dark:bg-neutral-900 dark:text-white text-black bg-neutral-100 overflow-y-auto">
          <div className="h-1/6 flex justify-center items-center border-b border-neutral-400 dark:border-neutral-600">
            Home / categories / men
          </div>

          <div className="w-full h-5/6 border-r dark:border-neutral-600 border-neutral-400 space-y-8 flex flex-col justify-center items-center">
            <div className="w-10/12 h-[60px] font-semibold text-lg border-b border-neutral-400 dark:border-neutral-600 flex justify-start items-center">
              Filters
            </div>

            {/* Categories */}
            <CheckboxFilter
              label="Categories"
              className="w-10/12 flex"
              options={[
                { label: "Shoes", value: "shoes" },
                { label: "Clothing", value: "clothing" },
                { label: "Accessories", value: "accessories" },
              ]}
              selectedValues={categories}
              onChange={setCategories}
            />

            {/* <div className="w-full border-t border-neutral-400 dark:border-neutral-600"></div> */}

            {/* Brands */}
            <CheckboxFilter
              className="w-10/12 flex"
              label="Brands"
              options={[
                { label: "Nike", value: "nike" },
                { label: "Adidas", value: "adidas" },
                { label: "Puma", value: "puma" },
              ]}
              selectedValues={brands}
              onChange={setBrands}
            />

            {/* <div className="border-t border-neutral-400 dark:border-neutral-600"></div> */}

            {/* Price Slider */}
            <div className="w-10/12 flex flex-col gap-2">
              <Slider
                label="Price"
                min={0}
                max={5000}
                step={100}
                value={price}
                unit="₹"
                onChange={setPrice}
              />
            </div>

            {/* Colors */}
            <CheckboxFilter
              label="Color"
              className="w-10/12"
              options={[
                { label: "Black", value: "black" },
                { label: "White", value: "white" },
                { label: "Red", value: "red" },
              ]}
              selectedValues={colors}
              onChange={setColors}
            />

            {/* Discount Slider */}
            <div className="w-10/12 flex flex-col gap-2">
              <Slider
                label="Discount Range"
                className="w-full"
                min={0}
                max={80}
                step={5}
                value={discount}
                unit="%"
                onChange={setDiscount}
                inputClassName="accent-green-500"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[calc(100%-15vw)] mt-[99px] h-auto flex flex-col justify-center items-center">
          <div className="w-full h-[15vh] flex justify-center items-center border-b border-neutral-400 dark:border-neutral-600">
            Home / categories / men
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
