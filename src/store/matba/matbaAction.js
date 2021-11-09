import axios from "axios";

export const GET_DATA_INTRADAY = "GET_DATA";

//GET DATA
export const getDataMatbaIntraday = (symbol) => (dispatch) => {
  const Url = `https://api-matba-data.herokuapp.com/matba/instrument/intraday`;
  const data = {
    market_id: "ROFX",
    symbol: symbol,
  };
  console.log("matba", data);
  axios
    .get(Url, data)
    .then((res) => {
      dispatch({ type: GET_DATA_INTRADAY, payload: res });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_INTRADAY, payload: err });
    });
};
