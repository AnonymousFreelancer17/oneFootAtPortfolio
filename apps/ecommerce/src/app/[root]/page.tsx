"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import SkeletonCard from "../../components/cards/SkeletonCard";
import { Carousel } from "../../../../../libs/ui/src/components/carousel/index";
import Link from "next/link";
import { replaceHyphens, safeCapitalize } from "../../utils/string";

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
  const params = useParams();
  const rootCategory = params?.root as RootCategory;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!rootCategory) return;

    console.log(rootCategory);

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `http://localhost:8000/scrapper/myntra/products/${rootCategory}`,
        );

        console.log(response.data.data);

        setProducts(response.data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [rootCategory]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!validRootCategories.includes(rootCategory)) {
    return <div>Invalid Category</div>;
  }

  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center dark:text-white text-black">
      <div className="w-full h-[60px] text-xl font-medium flex gap-x-2">
        <Link href={"/"} className="cursor-pointer">
          Home
        </Link>{" "}
        /{" "}
        <Link href={`/${rootCategory}`} className="cursor-pointer">
          {replaceHyphens(safeCapitalize(rootCategory))}{" "}
        </Link>{" "}
      </div>

      <div className="w-full h-full flex flex-wrap justify-center items-center">
        {loading ? (
          <div
            className="w-9/12 h-full flex flex-wrap gap-4 justify-center items-center
          "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (d, index) => {
                return <SkeletonCard key={index} />;
              },
            )}
          </div>
        ) : (
          <div className="w-full h-auto flex flex-wrap justify-center items-center gap-4">
            {products
              ?.sort(() => 0.5 - Math.random())
              .slice(0, 49)
              .map((d: any, index) => {
                return (
                  <div
                    key={index}
                    className="w-[250px] h-[35vh] dark:text-white rounded-md overflow-hidden"
                  >
                    <Carousel className="w-full ha-full flex justify-center items-center" autoPlay={true} showArrows={false} >
                      {d?.image.map((img: string) => {
                        return (
                          <img src={img} className="w-full h-auto" alt={img} />
                        );
                      })}
                    </Carousel>
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
