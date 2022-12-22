import { uiActions } from "./ui-slice";
import { cartActions } from "./cart";

export const initialFetch = () => {
  return (dispatch) => {
    fetch("https://react-backend-d4c31-default-rtdb.firebaseio.com/cart.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(cartActions.loadInitialData(data));
      })
      .catch((err) => {
        if (err.message.includes("null")) {
          dispatch(cartActions.loadInitialData({ items: [], totalItems: 0 }));
        }
      });
  };
};
export const sendCartData = (cart) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending......",
        message: "Sending Cart Data....",
      })
    );
    console.log(cart, "B444444444");
    fetch("https://react-backend-d4c31-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "success......",
            message: "Sent Cart Data Successfully....",
          })
        );
        setTimeout(() => {
          dispatch(uiActions.hideNotification());
        }, 3500);

        console.log(data, "FIRE_DB_UPDATED_WITH_CART");
      })
      .catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error......",
            message: err.message,
          })
        );
        console.log("err updating fire_DB with cart");
      });
  };
};
