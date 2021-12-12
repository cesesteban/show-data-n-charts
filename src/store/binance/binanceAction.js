import axios from "axios"
import binance from "../../config/binance"
export const GET_ALL_TICKERS = "GET_ALL_TICKERS"
export const GET_ALL_FUTURES = "GET_ALL_FUTURES"
export const GET_DATA_DAPI = "GET_DATA_DAPI"
export const GET_DATA_FAPI = "GET_DATA_FAPI"
export const GET_DATA_API = "GET_DATA_API"
export const GET_DATA_VAPI = "GET_DATA_VAPI"

export const getAllTickers = () => async (dispatch) => {
 const tickers = await binance.prices()
 dispatch({ type: "GET_ALL_TICKERS", payload: tickers })
}
export const getAllFutures = () => async (dispatch) => {
 const futures = await binance.futuresMarkPrice()
 dispatch({ type: "GET_ALL_FUTURES", payload: futures })
}

export const getDataDapi = () => (dispatch) => {
 const url = "https://dapi.binance.com/"
 axios
  .get(`${url}/dapi/v1/ticker/bookTicker`, {})
  .then((res) => {
   dispatch({ type: "GET_DATA_DAPI", payload: res.data })
  })
  .catch((err) => {
   dispatch({ type: "GET_DATA_DAPI", payload: err })
  })
}
export const getDataFapi = () => (dispatch) => {
 const url = "https://fapi.binance.com/"
 axios
  .get(`${url}/fapi/v1/ticker/price`, {})
  .then((res) => {
   dispatch({ type: "GET_DATA_FAPI", payload: res.data })
  })
  .catch((err) => {
   dispatch({ type: "GET_DATA_FAPI", payload: err })
  })
}
export const getDataApi = () => (dispatch) => {
 const url = "https://api.binance.com"
 axios
  .get(`${url}/api/v3/ticker/price`, {})
  .then((res) => {
   dispatch({ type: "GET_DATA_API", payload: res.data })
  })
  .catch((err) => {
   dispatch({ type: "GET_DATA_API", payload: err })
  })
}
export const getDataVapi = () => (dispatch) => {
 const url = "https://vapi.binance.com"
 axios
  .get(`${url}/vapi/v1/time`, {})
  .then((res) => {
   dispatch({ type: "GET_DATA_VAPI", payload: res })
  })
  .catch((err) => {
   dispatch({ type: "GET_DATA_VAPI", payload: err })
  })
}
