import { GET_ALL_TICKERS, GET_ALL_FUTURES } from "./binanceAction"

const initialState = {
 allTickers: [],
 allFutures: [],
}

const binanceReducer = (state = initialState, action) => {
 switch (action.type) {
  case GET_ALL_TICKERS:
   return {
    ...state,
    allTickers: action.payload,
   }
  case GET_ALL_FUTURES:
   return {
    ...state,
    allFutures: action.payload,
   }
  default:
   return state
 }
}

export default binanceReducer
