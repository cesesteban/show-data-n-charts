import Binance from 'node-binance-api';
import dotenv from 'dotenv';

dotenv.config();
const binance = new Binance().options({
  APIKEY: process.env.APIKEY,
  APISECRET: process.env.APISECRET,
});

export default binance;
