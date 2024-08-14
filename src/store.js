import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./state/Reducer";
import todoReducer from "./state/todoSlice";

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todos:todoReducer,
  },
}); 