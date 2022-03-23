import React from "react";
import { useEffect, useState } from "react";
import "../css/card.css";
import Card from "./Card";

function Cards() {
  // const [foods, setFoods] = useState([]);
  // useEffect(() => {
  //   fetch("../data/foods.json")
  //     .then((response) => response.json())
  //     .then((data) => setFoods(data));
  // }, []);

  const [food] = useFood();
  const [desserts, setDessert] = useState([]);
  useEffect(() => {
    setDessert(
      food
      .filter((d) => {
        d.discount !== 0
      })
    )
  }, [food])

  return (
    <div className="container my-5">
      <div className="row">
        {desserts.map((i) => (
          <div className="col-6 col-md-3">
            <Card
              // data={i} key={i.name}
              data ={data}
              name={data.name}
              price={data.price}
              portion={data.portion}
              stock={data.stock}
              recipe={data.recipe}
              image={data.image}
              category={data.category}
              percentage={data.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cards;
