
import { currencyformatter } from "../util/currencyFormatter";

export default function CartItem({name, quantity, price, onIncrease, onDecrease})
{   
   
    return <li className="cart-item">
        <p>
         {name} - {quantity} &times; {currencyformatter.format(price)}
        </p>
        <p className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
}