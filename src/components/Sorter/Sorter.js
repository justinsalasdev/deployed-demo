import { memo } from "react";
import genClass from "../../helpers/genClass";
import "./sorter.sass";

function Sorter({ options, label, value, handleChange }) {
  console.log("Sorter");
  const $ = genClass({ block: "sorter" });

  const id = label.toLowerCase();

  return (
    <div {...$()}>
      <label htmlFor={id} {...$("label")}>
        {label}
      </label>
      <select {...$("selector")} id={id} value={value} onChange={handleChange}>
        {options.map(option => {
          const value = option.toLowerCase();
          return (
            <option {...$("option")} key={value} value={value}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default memo(Sorter, (prev, next) => {
  return prev.value === next.value; //render only when selection changes
});
