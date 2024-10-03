"use client";
import Image from "next/image";
import Poster from "@/assets/hero-slider-2-min.jpg";
import Poster2 from "@/assets/hero-slider-3-min.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HomePageCardContainer from "./HopePageCardContainer";
import SaleComponents from "./SaleComponents";
import IconsComponents from "./IconsComponents";

export default function HomePage(params: any) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-10 max-md:gap-5 pb-2 relative">
      <div className="relative w-full shadow-xl">
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
      <div>
        <SaleComponents />
      </div>
      <div className="flex items-center justify-center">
        <HomePageCardContainer />
      </div>
      <div className="flex items-center justify-center">
        <IconsComponents />
      </div>
    </div>
  );
}
