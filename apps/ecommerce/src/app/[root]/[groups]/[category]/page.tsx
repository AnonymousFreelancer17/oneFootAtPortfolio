"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import SkeletonCard from "apps/ecommerce/src/components/cards/SkeletonCard";
import {
  replaceHyphens,
  safeCapitalize,
} from "apps/ecommerce/src/utils/string";
import Link from "next/link";
import { Carousel } from "../../../../../../../libs/ui/src/components/carousel/index";

const validRootCategories = ["men", "women", "kids", "beauty", "home", "genz"];

const Page = () => {
  const params = useParams();

  const rootCategory = params?.root as string;
  const group = params?.groups as string;
  const category = params?.category as string;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (!rootCategory || !group) return;

    console.log(rootCategory, group, category);

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `http://localhost:8000/scrapper/myntra/products/${rootCategory}/${group}/${category}`,
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
  }, [rootCategory, group]);

  if (!validRootCategories.includes(rootCategory)) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Invalid Category
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen dark:text-white">
      <div className="w-full h-[60px] text-xl font-medium flex gap-x-2">
        <Link href={"/"}>Home</Link> /
        <Link href={`/${rootCategory}`} className="cursor-pointer">
          {replaceHyphens(safeCapitalize(rootCategory))}{" "}
        </Link>{" "}
        /{" "}
        <Link href={`/${rootCategory}/${group}`} className="cursor-pointer">
          {replaceHyphens(safeCapitalize(group))}
        </Link>
        /
        <Link
          href={`/${rootCategory}/${group}/${category}`}
          className="cursor-pointer"
        >
          {replaceHyphens(safeCapitalize(category))}
        </Link>
      </div>

      {loading ? (
        <div className="flex-1 h-full flex flex-wrap justify-center items-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (d, index) => {
              return <SkeletonCard key={index} />;
            },
          )}
        </div>
      ) : (
        <div className="flex-1 flex-wrap gap-4 h-auto flex justify-center items-center">
          {products.map((d: any, index) => {
            return (
              <Link
                href={`/${rootCategory}/${group}/${category}/${d.productCode}`}
                key={index}
                className="w-[250px] h-[35vh] flex justify-center items-center rounded-md overflow-hidden"
              >
                <Carousel className="w-full ha-full flex justify-center items-center" autoPlay={true} showArrows={false} >
                                      {d?.image.map((img: string) => {
                                        return (
                                          <img src={img} className="w-full h-auto" alt={img} />
                                        );
                                      })}
                </Carousel>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Page;
