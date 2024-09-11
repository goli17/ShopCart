"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ShoppingCartProps {
  item: {
    id: any;
    imageUrl: string;
    title: string;
    description: any;
    price: number;
    quantity: number;
    onAddToFavorites: () => void;
    onRemove: () => void;
    onUpdateQuantity: (quantity: number) => void; // Callback to update quantity
  };
}

export default function ShoppingCart({ item }: ShoppingCartProps) {
  const {
    id,
    imageUrl,
    description,
    title,
    price,
    quantity,
    onAddToFavorites,
    onRemove,
    onUpdateQuantity,
  } = item;

  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleIncrement = () => {
    setItemQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onUpdateQuantity(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setItemQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        onUpdateQuantity(newQuantity);
        return newQuantity;
      }
      return prevQuantity;
    });
  };
  const totalPrice = (price * itemQuantity * 83.98).toFixed(2);
  const router = useRouter();
  return (
    <div className="w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white md:p-6">
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <Link href={`/pages/product/${id}`} className="shrink-0 md:order-1">
              <Image
                className="h-20 w-20 object-contain"
                src={imageUrl}
                alt="Product image"
                width={200}
                height={200}
              />
            </Link>

            <label htmlFor="counter-input" className="sr-only">
              Choose quantity:
            </label>
            <div className="flex items-center justify-between md:order-3 md:justify-end">
              <div className="flex items-center">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100"
                  onClick={handleDecrement}
                >
                  <svg
                    className="h-2.5 w-2.5 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter
                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-black focus:outline-none focus:ring-0"
                  value={itemQuantity}
                  readOnly
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                  onClick={handleIncrement}
                >
                  <svg
                    className="h-2.5 w-2.5 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-black">
                  ₹ {Number(totalPrice).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md cursor-pointer">
              <p className="text-base font-medium text-black hover:underline">
                {title}
              </p>
              <p className="text-gray-400 line-clamp-2">hello{description}</p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-gray-500"
                  onClick={onAddToFavorites}
                >
                  <svg
                    className="me-1.5 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Add to Favorites
                </button>

                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                  onClick={onRemove}
                >
                  <svg
                    className="me-1.5 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
