import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoslice";

const myStore = configureStore({
  reducer: {
    todoReducer
  },
});
export default myStore;
