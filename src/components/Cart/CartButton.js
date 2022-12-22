import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/state-slices/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  // const cartItems = useSelector((state) => state.cart.items);
  // const totalItems = cartItems.reduce((acc, curr) => {
  //   return acc + curr.quantity;
  // }, 0);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
