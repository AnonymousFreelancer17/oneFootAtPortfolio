"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Index() {
  const [data, setData] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use http instead of https for localhost
        const response = await axios.get(
          "http://localhost:8000/scrapper/limeroad"
        );

        console.log(response.data.data);

        setData(response.data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    useEffect(() => {
    const fetchData = async () => {
      try {
        // Use http instead of https for localhost
        const response = await axios.get(
          "http://localhost:8000/scrapper/limeroad/categories"
        );
        setCategory(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);




  return (
    <div className="w-screen min-h-screen flex flex-wrap gap-6 p-10 justify-center bg-gray-100 dark:bg-black">
      <div className="lg:w-11/12 md:w-11/12 sm:w-full flex flex-col">
        <div className="w-full md:h-[80vh] sm:h-auto flex justify-center items-center bg-red-400">
          <div className="text-xl">
            Why only Stop at <div>Fashion ?</div>
          </div>

          <div>
            <div>Explore</div>
            <div>
              <div>The</div>
              <div>Stories ,Culture ,people, World!</div>
            </div>
          </div>
        </div>

        <div className="w-full h-screen bg-green-400 gap-4 flex-col justify-center items-center">
          <div className="w-full h-[60px] font-semibold text-xl flex justify-center items-center">
            Stories
          </div>
          <div className="flex-1 flex-grow-1 flex flex-wrap justify-center items-center gap-4 bg-purple-400">
            {loading ? (
              <div className="relative flex-1">
                <FaSpinner className="animate-spin transition-all" />
              </div>
            ) : (
              data?.map((item, index) => (
                <Link
                  href={item.hrefs[0]}
                  key={index}
                  className="w-56 bg-white dark:bg-gray-700 shadow-md rounded-2xl p-4 flex flex-col items-center"
                >
                  <img
                    src={item.images[0]}
                    alt={"product"}
                    className="w-full h-56 object-cover rounded-lg"
                  />

                  <div className="mt-3 text-center">
                    <h3 className="font-semibold">{"Unknown Brand"}</h3>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
