"use client";

import axios from "axios";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Index() {
  const [data, setData] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
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

        console.log(response.data.parsed);

        setCategory(response.data.parsed);
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
      <div className="lg:w-11/12 md:w-11/12 sm:w-full flex flex-col">
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

        <div className="w-full h-screen gap-4 flex-col justify-center items-center">
          <div className="w-full h-[60px] font-semibold text-xl flex justify-center items-center dark:text-white text-black">
            Shop by category
          </div>
          <div className="flex-1 flex-grow-1 flex flex-wrap justify-center items-center gap-4">
            {loading ? (
              <div className="relative flex-1 dark:text-white text-black">
                <FaSpinner className="animate-spin transition-all" />
              </div>
            ) : (
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20]?.map((item, index) => (
                <div
                  key={index}
                  className="w-[200px] h-[30vh] dark:text-white text-black flex justify-center items-center bg-neutral-700"
                >
                  <img
                    src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2026/JANUARY/4/dpXR8BPh_7054d06f927f4be49f39c1921dd45692.jpg"
                    alt="dummy"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="w-full h-screen gap-4 flex-col justify-center items-center">
          <div className="w-full h-[60px] font-semibold text-xl flex justify-center items-center dark:text-white text-black">
            Shop by Looks - Recreate top fashion for your ownself sliders here
          </div>

          <div className="w-full h-[60px] font-semibold text-xl flex justify-center items-center dark:text-white text-black">
            Shop on sale - Event based sale sliders here
          </div>
        </div>
      </div>
    </div>
  );
}
