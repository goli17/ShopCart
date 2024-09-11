"use client";

import CheckIcon from "@/assets/check";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  const handleSuccessClick = () => {
    router.push("/pages/products");
  };

  return (
    <React.Fragment>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="space-y-8">
            <div>
              <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckIcon />
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                Payment Successful
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                Thank you for your purchase!
              </p>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="border-solid border-2 border-black w-50 p-2 rounded"
                onClick={handleSuccessClick}
              >
                Continue to Shoping
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
