import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card";
import { useFood } from "../../context/FoodContext";

function Desserts() {
  const [foods, setFoods] = useState([]);

  // useEffect(() => {
  //   fetch("../data/foods.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFoods(data);
  //     });
  // }, []);

  // let desserts = foods.filter((p) => p.category === "Амттан");
  const [food] = useFood();
  const [desserts, setDessert] = useState([]);
  useEffect(() => {
    setDessert(
      food
      .filter((d) => {
        return d.category === "Амттан"
      })
    )
  }, [food])
  return (
    <div className="row">
      {desserts.map((data, index) => {
        return (
          <div className="col-6 col-md-3">
            <Card
              key={data.index}
              name={data.name}
              price={data.price}
              portion={data.portion}
              stock={data.stock}
              image={data.image}
              discount={data.sales}
              percentage={data.discount_percentage}
              recipe={data.recipe}
            />
            {/* <Card 
              data = {data}
            /> */}
          </div>
        );
      })}
    </div>
  );
}

export default Desserts;
