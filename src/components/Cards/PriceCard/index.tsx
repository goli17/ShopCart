export default function PriceCard({ item }: any) {
  const OriginalPrice = item.toFixed(2);
  const Saving = (item - item * (1 - 0.1)).toFixed(2);
  const shopcharge = (item - item * (1 - 0.001)).toFixed(2);
  const tax = (item - item * (1 - 0.018)).toFixed(2);
  const total = (
    item +
    parseFloat(shopcharge) +
    parseFloat(tax) -
    parseFloat(Saving)
  ).toFixed(2);

  const formatPrice = (price: string) =>
    parseFloat(price)
      .toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
      })
      .replace("₹", "");

  return (
    <div className=" w-full mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
          <p className="text-xl font-semibold text-gray-900 ">Order summary</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Original price
                </dt>
                <dd className="text-base font-medium text-gray-900 ">
                  + ₹ {formatPrice(OriginalPrice)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-400 ">
                  Savings
                </dt>
                <dd className="text-base font-medium text-green-600">
                  - ₹ {formatPrice(Saving)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-400">
                  Store Pickup
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  + ₹ {formatPrice(shopcharge)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-400">Tax</dt>
                <dd className="text-base font-medium text-gray-900 ">
                  + ₹ {formatPrice(tax)}
                </dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-gray-900 ">
                ₹ {formatPrice(total)}
              </dd>
            </dl>
          </div>
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Proceed to Checkout
          </a>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {" "}
              or{" "}
            </span>
            <a
              href="#"
              title=""
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Continue Shopping
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
