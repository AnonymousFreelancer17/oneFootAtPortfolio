"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function normalizeCategories(data: any) {
  return Object.entries(data).map(([sectionKey, sectionValue]: any) => ({
    key: sectionKey,
    title: sectionKey.replace(/-/g, " "),
    groups: Object.entries(sectionValue).map(([groupKey, groupValue]: any) => ({
      key: groupKey,
      title: groupKey.replace(/-/g, " "),
      href: groupValue.href,
      categories: Object.entries(groupValue.categories || {}).map(
        ([catKey, catValue]: any) => ({
          key: catKey,
          title: catValue.title,
          products: catValue.products,
          href: catValue.href,
        }),
      ),
    })),
  }));
}

const page = () => {
  const [category, setCategory] = useState<
    ReturnType<typeof normalizeCategories>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/scrapper/myntra/products",
        );

        console.log(normalizeCategories(response.data.parsed));

        setCategory(normalizeCategories(response.data.parsed));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center gap-4 py-8">
      {error && <div className="text-red-500">{error}</div>}

      {loading ? (
        <div className="w-full relative flex-1 dark:text-white text-black flex justify-center items-center flex-wrap gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (d, index) => {
              return (
                <div
                  key={index}
                  className="w-[300px] h-[40vh] dark:text-white text-black flex flex-col justify-center items-center rounded-md dark:bg-neutral-800 bg-neutral-200 animate-pulse"
                ></div>
              );
            },
          )}
        </div>
      ) : (
        category?.map((cat, index) =>
          cat.title === "men"
            ? cat.groups.map((sub, idx) => {
                const images = sub.categories[0]?.products[0]?.images || [];

                const assetImage: string | undefined = images.find(
                  (img: string) => img.includes("f_webp"),
                );

                return (
                  <Link
                    href={""}
                    key={idx}
                    className="min-w-[300px] h-[40vh] flex flex-col justify-center items-center dark:bg-neutral-800 bg-neutral-200"
                  >
                    <div className="w-11/12 flex-1 flex justify-center items-center">
                      <img
                        src={
                          `https://assets.myntassets.com/${assetImage}` || ""
                        }
                        alt={sub.title}
                      />
                    </div>

                    <div className="w-11/12 h-1/6 flex justify-center items-center bg-neutral-400">
                      {cat.title} {"=>"} {sub.title}
                    </div>
                  </Link>
                );
              })
            : null,
        )
      )}
    </div>
  );
};

export default page;
