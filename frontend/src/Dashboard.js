import React, { useEffect, useState } from "react";
import socket from "./socket";

function Dashboard({ email }) {
  const stocks = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

  const [prices, setPrices] = useState({});

  useEffect(() => {
    socket.on("priceUpdate", (data) => {
      if (data.email === email) {
        setPrices((prev) => ({
          ...prev,
          [data.stock]: data.price
        }));
      }
    });

    return () => {
      socket.off("priceUpdate");
    };
  }, [email]);

  const subscribe = (stock) => {
    socket.emit("subscribe", {
      email,
      stock
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{email}</h2>

      <h3>Stocks</h3>

      {stocks.map((stock) => (
        <div key={stock} style={{ marginBottom: "10px" }}>
          {stock}
          <button
            onClick={() => subscribe(stock)}
            style={{ marginLeft: "10px" }}
          >
            Subscribe
          </button>
        </div>
      ))}

      <h3>Live Prices</h3>

      {Object.keys(prices).map((stock) => (
        <div key={stock}>
          {stock} : {prices[stock]}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;