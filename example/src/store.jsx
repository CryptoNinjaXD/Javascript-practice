import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo.jsx";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
