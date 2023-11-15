import { configureStore } from "@reduxjs/toolkit";
import todoreducre from "../features/todoreducre";

export const Store = configureStore({
  reducer: todoreducre,
});
