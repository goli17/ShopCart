import PriceCard from "../Cards/PriceCard";
import ShoppingCart from "../Cards/ShoppingCart";

export default function CartComponent() {
  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>
          <div className="flex  gap-5 ">
            <div>
              <ShoppingCart />
            </div>
            <div>
              <PriceCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
