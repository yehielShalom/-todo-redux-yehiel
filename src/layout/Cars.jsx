import axios from "axios";
import React, { useEffect, useState } from "react";

const Cars = () => {
  const [car, setCar] = useState([]);

  let res = async function () {
    let bug = await axios.get("https://cars-otdf.onrender.com/cars?perPage=99");
    setCar(bug.data);
    //console.log(bag.data);
  };
  console.log(car);

  useEffect(() => {
    res();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {car.map(function (val, i) {
          if (val.category === "SUPERCAR") {
            return (
              <div style={{ border: "1px solid black" }}>
                <img style={{ width: "500px" }} src={val.img_url}></img>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cars;
