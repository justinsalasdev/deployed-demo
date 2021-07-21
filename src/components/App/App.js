import genClass from "../../helpers/genClass";
import Table from "../Table/Table";
import "./app.sass";
export default function App() {
  const $ = genClass({ block: "app" });
  return (
    <>
      <Table ps={$("table").className} />
    </>
  );
}
