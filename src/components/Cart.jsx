import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyformatter } from "../util/currencyFormatter";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";

export default function Cart() {
  const cartcontext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const cartTotal = cartcontext.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);
  function handleCloseCart() {
    userProgressContext.hideCart();
  }
  function handleCheckout()
  {
    userProgressContext.showCheckout();
  }
  return (
    <Modal className="cart" open={userProgressContext.progress === "cart"} onClose={userProgressContext.progress==="cart" ? handleCloseCart: null}>
      <h2>Your Cart</h2>
      <ul>
        {cartcontext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartcontext.addItem(item)}
            onDecrease={() => cartcontext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyformatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textonly onClick={handleCloseCart}>
          Close
        </Button>
        {cartcontext.items.length > 0 && (<Button onClick={handleCheckout}>Go to Checkout</Button> )}
      </p>
    </Modal>
  );
}
