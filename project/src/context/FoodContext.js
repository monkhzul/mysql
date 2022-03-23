import { createContext, useState, useContext, useEffect } from "react";
import { foodService } from "../services/foodService";
export const FoodContext = createContext({});

export function useFood() {
    return useContext(FoodContext)
}

export const FoodProvider = (props) => {
    const [ food, setFood] = useState([]);
    useEffect(()=> {
        foodService
        .getAllFood()
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                setFood(data.data)
            }
        })
        .finally(()=>{})
    }, []);

    return (
        <FoodContext.Provider value={[food, setFood]}>
            {props.children}
        </FoodContext.Provider>
    )
}