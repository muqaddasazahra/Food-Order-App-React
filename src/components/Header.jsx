import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext";
export default function Header()
{   
    const cartctx=useContext(CartContext);
    const userProgressCtx=useContext(UserProgressContext);
    const totalCartItems=cartctx.items.reduce((totalnumberofitems,item)=>{
        return totalnumberofitems+item.quantity;
    },0)
    function handleShowCart()
    {
        userProgressCtx.showCart();
    }
    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="FoodPoint Logo" />
            <h1>FoodPoint</h1>
        </div>
        <nav>
           <Button textonly onClick={handleShowCart}>Cart ({totalCartItems}) </Button>
        </nav>
    </header>
}