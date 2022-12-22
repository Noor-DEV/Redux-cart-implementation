import { useDispatch } from "react-redux";

import { cartActions } from "../../store/state-slices/cart";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const {
    title,
    quantity,
    totalPrice: total,
    price,
    id,
    description,
  } = props.item;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        description,
        quantity: 1,
      })
    );
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItem({ id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
