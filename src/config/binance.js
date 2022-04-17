import Binance from "node-binance-api";
import dotenv from "dotenv";

const binance = new Binance().options({
  APIKEY: process.env.API_BINANCE_KEY,
  APISECRET: process.env.SECRET_BINANCE_KEY,
});

export default binance;
