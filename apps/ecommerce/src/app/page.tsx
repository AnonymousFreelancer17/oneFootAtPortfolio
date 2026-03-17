"use client";

import axios from "axios";
// import { Circle, Copy, Heart } from "lucide-react";
// import { Button } from "../../../../libs/ui/src/components/button";
import { Carousel } from "../../../../libs/ui/src/components/carousel/index";
import { useEffect, useState } from "react";
import Link from "next/link";
import { replaceHyphens, safeCapitalize } from "../utils/string";
import SkeletonCard from "../components/cards/SkeletonCard";

export default function Index() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/scrapper/myntra/categories",
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
    <div className="w-screen h-auto flex flex-col justify-center items-center bg-neutral-100 dark:bg-neutral-900">
      <div className="lg:w-11/12 w-full flex flex-col justify-center items-center gap-4 ">
        <div className="w-full h-screen flex justify-center items-center dark:text-white text-black">
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
          <div className="lg:w-11/12 w-11/12 h-[60px] font-semibold text-xl flex justify-start items-center dark:text-white text-black gap-x-1.5">
            Shop by
            <Link href={"/category"} className="text-green-500">
              Category
            </Link>
          </div>
          <div className="lg:w-11/12 md:w-full w-full h-auto flex flex-wrap justify-center items-center">
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
              <div className="w-full h-auto flex flex-wrap justify-start items-start gap-4">
                {category.map((root: any) => {
                  // 1️⃣ Collect all categories from all groups
                  const allCategories = (root.groups ?? []).flatMap(
                    (group: any) => group.categories ?? [],
                  );

                  // 2️⃣ Take only first 10
                  const limitedCategories = allCategories.slice(0, 12);

                  return (
                    <div className="w-full flex sm:flex-row flex-col flex-wrap lg:justify-start justify-center items-center gap-4">
                      {limitedCategories.map((cat: any) => (
                        <Link
                          href={`/${root.name}/${root.groups[0].name}/${cat.slug}`}
                          key={root.name + "-" + cat.slug}
                          className="sm:w-[250px] w-[400px] sm:h-[35vh] h-[55vh] flex flex-col justify-center items-center dark:bg-neutral-800 overflow-hidden rounded-md hover:shadow-xl relative"
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

        <div className="w-full h-auto gap-y-4 flex flex-col justify-center items-center my-4">
          <div className="w-full h-[60vh] font-semibold text-xl flex flex-col justify-center items-center dark:text-white text-black ">
            <div className="lg:w-11/12 w-11/12 h-1/6 flex justify-start items-center ">
              Recently Viewed products
            </div>

            <div className="lg:w-11/12 w-11/12 h-5/6 flex justify-start items-start overflow-hidden">
              <div className="h-full flex justify-start items-center gap-x-4 overflow-x-scroll ">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, index) => {
                  return <SkeletonCard key={index} />;
                })}
              </div>
            </div>
          </div>

          <div className="w-full h-[80vh] font-semibold text-xl flex flex-col justify-center items-center dark:text-white text-black">
            <div className="lg:w-11/12 w-11/12 h-1/6 flex justify-start items-center">
              Shop by Looks - Recreate top fashion for your ownself sliders here
            </div>
            <Carousel
              className="lg:w-11/12 w-11/12 h-5/6 flex justify-center items-center"
              autoPlay={true}
              interval={3000}
              showArrows={true}
              showDots={true}
            >
              {[1, 2, 3, 4, 5, 6].map((d, index) => {
                return (
                  <div
                    key={index}
                    className="lg:w-full w-11/12 h-full flex justify-center items-center dark:text-white text-black p-8 gap-4"
                  >
                    <div className="lg:w-4/12 md:w-4/12 sm:w-4/12 w-4/12 h-full dark:bg-neutral-800 bg-neutral-200 text-xs font-light flex justify-center items-center">
                      Complete Look
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-center items-center gap-4">
                      <div className="w-full h-1/2 flex justify-center items-center gap-4">
                        {[1, 2, 3].map((d, idx) => {
                          return (
                            <div
                              key={idx}
                              className="w-1/3 h-full bg-neutral-200 dark:bg-neutral-800 flex justify-center items-center text-xs font-light rounded-md"
                            >
                              {idx}
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex-1 w-full dark:bg-neutral-800 bg-neutral-200 text-xs font-light flex justify-center items-center">
                        col layer
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className="w-full h-[80vh] font-semibold text-xl flex flex-col justify-center items-center dark:text-white text-black">
            <div className="lg:w-11/12 w-11/12 h-1/6 flex justify-start items-center">
              Shop on sale - Event based sale sliders here
            </div>
            <Carousel
              className="w-11/12 h-4/6 flex justify-center items-center"
              autoPlay={true}
              interval={3000}
              showArrows={true}
              showDots={true}
            >
              {[1, 2, 3, 4, 5, 6].map((d, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-full bg-neutral-200 dark:bg-neutral-800 dark:text-white text-black"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae illo eaque facilis modi obcaecati ipsam qui
                    laboriosam blanditiis, mollitia aliquam, suscipit nulla
                    expedita officiis libero veritatis distinctio iure fugit eos
                    molestias, accusantium animi ipsa.
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className="w-full h-[60vh] font-semibold text-xl flex flex-col justify-center items-center dark:text-white text-black">
            <div className="lg:w-11/12 w-11/12 h-1/6 flex justify-start items-center">
              Grand Global Brands
            </div>
            <Carousel
              className="w-11/12 h-4/6 flex justify-center items-center"
              autoPlay={true}
              interval={3000}
              showArrows={true}
              showDots={true}
            >
              {[1, 2, 3, 4, 5, 6].map((d, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-full bg-neutral-200 dark:bg-neutral-800 dark:text-white text-black"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae illo eaque facilis modi obcaecati ipsam qui
                    laboriosam blanditiis, mollitia aliquam, suscipit nulla
                    expedita officiis libero veritatis distinctio iure fugit eos
                    molestias, accusantium animi ipsa.
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className="w-full h-[60vh] font-semibold text-xl flex flex-col justify-center items-center dark:text-white text-black">
            <div className="lg:w-11/12 w-11/12 h-[50%] flex justify-start items-center dark:bg-neutral-800 bg-neutral-200 rounded-md">
              {/* One Foot Opportunities */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
