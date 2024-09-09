"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icon.png";
import { useRouter, usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import LoginComponent from "../LoginComponent";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthAction = () => {
    if (status === "authenticated") {
      signOut();
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (pathname.includes("/login")) {
    return null;
  }

  const firstName = session?.user?.name?.split(" ")[0]; // Extract first name from session

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky text-white bg-gray-900">
        <div className="flex max-w-[1800px] flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={handleLinkClick} // Close menu on logo click
          >
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              ShopCart
            </span>
          </Link>
          {status === "authenticated" ? (
            <>
              <p className="flex items-center space-x-2">
                <button className="py-2 px-3 flex gap-2 items-center md:hidden">
                  {status === "authenticated" ? `Hi ${firstName}` : "Login"}
                  {status === "authenticated" && session?.user?.image && (
                    <Image
                      src={session?.user?.image}
                      alt="Profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                      onClick={toggleMenu}
                    />
                  )}
                </button>
              </p>
            </>
          ) : (
            <>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </>
          )}

          <div
            className={`${
              isMenuOpen
                ? "max-md:max-h-[420px] max-md:opacity-100"
                : "max-md:max-h-0 max-md:opacity-0"
            } overflow-hidden w-full md:w-auto transition-all duration-300 ease-in-out md:transition-none md:duration-0 md:ease-in-out`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col gap-10 p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white bg-gray-900">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:bg-gray-700"
                  aria-current="page"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/phones"
                  className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:bg-gray-700"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  SmartPhones
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/groceries"
                  className="block py-2 px-3 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 hover:bg-gray-700 md:hover:bg-transparent"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  Daily Products
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/cart"
                  className="block py-2 px-3 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 hover:bg-gray-700 md:hover:bg-transparent"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  {}
                  Cart
                </Link>
              </li>
              <li className="flex items-center">
                {isMenuOpen ? (
                  <div
                    onClick={() => {
                      handleAuthAction();
                      handleLinkClick(); // Close menu on auth action
                    }}
                    className="w-full py-2 px-3 cursor-pointer block text-white rounded md:border-0 md:hover:text-blue-700 md:p-0 hover:bg-gray-700 md:hover:bg-transparent"
                  >
                    {status === "authenticated" ? `Logout` : "Login"}
                  </div>
                ) : (
                  <>
                    {status === "authenticated" && session?.user?.image && (
                      <Image
                        src={session.user.image}
                        alt="Profile"
                        width={30}
                        height={30}
                        className="rounded-full pr-1"
                      />
                    )}
                    <button
                      onClick={() => {
                        handleAuthAction();
                        handleLinkClick(); // Close menu on auth action
                      }}
                      className=""
                    >
                      {status === "authenticated" ? `Hi ${firstName}` : "Login"}
                    </button>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
    </>
  );
}
