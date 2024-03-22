import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"
export default function Header()
{   
    const cartctx=useContext(CartContext);
    const totalCartItems=cartctx.items.reduce((totalnumberofitems,item)=>{
        return totalnumberofitems+item.quantity;
    },0)
    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="FoodPoint Logo" />
            <h1>FoodPoint</h1>
        </div>
        <nav>
           <Button textonly>Cart ({totalCartItems}) </Button>
        </nav>
    </header>
}