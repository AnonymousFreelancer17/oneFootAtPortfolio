"use client";

import axios from "axios";
import { Circle, Copy, Heart } from "lucide-react";
import { Button } from "../../../../libs/ui/src/components/button";
import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function Index() {
  const [category, setCategory] = useState<
    ReturnType<typeof normalizeCategories>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Use http instead of https for localhost
  //       const response = await axios.get(
  //         "http://localhost:8000/scrapper/limeroad",
  //       );

  //       console.log(response.data.data);

  //       setData(response.data.data);
  //     } catch (err: any) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
    <div className="w-screen h-auto flex flex-wrap justify-center bg-gray-100 dark:bg-black">
      <div className="lg:w-11/12 md:w-11/12 sm:w-full flex flex-col justify-center items-center gap-4">
        <div className="w-full  h-screen  flex justify-center items-center dark:text-white text-black">
          <div className="text-xl">
            Why only Stop at <div>Fashion ?</div>
          </div>

          <div>
            <div>Explore</div>
            <div>
              <div>The</div>
              <div>Stories ,Culture ,people, World!</div>
              <div>
                <button type="button">Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto gap-4 flex flex-col justify-center items-center">
          <div className="lg:w-11/12 w-full h-[60px] font-semibold text-xl flex justify-start items-center dark:text-white text-black ">
            Shop by category
          </div>
          <div className="flex-1 flex-grow-1 flex flex-wrap justify-center items-center gap-4">
            {error ? (
              <div className="text-red-500">Somethin went wrong</div>
            ) : (
              <></>
            )}

            {loading ? (
              <div className="w-full relative flex-1 dark:text-white text-black flex justify-center items-center flex-wrap gap-2 ">
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
                cat.title !== "beauty" && cat.title !== "home" ? (
                  cat.groups.slice(0,5).map((sub, idx) => {
                  const images = sub.categories[0]?.products[0]?.images || [];

                    const assetImage: string | undefined = images.find((img: string) =>
                    img.includes("f_webp"),
                    );

                  return (
                    <Link href={""} key={idx} className="w-[300px] h-[40vh] flex flex-col justify-center items-center dark:bg-neutral-800 bg-neutral-200">
                      <div className="w-11/12 flex-1 flex justify-center items-center">
                          <img src={`https://assets.myntassets.com/${assetImage}` || ""} alt={sub.title} />
                      </div>

                      <div className="w-11/12 h-1/6 flex justify-center items-center bg-neutral-400">
                        {cat.title} {"=>"} {sub.title}
                      </div>
                     
                    </Link>
                  );
                  })
                ) : null
              )
            )}
          </div>
        </div>

        <div className="w-full h-auto gap-y-4 flex flex-col justify-center items-center my-4">

          <div className="w-full h-[45vh] font-semibold text-xl flex flex-col justify-center items-center dark:text-white text-black ">
            <div className="lg:w-11/12 w-full h-1/6 flex justify-start items-center ">
              Recently Viewed products
            </div>

            <div className="lg:w-11/12 w-11/12 h-5/6 flex justify-start items-start overflow-hidden">
              <div className="flex justify-start items-center gap-x-2 overflow-x-scroll ps-8">
                {[1,2,3,4,5,6,7,8,9,10].map((d,index)=>{
                return <div key={index} className="min-w-[300px] h-[40vh] bg-neutral-200 flex justify-center items-center dark:bg-neutral-800">
                  {d}
                </div>
              })}
              </div>
            </div>
          </div>

          <div className="w-full h-[60vh] font-semibold text-xl flex justify-center items-center dark:text-white text-black bg-neutral-800">
            Shop by Looks - Recreate top fashion for your ownself sliders here
          </div>

          <div className="w-full h-[60vh] font-semibold text-xl flex justify-center items-center dark:text-white text-blac bg-blue-400">
            Shop on sale - Event based sale sliders here
          </div>
        </div>
      </div>
    </div>
  );
}
