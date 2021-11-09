import { GET_DATA } from "./binanceAction";

const initialState = {
  binance: [],
};

const binanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        binance: action.payload,
      };
    default:
      return state;
  }
};

export default binanceReducer;
