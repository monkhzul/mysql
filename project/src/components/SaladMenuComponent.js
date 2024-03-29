import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Card";
import { useFood } from "../context/FoodContext";

function SaladMenu() {
  const [saladMenu, setSaladMenu] = useState([]);
  const [food] = useFood();
  useEffect(() => {
    setSaladMenu(food.filter((p) => p.category === "Салад ба зууш").slice(0,4));
  }, [food]);
  return (
    <div className="row">
      {saladMenu.map((data, index) => (
        <div className="col-6 col-md-3" id="category-card">
          <Cards
            key={index}
            name={data.name}
            price={data.price}
            portion={data.portion}
            stock={data.stock}
            recipe={data.recipe}
            image={data.image}
            category={data.category}
          />
        </div>
      ))}
    </div>
  );
}
export default SaladMenu;
