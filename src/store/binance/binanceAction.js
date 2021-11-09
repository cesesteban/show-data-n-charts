import axios from "axios";

export const GET_DATA = "GET_DATA";

//GET DATA
const Url = ``;
export const getDataBinance = () => (dispatch) => {
  axios
    .get(`${Url}`)
    .then((res) => {
      dispatch({ type: GET_DATA, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA, payload: err });
    });
};
