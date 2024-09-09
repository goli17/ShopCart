"use client";
import Image from "next/image";
import Poster from "@/assets/hero-slider-2-min.jpg";
import Poster2 from "@/assets/hero-slider-3-min.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAllProduct } from "@/Lib/SmartPhone/smartphone.actions";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { useEffect } from "react";
import Logo from "@/assets/icon.png";
import ProductCard from "../Cards/ProductCard";

export default function HomePage(params: any) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const { products = [] } = useAppSelector(getAllProductSelector);

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledProducts = shuffleArray([...products]);
  return (
    <div className="flex flex-col gap-1 pb-3 relative">
      <div className="relative w-full">
        <Image
          src={Poster}
          alt="Poster Image"
          className="w-full max-h-[900px]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="px-4">
            <span className="text-6xl max-md:text-[20px] max-md:leading-1 font-bold mb-4 max-md:mb-0 flex items-center">
              Sell products the easy way with ShopCart
              <Image src={Logo} alt={".."} height={50} width={50} />
            </span>
            <p className="text-2xl max-md:text-sm mb-8 max-md:mb-2 max-md:leading-0">
              Explore the best way to showcase your products.
            </p>
            <Link href="/pages/products">
              <button
                className="inline-block font-bold max-md:font-[400] bg-gray-900 text-white hover:text-blue-500 rounded-lg max-md:py-2 max-md:px-4 py-4 px-8 transition"
                onClick={() => router.push("/pages/products")}
              >
                Explore now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-[25px] w-full  m-auto  flex flex-col gap-2">
        <div className="w-full flex flex-wrap py-[100px] bg-gray-900">
          <h1 className="text-[40px] text-white font-bold px-4">Sale</h1>
          <hr className="text-white p-2 h-2 w-full"></hr>
          <div className=" w-full flex pb-5 flex-row flex-wrap  max-md:grid max-md:grid-cols-2 items-center justify-center gap-4">
            {shuffledProducts.length > 0 ? (
              shuffledProducts
                .slice(0, 4)
                ?.map((product: any) => (
                  <ProductCard
                    key={product.id}
                    image={product.images[0]}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    brand={product.brand}
                    id={product.id}
                    category={product?.category}
                  />
                ))
            ) : (
              <p className="text-white">Loading...</p>
            )}
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          src={Poster2}
          alt="Poster Image"
          className="w-full m-auto max-h-[900px]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="px-4">
            <p className="text-6xl max-md:text-[20px] max-md:leading-1 font-bold mb-4 max-w-[1300px] max-md:mb-0 flex  items-center">
              Discover unbeatable deals and endless choices{" "}
            </p>
            <p className="text-2xl max-md:text-sm mb-8 max-md:mb-2 max-md:leading-0">
              just a click—shop smart, shop easy!
            </p>
            <Link href="/pages/products">
              <button
                className="inline-block font-bold max-md:font-[400] bg-gray-900 text-white hover:text-blue-500 rounded-lg max-md:py-2 max-md:px-4 py-4 px-8 transition"
                onClick={() => router.push("/pages/products")}
              >
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
