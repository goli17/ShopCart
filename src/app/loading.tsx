"use client";
import BarLoader from "react-spinners/BarLoader"; // Correct import from react-spinners

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <BarLoader color="#111827" width={200} />
    </div>
  );
}
