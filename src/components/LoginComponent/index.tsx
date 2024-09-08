"use client";
import React from "react";
import Logo from "@/assets/icon.png";
import GoogleLogo from "@/assets/googleIcon.png";
import { useRouter } from "next/navigation";

import Image from "next/image";
import {
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";

const LoginComponent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="bg-white p-8 rounded-lg w-full  text-center">
        <h1 className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-900 mb-4">
          Shopcart
          <Image src={Logo} alt="Shopcart Logo" height={40} width={40} />
        </h1>

        <p className="text-gray-600 mb-8">Login to continue</p>

        <button
          onClick={() => {
            signIn("google");
          }}
          className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-bold py-2 px-4 rounded flex items-center justify-center  gap-2 focus:outline-none focus:shadow-outline"
        >
          <Image src={GoogleLogo} alt="Shopcart Logo" height={20} width={20} />
          Login with Google
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or connect with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-red-500 hover:text-red-700">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
