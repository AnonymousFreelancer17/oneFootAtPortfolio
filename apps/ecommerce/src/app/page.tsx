"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use http instead of https for localhost
        const response = await axios.get(
          "http://localhost:8000/api/blinkit-products"
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
    <div className="w-screen h-auto flex justify-center items-center">
      {data.map((d, index) => {
        return (
          <div
            key={index}
            className="w-10/12 flex justify-center items-center"
          >
            <div>
              <h2 className="text-black font-bold text-xl">
                {d.category_name}
              </h2>
            </div>

            <div className="w-full flex justify-center items-center gap-2">
              {d.subCategories.map((item: any, idx: any) => {
                return (
                  <div className="flex justify-center items-center bg-white shadow-lg" key={idx}>
                    <h2 className="text-lg font-medium text-gray-600">
                      {item.sub_category_name}
                    </h2>

                    <div className="">
                      {item.products?.map((products: any, id: any) => {
                        return <div className="bg-white shadow-lg" key={id}>
                          <h2 className="font-medium text-blue-500">
                            {products.name}
                          </h2>
                          <img src={products.image} alt="" />
                        </div>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
