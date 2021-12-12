import { GET_ALL_TICKERS, GET_ALL_FUTURES, GET_DATA_DAPI, GET_DATA_FAPI, GET_DATA_API, GET_DATA_VAPI } from "./binanceAction"

const initialState = {
 allTickers: [],
 allFutures: [],
 data_dapi: "",
 data_fapi: "",
 data_api: "",
 data_vapi: "",
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
  case GET_DATA_DAPI:
   return {
    ...state,
    data_dapi: action.payload,
   }
  case GET_DATA_FAPI:
   return {
    ...state,
    data_fapi: action.payload,
   }
  case GET_DATA_API:
   return {
    ...state,
    data_api: action.payload,
   }
  case GET_DATA_VAPI:
   console.log(action.payload)
   return {
    ...state,
    data_vapi: action.payload,
   }
  default:
   return state
 }
}

export default binanceReducer
