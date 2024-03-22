import { useState , useEffect} from "react";
import MealItem from "./MealItem";

export default function Meals()
{
 const [loadedMeals,setLoadedMeals]=useState([]);

  useEffect(()=>{
    async function fetchMeals()
 {
   const response= await fetch("http://localhost:3000/meals")

   if(!response.ok)
   {
    console.log("failed to fetch meals from backend");
   }
   const meals= await response.json();
   console.log(meals);
   setLoadedMeals(meals);
 }
    fetchMeals();
 },[]);

 return <ul id="meals">{loadedMeals.map((meal)=>
    <MealItem key={meal.id} meal={meal}/>
    )}</ul>
}