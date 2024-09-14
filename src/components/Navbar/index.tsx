"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icon.png";
import { useRouter, usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import LoginComponent from "../LoginComponent";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "@/Lib/hooks";
import { searchProducts } from "@/Lib/Product/ProductSlice";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to control search bar visibility
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
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

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      dispatch(searchProducts(searchQuery)); // Dispatch search action
      router.push(`/pages/search?query=${searchQuery}`); // Navigate to search results page
    }
  };

  return (
    <>
      <nav className="sticky text-white bg-gray-900 max-md:py-4">
        <div className="flex flex-wrap  max-md:flex-row items-center justify-evenly mx-auto p-4">
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

          {/* Search Bar for larger screens */}
          <form
            onSubmit={handleSearch}
            className="relative w-full max-w-[600px] hidden lg:block"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-0 "
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </form>

          {/* Search Icon for smaller screens */}
          <FaSearch
            className="block md:hidden text-xl cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={toggleSearch}
          />

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
            } overflow-hidden  transition-all duration-300 ease-in-out md:transition-none md:duration-0 md:ease-in-out`}
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

        {/* Search bar for smaller screens */}
        {isSearchOpen && (
          <div
            className={`relative flex max-w-[800px] mx-4 mt-2 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isSearchOpen ? "max-h-[50px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <form onSubmit={handleSearch} className="w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-0 "
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </form>
          </div>
        )}

        {isModalOpen && <LoginComponent />}
      </nav>
    </>
  );
}
