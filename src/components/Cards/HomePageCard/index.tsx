"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface HomePageCardProps {
  image: any;
  title: any;
  price: any;
  brand: any;
  category: any;
  id: any;
  description: string;
}

export default function HomePageCard({
  image,
  title,
  description,
  price,
  brand,
  category,
  id,
}: HomePageCardProps) {
  const [isLoading, setIsLoading] = useState(true); // State to manage image loading
  const router = useRouter();

  return (
    <div className="flex flex-col w-full justify-between bg-white rounded-lg my-6">
      <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center relative">
        {/* Loader Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        )}

        {/* Image */}
        <Image
          className={`w-full h-full object-contain `}
          src={image}
          alt={title}
          width={1200}
          height={200}
          onLoad={() => setIsLoading(false)} // Hide spinner when loading is complete
        />
      </div>

      <div className="flex items-center flex-col">
        <div className="p-6 text-center">
          <h4 className="mb-1 text-xl font-semibold text-slate-800">{title}</h4>
          <p className="text-sm font-semibold text-slate-500 uppercase">
            {brand}
          </p>
          <p className="text-base text-slate-600 mt-4 font-light">
            {description}
          </p>
        </div>

        <div className="flex justify-center p-6 pt-2 gap-7">
          <button
            className="min-w-32 rounded-md bg-slate-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => router.push(`/pages/product/${id}`)}
          >
            More details
          </button>
        </div>
      </div>
    </div>
  );
}
