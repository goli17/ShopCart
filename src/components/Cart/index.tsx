"use client";
import PriceCard from "../Cards/PriceCard";
import ShoppingCart from "../Cards/ShoppingCart";
import { RootState } from "@/Lib/store";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import {
  getAllProduct,
  getGroceries,
  getSmartPhone,
  getProductById,
} from "@/Lib/SmartPhone/smartphone.actions";
import { useEffect } from "react";

export default function CartComponent() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const debouncedDispatch = setTimeout(() => {
      {
        dispatch(getProductById(6));
      }
    }, 300);
    return () => clearTimeout(debouncedDispatch);
  }, [dispatch]);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  console.log(totalPrice * 83.98);

  return (
    <>
      <section className="bg-white w-full py-8 antialiased md:py-16">
        <div className="mx-auto w-full max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
            Shopping Cart
          </h2>
          <div className="flex w-full  max-md:flex-col items-center max-md:justify-center justify-between gap-5">
            <div className="flex flex-col  gap-5 w-full ">
              {cartItems?.map((product: any) => (
                <div key={product.id} className="">
                  <ShoppingCart
                    item={{
                      imageUrl: product?.image[0],
                      title: product?.title,
                      price: product?.price,
                      quantity: 1,
                      onAddToFavorites: function (): void {
                        throw new Error("Function not implemented.");
                      },
                      onRemove: function (): void {
                        throw new Error("Function not implemented.");
                      },
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="w-full">
              <PriceCard item={totalPrice * 83.98} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
