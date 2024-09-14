// IconList.js
import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsWatch } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";
import { IoIosLaptop } from "react-icons/io";
import Link from "next/link";

const IconList = () => {
  return (
    <div className="icon-list flex space-x-4">
      <div className="icon-item flex flex-col items-center text-center">
        <div className="bg-gray-200 rounded-full h-20 w-20 flex items-center justify-center">
          <Link href={"/pages/phones"}>
            <IoIosPhonePortrait className="text-4xl" />
          </Link>
        </div>
        <p className="mt-2">Phone</p>
      </div>
      <div className="icon-item flex flex-col items-center text-center">
        <div className="bg-gray-200 rounded-full h-20 w-20 flex items-center justify-center">
          <Link href={"/pages/groceries"}>
            <GiFruitBowl className="text-4xl" />
          </Link>
        </div>
        <p className="mt-2">Fruits</p>
      </div>
      <div className="icon-item flex flex-col items-center text-center">
        <div className="bg-gray-200 rounded-full h-20 w-20 flex items-center justify-center">
          <BsWatch className="text-4xl" />
        </div>
        <p className="mt-2">Watches</p>
      </div>
      <div className="icon-item flex flex-col items-center text-center">
        <div className="bg-gray-200 rounded-full h-20 w-20 flex items-center justify-center">
          <IoIosLaptop className="text-4xl" />
        </div>
        <p className="mt-2">Laptops</p>
      </div>
    </div>
  );
};

export default IconList;
