import "./App.css";
import Nav from "./components/Nav";
import InputPanel from "./components/InputPanel";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState<string>("Caesar");
  return (
    <>
      <Nav tab={tab} setTab={setTab} />
      <InputPanel tab={tab} />
    </>
  );
}

export default App;
