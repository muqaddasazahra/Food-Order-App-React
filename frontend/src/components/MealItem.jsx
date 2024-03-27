import { currencyformatter } from "../util/currencyFormatter";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";
export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleAddItemToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyformatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItemToCart} textonly={false}>
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}
