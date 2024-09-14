"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./ProductCard.scss";

interface ProductCardProps {
  image: any;
  title: any;
  price: any;
  brand: any;
  category: any;
  id: any;
  description: string;
}

export default function ProductCard({
  image,
  title,
  description,
  price,
  brand,
  category,
  id,
}: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(true); // State to manage image loading
  const router = useRouter();

  return (
    <div className="max-w-sm flex flex-col justify-between gap-2 bg-white rounded-lg shadow-xl dark:border-gray-300 h-[450px]">
      <Link href={`/pages/product/${id}`} className="">
        <div className="relative flex items-center justify-center">
          {/* Loader Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          )}

          {/* Image */}
          <Image
            className={`p-[1.25rem] h-[200px] w-[200px] object-fit items-center object-contain`}
            src={image}
            alt={title}
            width={400}
            height={300}
            onLoadingComplete={() => setIsLoading(false)} // Hide spinner when loading is complete
          />
        </div>
      </Link>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="flex text-[20px] h-[30px] line-clamp-1">{title}</h3>
        <p className="text-[15px] font-normal text-gray-700 dark:text-gray-900">
          {category?.toUpperCase()}
        </p>
        <p className="text-[15px] font-normal text-gray-700 dark:text-gray-400 h-[47px] overflow-hidden text-ellipsis line-clamp-2">
          {description}
        </p>

        <div className="mt-3 flex items-center justify-between max-md:flex-col max-md:items-center max-md:gap-2">
          <div>
            <p className="text-[18px] font-bold">
              Price: ₹{Number((price * 83.89).toFixed(0)).toLocaleString()}
            </p>
          </div>
          <div>
            <button
              className="min-w-32 rounded-md bg-slate-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => router.push(`/pages/product/${id}`)}
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
