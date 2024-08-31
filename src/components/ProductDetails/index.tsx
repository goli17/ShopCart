"use client";
import Image from "next/image";
import { getProductById } from "@/Lib/SmartPhone/smartphone.actions";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";
import { useEffect } from "react";

export default function ProductDetails({ params }: any) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductById(1));
  }, [dispatch]);
  const { products } = useAppSelector(getAllProductSelector);
  console.log("->");
  return (
    <>
      {products?.map((product: any) => (
        <div className="flex flex-col w-full md:flex-row gap-8 p-5">
          {/* Section 1: Product Image */}
          <div className="flex-1 flex justify-center items-start">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Section 2: Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">Price: ${product.price}</p>
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
            {/* Add more details as needed */}
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
      ))}
    </>
  );
}
