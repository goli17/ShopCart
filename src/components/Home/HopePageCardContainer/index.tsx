"use client";
import HomePageCard from "@/components/Cards/HomePageCard";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getProductById } from "@/Lib/SmartPhone/smartphone.actions";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { useEffect, useState } from "react";

export default function HopePageCardContainer() {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<any>(null);

  // Function to generate a random number between 15 and 100
  const generateRandomId = () => {
    return Math.floor(Math.random() * (100 - 15 + 1)) + 30;
  };

  useEffect(() => {
    const debouncedDispatch = setTimeout(() => {
      const randomId = generateRandomId();
      const fetchProduct = async () => {
        try {
          const fetchedProduct = await dispatch(
            getProductById(randomId)
          ).unwrap();
          setProduct(fetchedProduct);
        } catch (error) {
          console.error(error);
        }
      };

      fetchProduct();
    }, 300);
    return () => clearTimeout(debouncedDispatch);
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center">
      <HomePageCard
        key={product?.id}
        image={product?.thumbnail}
        title={product?.title}
        description={product?.description}
        price={product?.price}
        brand={product?.brand}
        id={product?.id}
        category={product?.category}
      />
    </div>
  );
}
