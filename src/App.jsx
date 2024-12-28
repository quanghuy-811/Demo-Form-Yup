import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DemoForm from "./components/DemoForm/DemoForm";
import DemoFomik from "./components/DemoFomik/DemoFomik";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <DemoForm /> */}
      <DemoFomik />
    </div>
  );
}

export default App;
