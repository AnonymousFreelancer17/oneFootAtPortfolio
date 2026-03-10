import React from "react";

const SkeletonCard = () => {
  return (
    <div
      className="min-w-[250px] h-[35vh] dark:text-white text-black flex flex-col justify-start items-start rounded-md dark:bg-neutral-800 bg-neutral-200 animate-pulse gap-2 p-[20px]"
    >
      <div className="w-11/12 h-[30px] dark:bg-neutral-700 bg-neutral-300 rounded-md"></div>

      <div className="w-1/2 h-[30px] dark:bg-neutral-700 bg-neutral-300 rounded-md"></div>
    </div>
  );
};

export default SkeletonCard;
