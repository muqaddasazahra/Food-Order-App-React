import { useContext } from "react"
import CartContext from "../store/CartContext"
import { currencyformatter } from "../util/currencyFormatter";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";



export default function Cart()
{
const cartcontext=useContext(CartContext);
const userProgressContext=useContext(UserProgressContext)
const cartTotal=cartcontext.items.reduce((totalPrice,item)=>{
    return totalPrice+item.price*item.quantity;
},0)
function handleCloseCart()
{
    userProgressContext.hideCart();
}
 return <Modal className="cart" open={userProgressContext.progress==="cart"}>
    <h2>Your Cart</h2>
    <ul>
    {cartcontext.items.map(item=><li key={item.id}>
     {item.name}-{item.quantity}
    </li>)}
    </ul>
    <p className="cart-total">{currencyformatter.format(cartTotal)}</p>
    <p className="modal-actions">
        <Button textonly onClick={handleCloseCart}>Close</Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
    </p>
 </Modal>

}