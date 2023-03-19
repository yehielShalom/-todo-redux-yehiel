import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const Page1 = () => {
  const { count, plus, minus } = useContext(AppContext);
  return (
    <div >
      count: {count}
      <div>
        <button onClick={() => plus}>+</button>
        <button onClick={() => minus}>-</button>
      </div>
    </div>
  );
};

export default Page1;
