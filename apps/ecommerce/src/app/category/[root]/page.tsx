"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SkeletonCard from "apps/ecommerce/src/components/cards/SkeletonCard";
import { replaceHyphens, safeCapitalize } from "apps/ecommerce/src/utils/string";

type RootCategory = "men" | "women" | "home" | "kids" | "beauty" | "genz";

const validRootCategories: RootCategory[] = [
  "men",
  "women",
  "home",
  "kids",
  "beauty",
  "genz",
];

const page = () => {
  const [error, setError] = useState("");
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const rootCategory = params?.root as RootCategory;

  useEffect(() => {
    if (!rootCategory) return;

    console.log(rootCategory);

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `http://localhost:8000/scrapper/myntra/categories/${rootCategory}`,
        );

        console.log(response.data.data);

        setCategory(response.data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [rootCategory]);

  if (!validRootCategories.includes(rootCategory)) {
    return <div>Invalid Category</div>;
  }

  return (
    <div className="w-screen h-auto flex justify-center items-center">
      {loading ? (
        <div className="flex-1 h-auto flex flex-wrap justify-center items-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (d, index) => {
              return <SkeletonCard key={index} />;
            },
          )}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center flex-1 h-auto dark:text-white gap-4 ">
          {category.map((cat: any) => {
            return (
              <div
                key={cat.name}
                className="w-[250px] h-[35vh] rounded-md bg-neutral-200 dark:bg-neutral-800 dark:text-white relative flex justify-center items-center overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="relative h-full"
                />

                <div className="w-11/12 h-[120px] absolute bottom-[10px] z-10 bg-green-500/80 backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
                  <div>
                    {safeCapitalize(replaceHyphens(cat.name))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default page;
