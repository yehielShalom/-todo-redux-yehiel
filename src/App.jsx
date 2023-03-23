import React, { useState } from "react";
import "./App.css";
import { AppContext } from "./context/context";
import AppRoutes from "./routes/appRoutes";

const App = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    if (count >= 10) setCount(0);
    else {
      setCount(count + 1);
    }
  };

  const minus = () => {
    if (count <= 0) setCount(10);
    else {
      setCount(count - 1);
    }
  };
  return (
    <AppContext.Provider value={{ count, plus, minus }}>
      <AppRoutes />
    </AppContext.Provider>
  );
};

export default App;
