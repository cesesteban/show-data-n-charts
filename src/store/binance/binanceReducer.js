import { GET_ALL_TICKERS } from "./binanceAction"

const initialState = {
 allTickers: [],
}

const binanceReducer = (state = initialState, action) => {
 switch (action.type) {
  case GET_ALL_TICKERS:
   return {
    ...state,
    allTickers: action.payload,
   }
  default:
   return state
 }
}

export default binanceReducer
