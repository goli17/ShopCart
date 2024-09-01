"use client";
import Image from "next/image";
import {
  getAllProduct,
  getSmartPhone,
} from "@/Lib/SmartPhone/smartphone.actions";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { useEffect } from "react";

export default function ProductDetails({ params }: any) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const debouncedDispatch = setTimeout(() => {
      if (params.params.id < 30) {
        dispatch(getAllProduct());
      } else {
        dispatch(getSmartPhone());
      }
    }, 300);
    return () => clearTimeout(debouncedDispatch);
  }, [dispatch, params.params.id]);

  const { products } = useAppSelector(getAllProductSelector);
  const product = products?.find(
    (product: any) => product.id === Number(params.params.id)
  );

  return (
    <>
      {product ? (
        <div className="flex flex-col w-full md:flex-row gap-8 p-5">
          {/* Section 1: Product Image */}
          <div className="flex-1 flex flex-col gap-5 justify-center items-start">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain border-2"
            />
            <p className="w-full  flex items-center gap-2 ">
              {product.images
                .slice(1, 3)
                .map((image: string, index: number) => (
                  <Image
                    key={index}
                    src={image}
                    alt={product.title}
                    width={150}
                    height={150} // Fixed height for consistency
                    className="object-cover border-2 w-[200px] h-[200px]  overflow-hidden"
                  />
                ))}
            </p>
          </div>

          {/* Section 2: Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-4">
              {product.category.toUpperCase()}
            </p>

            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold mb-4">
                Price: ₹ {(product.price * 83.89).toFixed(2)}
              </p>
              <p className="text-md p-1 text-white text-center font-bold bg-green-500 mb-4">
                {product.discountPercentage}% OFF
              </p>
            </div>

            <p className="text-md text-gray-500">SKU: {product.sku}</p>
            <p className="text-md text-gray-500">Brand: {product.brand}</p>
            <p className="text-md text-gray-500">
              Availability: {product.availabilityStatus}
            </p>
            <p className="text-md text-gray-500">
              Warranty: {product.warrantyInformation}
            </p>
            <p className="text-md text-gray-500">
              Shipping: {product.shippingInformation}
            </p>
            <p className="text-md text-gray-500 flex items-center">
              Rating: {product.rating.toFixed(0)}+
            </p>
          </div>

          {/* Section 3: Product Reviews */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
            {product.reviews.length > 0 ? (
              product.reviews.map((review: any, index: number) => (
                <div
                  key={index}
                  className="mb-4 p-4 border rounded-md shadow-sm"
                >
                  <p className="text-lg font-semibold">
                    {review.reviewerName} - {review.rating}⭐
                  </p>
                  <p className="text-md text-gray-600">{review.comment}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </>
  );
}
