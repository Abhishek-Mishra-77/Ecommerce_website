import React from "react";

const YourOrders = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-3xl font-bold text-green-600">
                Your Completed Orders
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Thank you for your purchase! Here is the summary of your
                completed orders.
              </p>
            </header>

            <div className="mt-8">
              <ul className="space-y-8">
                {[
                  {
                    id: 1,
                    name: "Basic Tee 6-Pack",
                    size: "XXS",
                    color: "White",
                    imageUrl:
                      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
                    quantity: 1,
                  },
                  // Repeat similar objects for more items
                ].map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-6 bg-white p-4 rounded shadow-sm"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-24 h-24 rounded object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <dl className="mt-1 space-y-1 text-sm text-gray-600">
                        <div>
                          <dt className="inline font-medium">Size:</dt>
                          <dd className="inline">{item.size}</dd>
                        </div>

                        <div>
                          <dt className="inline font-medium">Color:</dt>
                          <dd className="inline">{item.color}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="block text-gray-900 font-semibold">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-12 border-t border-gray-200 pt-8">
                <div className="w-full max-w-lg mx-auto space-y-4">
                  <dl className="text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£250</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between text-lg font-medium text-green-600">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-green-100 px-2.5 py-0.5 text-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ml-1 mr-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-xs">
                        2 Discounts Applied
                      </p>
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <button className="block rounded bg-green-600 px-5 py-3 text-sm text-white transition hover:bg-green-500">
                      Back to Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourOrders;
