import { combineReducers } from "redux";
import bymaReducer from "./byma/bymaReducer";
import matbaReducer from "./matba/matbaReducer";
import binanceReducer from "./binance/binanceReducer";

export default combineReducers({ bymaReducer, matbaReducer, binanceReducer });
