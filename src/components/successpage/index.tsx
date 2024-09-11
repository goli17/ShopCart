"use client";

import CheckIcon from "@/assets/check";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

export default function SucessPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/orders");
    }, 5000);
  }, []);

  const handleSuccessCLick = () => {
    router.push("/orders");
  };
  return (
    <React.Fragment>
      <div className=" w-full space-y-8">
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

        <div className="mx-auto rounded-full  flex items-center justify-center">
          <button
            className=" border-solid border-2 border-black w-[50] p-2 rounded"
            onClick={handleSuccessCLick}
          >
            Continue to Order Detail
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
