"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Index() {
  const [data, setData] = useState<any[]>([]);
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

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center text-xl font-semibold">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="w-screen h-screen flex justify-center items-center text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="w-screen min-h-screen flex flex-wrap gap-6 p-10 justify-center bg-gray-100 dark:bg-black">
      <div className="w-10/12 flex flex-col justify-center items-center gap-y-4">
        <div className="w-full h-[30vh]">
          <div className="">
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

        <div className="flex flex-wrap justify-center items-center gap-4">
          {data?.map((item, index) => (
            <Link
              href={item.hrefs[0] || ""}
              key={index}
              className="w-56 bg-white dark:bg-gray-700 shadow-md rounded-2xl p-4 flex flex-col items-center"
            >
              <img
                src={item.images[1] || item.images[0]}
                alt={item.name || "product"}
                className="w-full h-56 object-cover rounded-lg"
              />

              <div className="mt-3 text-center">
                <h3 className="font-semibold">
                  {item.brand || "Unknown Brand"}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
