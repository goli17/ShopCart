"use client";
import Image from "next/image";
import "./ProductDetails.scss";
import {
  getProductById,
  getAllProduct,
  getGroceries,
  getSmartPhone,
} from "@/Lib/SmartPhone/smartphone.actions";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import { addToCart, removeFromCart } from "@/Lib/cart/cartslice";
import { getCartItemsSelector } from "@/Lib/cart/cartSelector";
import { getSession } from "next-auth/react";
import LoginComponent from "../LoginComponent";
import { getAllProductSelector } from "@/Lib/SmartPhone/smartphone.selector";

export default function ProductDetails({ params }: any) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { products = [] } = useAppSelector(getAllProductSelector);
  const cartItems = useAppSelector(getCartItemsSelector);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await dispatch(
          getProductById(params.params.id)
        ).unwrap();
        setProduct(fetchedProduct);
      } catch (error) {
        setError("Failed to fetch product details.");
        console.error(error);
      }
    };

    fetchProduct();
  }, [dispatch, params.params.id]);

  useEffect(() => {
    if (Number(params?.params?.id) < 16) {
      dispatch(getAllProduct());
    } else if (
      Number(params?.params?.id) > 16 &&
      Number(params?.params?.id) < 120
    ) {
      dispatch(getGroceries());
    } else if (Number(params?.params?.id) > 120) {
      dispatch(getSmartPhone());
    }
  }, [dispatch, params?.params?.id]);

  const isInCart = cartItems.some((item: any) => item.id === product?.id);

  const handleAddToCart = async () => {
    setLoading(true);

    const session = await getSession();

    if (!session) {
      setIsModalOpen(true);
      setLoading(false);
      return;
    }

    setTimeout(() => {
      if (product) {
        const cartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product?.images,
          description: product?.description,
          quantity: 1,
        };

        if (isInCart) {
          dispatch(removeFromCart(product.id));
        } else {
          dispatch(addToCart(cartItem));
        }
      }
      setLoading(false);
    }, 1000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledProducts = shuffleArray([...products]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className="flex flex-col w-full gap-8 p-5 max-md:p-0">
      {/* Section 1: Product Image */}
      <div className="flex flex-col gap-8 md:flex-row p-5">
        <div className="flex-1 flex flex-col gap-5 justify-center items-start">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain border-2"
          />
          <p className="w-full flex items-center gap-2">
            {product.images.slice(1, 3).map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={product.title}
                width={150}
                height={150}
                className="object-contain border-2 w-[200px] h-[200px] overflow-hidden"
              />
            ))}
          </p>
        </div>

        {/* Section 2: Product Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-4">{product.title}</h1>
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
          <button
            className={`mt-4 w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${
              loading
                ? "bg-blue-700"
                : isInCart
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-700 hover:bg-blue-800"
            }`}
            onClick={handleAddToCart}
            disabled={loading}
          >
            {loading ? (
              <div className="loader"></div>
            ) : isInCart ? (
              "Remove from Cart"
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>

        {/* Section 3: Product Reviews */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          {product.reviews.length > 0 ? (
            product.reviews.map((review: any, index: number) => (
              <div key={index} className="mb-4 p-4 border rounded-md shadow-sm">
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
      <div className="text-[25px] w-full m-auto flex flex-col gap-1">
        <div className="w-full flex flex-wrap py-[100px] bg-gray-900 px-1">
          <h1 className="text-[40px] text-white font-bold px-4">
            Similar Products
          </h1>
          <hr className="text-white p-2 h-2 w-full" />
          <div className="w-full flex pb-5 flex-row flex-wrap max-md:grid max-md:grid-cols-2 items-center justify-center gap-4">
            {shuffledProducts &&
              shuffledProducts
                ?.slice(0, 4)
                .map((product: any) => (
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
                ))}
          </div>
        </div>
      </div>
      <div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 m-2 relative flex items-center justify-center max-w-[500px] max-h-[400px] w-full h-full">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <LoginComponent />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
