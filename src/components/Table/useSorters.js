import { useState } from "react";

export default function useSorters() {
  const [country, setCountry] = useState("all");
  const [store, setStore] = useState("");
  const [currency, setCurrency] = useState("usd");

  function createHandler(setter) {
    return function (e) {
      setter(e.target.value);
    };
  }

  return {
    country,
    handleCountryChange: createHandler(setCountry),
    store,
    handleStoreChange: createHandler(setStore),
    currency,
    handleCurrencyChange: createHandler(setCurrency)
  };
}
