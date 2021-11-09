import { GET_DATA_INTRADAY } from "./bymaAction";

const initialState = {
  bymaIntraday: "",
  status: "",
};

const bymaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_INTRADAY:
      if (state.status !== 200) {
        return {
          ...state,
          bymaIntraday: action.payload.data,
          status: action.payload.status,
        };
      } else {
        return {
          ...state,
          bymaIntraday: action.payload.data,
          status: 201,
        };
      }
    default:
      return state;
  }
};

export default bymaReducer;
