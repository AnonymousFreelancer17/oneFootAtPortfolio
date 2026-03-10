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

const validRootCategories = ["men", "women", "kids", "beauty", "home", "genz"];

interface Product {
  productCode: string;
  brand: string;
  title: string;
  rating: number;
  ratingCount: number;
  SRP: string;
  MRP: string;
  discount: number;
  images: string[];
}

const Page = () => {
  const params = useParams();

  const rootCategory = params?.root as string;
  const group = params?.groups as string;
  const category = params?.category as string;
  const productCode = params?.productCode as string;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (!productCode) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `http://localhost:8000/scrapper/myntra/product/${productCode}`,
        );

        setProduct(response.data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productCode]);

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
    <div className="w-full min-h-screen dark:text-white p-6">
      {/* Breadcrumb */}
      <div className="w-full text-lg font-medium flex gap-x-2 mb-6">
        <Link href="/">Home</Link> /
        <Link href={`/${rootCategory}`}>
          {replaceHyphens(safeCapitalize(rootCategory))}
        </Link>
        /
        <Link href={`/${rootCategory}/${group}`}>
          {replaceHyphens(safeCapitalize(group))}
        </Link>
        /
        <Link href={`/${rootCategory}/${group}/${category}`}>
          {replaceHyphens(safeCapitalize(category))}
        </Link>
      </div>

      {loading ? (
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : product ? (
        <div className="w-full flex flex-col lg:flex-row gap-10">
          {/* LEFT: Images */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                    selectedImage === index
                      ? "border-black dark:border-white"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="w-[400px] h-[500px] flex items-center justify-center bg-gray-100 rounded">
              <img
                src={product.images[selectedImage]}
                className="w-full h-full object-contain"
                alt={product.title}
              />
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col gap-4 max-w-[500px]">
            <h2 className="text-2xl font-semibold">{product.brand}</h2>

            <p className="text-gray-500">{product.title}</p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="bg-green-600 text-white px-2 py-1 text-sm rounded">
                {product.rating} ★
              </span>
              <span className="text-gray-500 text-sm">
                ({product.ratingCount} Ratings)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 text-xl font-semibold">
              <span>{product.SRP}</span>

              <span className="line-through text-gray-400 text-lg">
                {product.MRP}
              </span>

              <span className="text-red-500 text-lg">
                {product.discount}% OFF
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600">
                Add to Bag
              </button>

              <button className="border px-6 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                Wishlist
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-6 text-sm text-gray-500">
              <p>Product Code: {product.productCode}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Page;