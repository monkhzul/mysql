import React, { useEffect, useState } from "react";
import Cards from "./Card";
import { useFood } from "../context/FoodContext";

function MainDishMenu() {
  const [foods] = useFood()
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    setMainMenu(
      foods
      .filter((p)=>{
        return p.category === "Үндсэн хоол"
      })
      .slice(0,4)
    )
  },[foods])

  // useEffect(() => {
  //   fetch("../data/foods.json")
  //     .then((response) => response.json())
  //     .then((data) => setMainMenu(data));
  // }, []);
  // let menu = mainMenu.filter((m) => m.category === "Үндсэн хоол").slice(0, 4);
  return (
    <div className="row">
      {mainMenu.map((data) => (
        <div className="col-6 col-md-3" id="category-card">
          <Cards
            data ={data}
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
export default MainDishMenu;
