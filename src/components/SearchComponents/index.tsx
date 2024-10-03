"use client";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import ProductCard from "@/components/Cards/ProductCard";
import { useAppSelector } from "@/Lib/hooks";
import { selectSearchResults } from "@/Lib/Product/ProductSelector";
import SaleComponents from "../Home/SaleComponents";
import { TbMoodEmpty } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function SearchComponents() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const router = useRouter();
  const products = useAppSelector(selectSearchResults);
  console.log(products);

  return (
    <div className="flex items-center  flex-col my-10 max-md:my-5 gap-10">
      <h1 className="text-[20px] font-bold my-10 max-md:my-5">
        Search Results for "{query}"
      </h1>
      <div className="max-md:grid max-sm:grid-cols-1 max-md:grid-cols-2 border-2   flex flex-wrap items-center  justify-center gap-2">
        {products && products.length > 0 ? (
          products.map((product: any) => (
            <ProductCard
              key={product.id}
              image={product.images[0]}
              title={product.title}
              description={product.description}
              price={product.price}
              brand={product.brand}
              id={product.id}
              category={undefined}
            />
          ))
        ) : (
          <div className="flex flex-col gap-2 items-center justify-center w-full  ">
            <TbMoodEmpty className="text-[200px] text-gray-200" />
            <div className="text-center text-gray-500 mt-4">
              No Products Found
            </div>
            <button
              className="min-w-32 rounded-md bg-slate-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => router.push("/pages/products")}
            >
              View More Products
            </button>
          </div>
        )}
      </div>

      <div className="text-[25px] w-full m-auto flex flex-col gap-1">
        <div className="w-full flex flex-wrap py-[100px] bg-gray-900 px-1">
          <h1 className="text-[40px]  text-white font-bold px-4 max-md:text-center">
            You May Also Like
          </h1>
          <hr className="text-white p-2 h-2 w-full"></hr>
          <div className=" flex items-center justify-center gap-4 w-full">
            <SaleComponents />
          </div>
        </div>
      </div>
    </div>
  );
}
