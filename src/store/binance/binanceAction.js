import binance from "../../config/binance"
export const GET_ALL_TICKERS = "GET_ALL_TICKERS"

export const getAllTickers = () => async (dispatch) => {
 const tickers = await binance.prices()
 dispatch({ type: "GET_ALL_TICKERS", payload: tickers })
}
