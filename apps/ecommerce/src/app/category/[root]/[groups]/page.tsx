"use client";

import React from "react";
import { useParams } from "next/navigation";

type GroupCategory = string | null;

const page = () => {
  const params = useParams();
  const groupCategory = params?.groups as GroupCategory;

  return (
    <div className="h-screen flex-1">
      <div className="w-full h-[60px] flex justify-start items-start">
        page :{params?.root} {groupCategory}
      </div>

      <div className="flex-1">

      </div>
    </div>
  );
};

export default page;
