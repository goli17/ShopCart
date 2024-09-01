"use client";
import { getGroceries } from "@/Lib/SmartPhone/smartphone.actions";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { useEffect } from "react";
import ProductCard from "../Cards/ProductCard";
export default function GroceriesComponent() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGroceries());
  }, [dispatch]);

  const { products } = useAppSelector(getAllProductSelector);
  return (
    <div className="flex flex-wrap items-center justify-center p-2 gap-2 max-sm:grid max-sm:grid-cols-2">
      {products &&
        products?.map((product: any) => (
          <div key={product.id} className="flex flex-wrap">
            <ProductCard
              image={product.images[0]}
              title={product.title}
              description={product.description}
              price={product.price}
              brand={product.brand}
              id={product.id}
            />
          </div>
        ))}
    </div>
  );
}
