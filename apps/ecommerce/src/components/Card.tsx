import { Circle, Copy } from "lucide-react";
import Link from "next/link";
import React from "react";

const Card = ({index}:{index:string}) => {
  return (
    <Link
      href={""}
      key={index}
      className="w-[250px] h-[40vh] dark:text-white text-black flex flex-col justify-center items-center rounded-md overflow-hidden cursor-pointer dark:bg-neutral-700"
    >
      <div className="w-full h-4/6 flex justify-center items-center relative">
        <button type="button" className="absolute z-30 flex">
          <Copy />
        </button>

        <div className="flex-1 bg-red-400 h-full flex justify-center items-center relative">
          <div className="h-full flex-1 bg-gradient-to-t from:neutral-900 to-neutral-900/0 absolute"></div>

          <div className="w-full h-full flex justify-start items-center gap-x-8 oveflow-hidden px-8">
            <img
              className="w-[100%] h-full"
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2026/JANUARY/4/dpXR8BPh_7054d06f927f4be49f39c1921dd45692.jpg"
              alt="dummy"
            />
            <img
              className="w-[100%] h-full"
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2026/JANUARY/4/dpXR8BPh_7054d06f927f4be49f39c1921dd45692.jpg"
              alt="dummy"
            />
            <img
              className="w-[100%] h-full"
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2026/JANUARY/4/dpXR8BPh_7054d06f927f4be49f39c1921dd45692.jpg"
              alt="dummy"
            />
          </div>
        </div>
        <div className="w-[250px] absolute bottom-[10px] z-10 flex justify-center items-center gap-x-2">
          <Circle
            size={9}
            className="bg-green-500 rounded-full text-green-500 cursor-pointer"
          />
          <Circle
            size={9}
            className="bg-green-500 rounded-full text-green-500 cursor-pointer"
          />
          <Circle
            size={9}
            className="bg-green-500 rounded-full text-green-500 cursor-pointer"
          />
          <Circle
            size={9}
            className="bg-green-500 rounded-full text-green-500 cursor-pointer"
          />
          <Circle
            size={9}
            className="bg-green-500 rounded-full text-green-500 cursor-pointer"
          />
          <Circle
            size={9}
            className="bg-green-500 rounded-full text-green-500 cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full flex-1 flex flex-col justify-center items-center gap-y-2">
        {/* <Button
                      containerClassName={"w-11/12 h-[40px] flex justify-center items-center border rounded-md"}
                      className={"flex justify-center items-center gap-x-1"}
                      iconClassName={""}
                      buttonText={"Wishlist"}
                      type={"button"}
                      href={""}
                      action={""}
                      icon={<Heart />}
                      counterText={""}
                      showCounter={false}
                    /> */}
        {/* {sub.title} */}

        <div className="w-11/12 flex justify-start items-center gap-x-1">
          <div>Size:</div>
          <div>L</div>
        </div>
        <div className="w-11/12 flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-1">
            <div className="font-medium">price: 499</div>
            <div className="font-light text-xs dark:text-neutral-300 text-neutral-700 line-through">
              599
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
