import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "./store/state-slices/ui-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, initialFetch } from "./store/state-slices/cart-thunk";
let isInitial = true;
function App() {
  const [initial, setInitial] = useState(false);
  const dispatch = useDispatch();
  const cartIsShown = useSelector((state) => state.ui.cartIsShown);
  const changed = useSelector((state) => state.cart.changed);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  console.log(cart);
  useEffect(() => {
    dispatch(initialFetch());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (changed) dispatch(sendCartData(cart));
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     title: "Sending......",
    //     message: "Sending Cart Data....",
    //   })
    // );
    // fetch("https://react-backend-d4c31-default-rtdb.firebaseio.com/cart.json", {
    //   method: "PUT",
    //   body: JSON.stringify(cart),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "success",
    //         title: "success......",
    //         message: "Sent Cart Data Successfully....",
    //       })
    //     );
    //     setTimeout(() => {
    //       dispatch(uiActions.hideNotification());
    //     }, 3500);
    //     console.log(data, "FIRE_DB_UPDATED_WITH_CART");
    //   })
    //   .catch((err) => {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error......",
    //         message: err.message,
    //       })
    //     );
    //     console.log("err updating fire_DB with cart");
    //   });
  }, [cart, dispatch, changed]);

  return (
    <React.Fragment>
      {notification && <Notification {...notification} />}
      <Layout>
        {cartIsShown && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
