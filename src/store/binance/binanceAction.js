import binance from "../../config/binance"
export const GET_ALL_TICKERS = "GET_ALL_TICKERS"
export const GET_ALL_FUTURES = "GET_ALL_FUTURES"

export const getAllTickers = () => async (dispatch) => {
 const tickers = await binance.prices()
 dispatch({ type: "GET_ALL_TICKERS", payload: tickers })
}
export const getAllFutures = () => async (dispatch) => {
 const futures = await binance.futuresMarkPrice()
 dispatch({ type: "GET_ALL_FUTURES", payload: futures })
}
