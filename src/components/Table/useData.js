import { useEffect, useReducer } from "react";
import reducer from "./reducer";
const endPoint = "http://www.mocky.io/v2/5d4caeb23100000a02a95477";
export default function useData() {
  const [reqState, reqDispatch] = useReducer(reducer, {
    data: [],
    isLoading: false,
    error: null
  });
  useEffect(() => {
    (async () => {
      try {
        reqDispatch({ type: "start" });
        const res = await fetch(endPoint);
        const jsonData = await res.json();
        reqDispatch({ type: "save", payload: jsonData });
      } catch (err) {
        reqDispatch({ type: "error", payload: "can't get data" });
      }
    })();
  }, []);

  return {
    data: reqState.data,
    error: reqState.error,
    isLoading: reqState.isLoading
  };
}
