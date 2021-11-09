import axios from "axios";

export const GET_DATA_INTRADAY = "GET_DATA_INTRADAY";

//GET DATA
export const getDataBymaIntraday = () => (dispatch) => {
  const Url = "https://api-byma-data.herokuapp.com/byma/instrument/intraday";
  const data = {
    symbol: "PAMP",
  };
  console.log("byma", data);
  axios
    .get(Url, data)
    .then((res) => {
      dispatch({ type: GET_DATA_INTRADAY, payload: res });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_INTRADAY, payload: err });
    });
};
