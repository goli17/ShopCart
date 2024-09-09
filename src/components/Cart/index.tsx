"use client";
import PriceCard from "../Cards/PriceCard";
import ShoppingCart from "../Cards/ShoppingCart";
import { RootState } from "@/Lib/store";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { getAllProduct } from "@/Lib/SmartPhone/smartphone.actions";
import { useEffect } from "react";
import ProductCard from "../Cards/ProductCard";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function CartComponent() {
  const { products = [] } = useAppSelector(getAllProductSelector); // Default to an empty array
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const debouncedDispatch = setTimeout(() => {
      dispatch(getAllProduct());
    }, 300);
    return () => clearTimeout(debouncedDispatch);
  }, [dispatch]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const shuffledProducts = shuffleArray([...products]);

  return (
    <>
      <section className="bg-white w-full py-8 antialiased md:py-16">
        <div className="w-full flex flex-col gap-10 items-center justify-center px-1 2xl:px-0">
          <div className="flex w-full flex-col max-w-[1440px] md:flex-row items-center justify-between gap-5">
            <div className="flex flex-col gap-5 w-full md:w-3/4">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Shopping Cart
              </h2>
              {cartItems?.map((product: any) => (
                <div key={product.id} className="w-full">
                  <ShoppingCart
                    item={{
                      imageUrl: product?.image[0],
                      title: product?.title,
                      price: product?.price,
                      discription: product?.discription,
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
            <div className="w-full md:w-1/4 md:flex md:justify-end">
              <PriceCard item={totalPrice * 83.98} />
            </div>
          </div>
          <div className="text-[25px] w-full m-auto flex flex-col gap-1">
            <div className="w-full flex flex-wrap py-[100px] bg-gray-900 px-1">
              <h1 className="text-[40px] text-white font-bold px-4">
                Similar Products
              </h1>
              <hr className="text-white p-2 h-2 w-full"></hr>
              <div className="w-full flex pb-5 flex-row flex-wrap max-md:grid max-md:grid-cols-2 items-center justify-center gap-4">
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
        </div>
      </section>
    </>
  );
}
