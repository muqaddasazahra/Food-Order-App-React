import { useContext } from "react"
import CartContext from "../store/CartContext"
import { currencyformatter } from "../util/currencyFormatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";

export default function Checkout()
{   
    const cartcontext=useContext(CartContext);
    const userProgressCtx=useContext(UserProgressContext)
    const cartTotal=cartcontext.items.reduce((totalamount,item)=>
    {
        return totalamount+item.quantity*item.price
    },0)
    function handleCloseCheckout()
    {
    userProgressCtx.hideCheckout();
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        const fd=new FormData(event.target);
        const customerData=Object.fromEntries(fd.entries());
        console.log(customerData);
    }
    return <Modal open={userProgressCtx.progress==="checkout"} onClose={handleCloseCheckout}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount:{currencyformatter.format(cartTotal)}</p>
            <Input id="full-name" type="text" label="Full Name"/>
            <Input id="email" type="email" label="Email Address"/>
            <Input id="street" type="text" label="street"/>
            <div className="control-row">
                <Input label="Postal Code" id="postal-code" type="text"/>
                <Input label="City" id="city" type="text"/>
            </div>
            <p className="modal-actions">
                <Button type="button" onClick={handleCloseCheckout} textonly>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
}