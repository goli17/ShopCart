"use client";
import { getSmartPhone } from "@/Lib/SmartPhone/smartphone.actions";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";

export default function Phone() {
  const dispatch = useAppDispatch();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "nor">("nor"); // Added "nor" for relevance

  useEffect(() => {
    dispatch(getSmartPhone());
  }, [dispatch]);

  const { products } = useAppSelector(getAllProductSelector);

  // Function to sort products based on the selected order
  const sortedProducts = products?.slice().sort((a: any, b: any) => {
    if (sortOrder === "asc") {
      return a.price - b.price; // Low to High
    } else if (sortOrder === "desc") {
      return b.price - a.price; // High to Low
    } else {
      return 0; // No sorting for relevance (original order)
    }
  });

  return (
    <div className="">
      <div className="mx-10 my-4 mb-4 flex items-center justify-end">
        <label htmlFor="sort" className="mr-2">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value as "asc" | "desc" | "nor")
          }
          className="p-2 border border-gray-300 rounded outline-none focus:ring-0"
        >
          <option value="nor">Price: Relevance</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-wrap items-center justify-center p-2 gap-2 max-sm:grid max-sm:grid-cols-2">
        {sortedProducts &&
          sortedProducts.slice(0, 15).map((product: any) => (
            <div key={product.id} className="flex flex-wrap">
              <ProductCard
                image={product.images[0]}
                title={product.title}
                description={product.description}
                price={product.price}
                brand={product.brand}
                id={product.id}
                category={undefined}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
