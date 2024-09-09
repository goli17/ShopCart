"use client";
import Image from "next/image";
import Link from "next/link";
import "./ProductCard.scss";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <div className="max-w-sm flex flex-col justify-between gap-2 bg-white rounded-lg shadow-xl dark:border-gray-300 h-[450px]">
      <Link href="#" className="">
        <div className="flex items-center justify-center">
          <Image
            className="p-[1.25rem] h-[200px] w-[200px] object-fit items-center object-contain"
            src={image}
            alt={title}
            width={400}
            height={300}
          />
        </div>
      </Link>
      <div className="p-5 flex flex-col items-start gap-2 flex-1">
        <h3 className="flex text-[20px] h-[30px] line-clamp-1"> {title}</h3>
        <p className="text-[15px] font-normal text-gray-700 dark:text-gray-900">
          {category?.toUpperCase()}
        </p>
        <p className="text-[15px] font-normal text-gray-700 dark:text-gray-400 h-[47px] overflow-hidden text-ellipsis line-clamp-2">
          {description}
        </p>
        <p className="text-[18px] font-bold">
          Price: ₹{Number((price * 83.89).toFixed(0)).toLocaleString()}
        </p>
        <div className="mt-auto">
          <button
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => router.push(`/pages/product/${id}`)}
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}
