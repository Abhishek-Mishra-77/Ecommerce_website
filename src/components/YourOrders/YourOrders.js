import React, { useEffect, useState } from "react";

const YourOrders = () => {
  const [yourOrders, setYourOrders] = useState([]);
  const [allCurrentOrders, setAllCurrentOrders] = useState([]);
  const adminEmail = "satyam627578@gmail.com".replace(/[@.]/g, "");
  const email = localStorage.getItem("email");
  const modifiedEmail = email.replace(/[@.]/g, "");

  useEffect(() => {
    const fetchYourOrders = async () => {
      try {
        const response2 = await fetch(
          `https://ecommerce-e871a-default-rtdb.firebaseio.com/${adminEmail}.json`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response2.ok) {
          const data = await response2.json();
          if (data === null) {
            console.log("No orders found for this user.");
          } else {
            const users = Object.values(data);

            const ordersByEmail = users.reduce((acc, user) => {
              if (user.yourOrders && Array.isArray(user.yourOrders)) {
                if (!acc[user.email]) {
                  acc[user.email] = [];
                }
                acc[user.email] = acc[user.email].concat(user.yourOrders);
              } else {
                console.warn(
                  `User ${user.email} does not have a valid yourOrders array`
                );
              }
              return acc;
            }, {});

            // Debugging: Log the orders grouped by email

            setYourOrders(ordersByEmail);
          }
        } else {
          const data = await response2.json();
          let errorMessage = "Get Request failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.log("Error fetching orders:", error.message);
      }
    };

    fetchYourOrders();
  }, []);

  useEffect(() => {
    const fetchYourOrders = async () => {
      try {
        const response2 = await fetch(
          `https://ecommerce-e871a-default-rtdb.firebaseio.com/${modifiedEmail}.json`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response2.ok) {
          const data = await response2.json();
          if (data === null) {
            console.log("No orders found for this user.");
          } else {
            const users = Object.values(data);
            const ordersByEmail = users.reduce((acc, user) => {
              if (user.yourOrders && Array.isArray(user.yourOrders)) {
                if (!acc[user.email]) {
                  acc[user.email] = [];
                }
                acc[user.email] = acc[user.email].concat(user.yourOrders);
              } else {
                console.warn(
                  `User ${user.email} does not have a valid yourOrders array`
                );
              }
              return acc;
            }, {});

            setAllCurrentOrders(ordersByEmail);
          }
        } else {
          const data = await response2.json();
          let errorMessage = "Get Request failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.log("Error fetching orders:", error.message);
      }
    };

    fetchYourOrders();
  }, []);

  console.log(allCurrentOrders);

  return (
    <>
      {adminEmail === modifiedEmail ? (
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-4xl font-bold text-green-700">
                  All Completed Orders
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  You have access to view all completed orders.
                </p>
              </header>

              <div className="space-y-12 mt-8">
                {Object.entries(yourOrders).map(([email, orders]) => (
                  <div key={email}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      {email}
                    </h2>
                    <ul className="space-y-6">
                      {orders.map((item) => (
                        <li
                          key={item.id}
                          className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full sm:w-32 h-32 rounded object-cover border-2 border-gray-200 shadow-md"
                          />

                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {item.title}
                            </h3>

                            <dl className="mt-2 space-y-2 text-sm text-gray-700">
                              <div>
                                <dt className="inline font-medium">Price:</dt>
                                <dd className="inline">
                                  {" "}
                                  ${item.price.toFixed(2)}
                                </dd>
                              </div>
                            </dl>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="block text-lg text-gray-900 font-semibold">
                              Qty: {item.count}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-4xl font-bold text-green-700">
                  Your Completed Orders
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  Thank you for choosing us! Here is the summary of your
                  completed orders.
                </p>
              </header>

              <div className="space-y-12 mt-8">
                {Object.entries(allCurrentOrders).map(([email, orders]) => (
                  <div key={email}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      {email}
                    </h2>
                    <ul className="space-y-6">
                      {orders.map((item) => (
                        <li
                          key={item.id}
                          className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full sm:w-32 h-32 rounded object-cover border-2 border-gray-200 shadow-md"
                          />

                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {item.title}
                            </h3>

                            <dl className="mt-2 space-y-2 text-sm text-gray-700">
                              <div>
                                <dt className="inline font-medium">Price:</dt>
                                <dd className="inline">
                                  {" "}
                                  ${item.price.toFixed(2)}
                                </dd>
                              </div>
                            </dl>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="block text-lg text-gray-900 font-semibold">
                              Qty: {item.count}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default YourOrders;
