import { GET_DATA_INTRADAY } from "./matbaAction";

const initialState = {
  matbaIntraday: "",
  status: "",
};

const matbaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_INTRADAY:
      console.log(action.payload);
      if (state.status !== "200") {
        return {
          ...state,
          matbaIntraday: action.payload.data,
          status: action.payload.status,
        };
      } else {
        return {
          ...state,
          matbaIntraday: action.payload.data,
          status: 201,
        };
      }
    default:
      return state;
  }
};

export default matbaReducer;
