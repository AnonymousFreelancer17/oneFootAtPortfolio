"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { replaceHyphens, safeCapitalize } from "../../utils/string";
import Link from "next/link";
import SkeletonCard from "../../components/cards/SkeletonCard";
// import { useParams } from "next/navigation";

const page = () => {
  // const params = useParams();

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(params.rootCategory);

      try {
        const response = await axios.get(
          `http://localhost:8000/scrapper/myntra/categories`,
        );
        const data = response.data.data;
        console.log(data);
        setCategory(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto flex-1 flex justify-center items-center">
      <div className="w-full h-auto flex flex-wrap justify-center items-center px-[10px]">
        {error ? (
          <div className="text-red-500">Something went wrong</div>
        ) : (
          <></>
        )}

        {loading ? (
          <div className="w-full relative flex-1 dark:text-white text-black flex justify-center items-center flex-wrap gap-2 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (d, index) => {
                return <SkeletonCard key={index} />;
              },
            )}
          </div>
        ) : (
          <div className="w-full overflow-hidden flex justify-start items-start">
            {category.map((rootCategory: any) => {
              // 1️⃣ Collect all categories from all groups
              const allCategories = (rootCategory.groups ?? []).flatMap(
                (group: any) => group.categories ?? [],
              );

              // 2️⃣ Take only first 10
              const limitedCategories = allCategories;

              return (
                <div
                  key={rootCategory.name}
                  className="w-full flex flex-wrap justify-start items-start gap-4"
                >
                  {limitedCategories.map((cat: any, idx: any) => (
                    <Link
                      href={`/${rootCategory.name}/${rootCategory.groups[0].name}/${cat.slug}`}
                      key={`categories-${rootCategory.name}-${rootCategory.groups[0].name}-${cat.slug}-${idx}`}
                      className="w-[250px] h-[35vh] flex flex-col justify-center items-center dark:bg-neutral-800 overflow-hidden rounded-md hover:shadow-xl relative"
                    >
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src={cat.image}
                          className="w-full"
                          alt={cat.slug}
                        />
                      </div>

                      <div
                        className={`w-11/12 h-[120px] bg absolute bottom-[8px] bg-green-500/80 backdrop-blur-sm dark:text-white text-black rounded-md flex flex-col justify-center items-center`}
                      >
                        <div className="w-11/12 flex flex-wrap justify-center items-center gap-x-1.5 text-bold">
                          {/*  category-title */}
                          <div className="w-full font-bold text-xl flex justify-center items-center flex-wrap">
                            {safeCapitalize(replaceHyphens(cat.slug))}
                          </div>
                        </div>

                        <div className="w-full flex flex-col justify-center items-center text-light">
                          <div className="text-sm">upto</div>
                          <div className="w-full flex justify-center items-center gap-x-1.5">
                            <div className="font-bold text-xl">
                              {Math.trunc(cat.maxDiscount)}%
                            </div>{" "}
                            -{" "}
                            <div className="font-bold text-xl">
                              {Math.trunc(cat.minDiscount)}%
                            </div>
                          </div>
                          <div className="text-sm">Discounts</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
