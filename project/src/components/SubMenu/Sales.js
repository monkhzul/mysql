import Card from "../Card";
import { useEffect, useState } from "react";
import { useFood } from "../../context/FoodContext";

const Sales = () => {
  const [sale, setSale] = useState([]);
  const [food] = useFood();
  useEffect(() => {
    setSale(food.filter((p) => p.discount !== 0));
  }, [food]);
  return (
    <div className="row">
      {sale.map((data, index) => (
        <div className="col-6 col-md-3">
          <Card
              key={index}
              name={data.name}
              price={data.price}
              portion={data.portion}
              stock={data.stock}
              image={data.image}
              discount={data.sales}
              percentage={data.discount}
              recipe={data.recipe}
          />
        </div>
      ))}
    </div>
  );
}

export default Sales;
