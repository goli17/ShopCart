import ProductCard from "@/components/Cards/ProductCard";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProduct } from "@/Lib/SmartPhone/smartphone.actions";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { useEffect } from "react";

export default function SaleComponents() {
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
    <div className="flex w-full flex-col gap-5 ">
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
  );
}
