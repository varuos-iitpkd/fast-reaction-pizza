import { configureStore } from "@reduxjs/toolkit";
import userRecuder from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userRecuder,
    cart: cartReducer,
  },
});

export default store;
