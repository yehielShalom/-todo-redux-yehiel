import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const Page1 = () => {
  const { count, plus, minus } = useContext(AppContext);
  return (
    <div className="text-center">
      <h1> count: {count}</h1>

      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
};

export default Page1;
