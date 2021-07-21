import genClass from "../../helpers/genClass";
import useData from "./useData";
import "./table.sass";
import Sorter from "../Sorter/Sorter";
import useSorters from "./useSorters";
import Fuse from "fuse.js";
import formatCurrency from "../../helpers/formatCurrency";

export default function Table({ ps }) {
  const { data: stores, error, isLoading } = useData();
  const {
    store,
    handleStoreChange,
    country,
    handleCountryChange,
    currency,
    handleCurrencyChange
  } = useSorters();

  console.log(currency);

  const filteredStores = stores.filter(store =>
    country === "all" ? true : store.country === country.toUpperCase()
  );
  const fuse = new Fuse(filteredStores, {
    keys: ["store"]
  });

  const $ = genClass({ block: "table", ps });

  if (isLoading) {
    return <div>..loading..</div>;
  }

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <table {...$()}>
      <thead {...$("headers")}>
        <tr {...$("row")}>
          <th {...$("heading")}>
            <Sorter
              options={["ALL", "USA", "NZL", "AUS"]}
              label="Countries"
              value={country}
              handleChange={handleCountryChange}
            />
          </th>
          <th {...$("heading")}>
            <input
              {...$("search")}
              value={store}
              onChange={handleStoreChange}
              placeholder="Store"
            />
          </th>
          <th {...$("heading")}>
            {" "}
            <Sorter
              options={["USD", "NZL", "AUS"]}
              label="Value"
              value={currency}
              handleChange={handleCurrencyChange}
            />
          </th>
        </tr>
      </thead>

      <tbody {...$("body")}>
        {((!store && filteredStores) || fuse.search(store)).map(store => {
          const { id, country, store: name, value } = store.item || store;
          return (
            <tr {...$("row")} key={id}>
              <td {...$("data")}>{country}</td>
              <td {...$("data")}>{name}</td>
              <td {...$("data")}>{formatCurrency(currency, value)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
