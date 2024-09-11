"use client";
import { useAppSelector } from "@/Lib/hooks";
import { getCartAmountSelector } from "@/Lib/cart/cartSelector"; // Adjust the import path as needed
import { useEffect, useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useRouter } from "next/navigation";

const PaymentGateway = () => {
  const [Razorpay, isLoaded] = useRazorpay();
  const amount = useAppSelector(getCartAmountSelector); // Get amount from the store
  const router = useRouter();

  const handlePayment = useCallback(() => {
    if (!Razorpay || !isLoaded || !amount) return;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      amount: String(amount * 100),
      currency: "INR",
      name: "ShopCart",
      description: "Test Transaction ",
      order_id: "",
      handler: function (response: any) {
        console.log(response, "payment response");
        router.push("/success");
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response: any) {
      console.error(response.error);
      alert(`Error: ${response.error.description}`);
    });

    rzp1.open();
  }, [Razorpay, isLoaded, amount, router]);

  useEffect(() => {
    handlePayment(); // Trigger payment handling directly when loaded
  }, [handlePayment]);

  return null;
};

export default PaymentGateway;
