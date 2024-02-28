import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./Store/AppReducer";

export const Store = configureStore(
{ reducer : {
  menu : AppReducer
 }}
)
