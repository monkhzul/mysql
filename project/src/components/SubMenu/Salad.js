import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card";
import { useFood } from "../../context/FoodContext";

const Salad = () => {
  const [saladMenu, setSaladMenu] = useState([]);
  const [food] = useFood();
  useEffect(() => {
    setSaladMenu(food.filter((p) => p.category === "Салад ба зууш"));
  }, [food]);
  return (
    <div className="row">
      {saladMenu.map((data, index) => (
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
        </div>
      ))}
    </div>
  );
};

export default Salad;
