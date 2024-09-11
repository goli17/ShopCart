"use client";
import PriceCard from "../Cards/PriceCard";
import ShoppingCart from "../Cards/ShoppingCard";
import { RootState } from "@/Lib/store";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { getAllProduct } from "@/Lib/SmartPhone/smartphone.actions";
import { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import { removeFromCart, updateQuantity } from "@/Lib/cart/cartslice";
import { TbMoodEmpty } from "react-icons/tb";
import { useRouter } from "next/navigation";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function CartComponent() {
  const router = useRouter();
  const { products = [] } = useAppSelector(getAllProductSelector); // Default to an empty array
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const [shuffledProducts, setShuffledProducts] = useState([...products]);

  useEffect(() => {
    const debouncedDispatch = setTimeout(() => {
      dispatch(getAllProduct());
    }, 300);
    return () => clearTimeout(debouncedDispatch);
  }, [dispatch]);

  useEffect(() => {
    setShuffledProducts(shuffleArray([...products]));

    const shuffleProducts = () => {
      setShuffledProducts(shuffleArray([...products]));
      setTimeout(shuffleProducts, 5000);
    };

    const shuffleTimeout = setTimeout(shuffleProducts, 30000);

    return () => clearTimeout(shuffleTimeout);
  }, [products]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <section className="bg-white w-full py-8 antialiased md:py-16">
        <div className="w-full flex flex-col gap-10 items-center justify-center px-1 2xl:px-0">
          <div className="flex w-full flex-col max-w-[1440px] md:flex-row items-center justify-between gap-5">
            <div className="flex flex-col gap-5 w-full md:w-3/4">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Shopping Cart
              </h2>
              {cartItems?.length === 0 ? (
                <div className="flex flex-col items-center justify-center w-full h-full py-20">
                  <TbMoodEmpty className="text-[200px] text-gray-200" />
                  <div className="text-center text-gray-500 mt-4">
                    No Products Selected
                  </div>
                  <button
                    className="flex w-full max-w-[400px] items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={() => router.push("/pages/products")}
                  >
                    View More Products
                  </button>
                </div>
              ) : (
                cartItems.map((product: any) => (
                  <div key={product.id} className="w-full">
                    <ShoppingCart
                      item={{
                        id: product?.id,
                        imageUrl: product?.image[0],
                        title: product?.title,
                        price: product?.price,
                        description: product?.description,
                        quantity: product.quantity,
                        onAddToFavorites: function (): void {
                          // Function not implemented.
                        },
                        onRemove: () => dispatch(removeFromCart(product.id)),
                        onUpdateQuantity: (newQuantity) =>
                          dispatch(
                            updateQuantity({
                              id: product.id,
                              quantity: newQuantity,
                            })
                          ),
                      }}
                    />
                  </div>
                ))
              )}
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
