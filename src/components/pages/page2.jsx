import React from "react";
import { AppContext } from "../../context/context";

const Page2 = () => {
  const { count } = useContext(AppContext);
  return <div>
    <h1>count:{count}</h1>
    </div>
};

export default Page2;
