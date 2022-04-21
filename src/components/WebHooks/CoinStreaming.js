import { useState, useEffect, useCallback, useMemo } from "react";
import useWebSocket from "react-use-websocket";

function CoinStreaming(ticker) {
  const [coin, setCoin] = useState();

  const urlCoin = "wss://dstream.binance.com/stream";

  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket(urlCoin);

  const connectTicker = () => {
    sendJsonMessage({
      method: "SUBSCRIBE",
      params: [`${ticker.toLowerCase()}@ticker`],
      // params: [`${ticker.toLowerCase().slice(0, -1)}_220624@ticker`],
      id: 1,
    });
  };

  useMemo(() => {
    console.log(ticker);
    console.log(lastJsonMessage);
    setCoin(lastJsonMessage && lastJsonMessage.data && lastJsonMessage.data.c);
  }, [lastJsonMessage]);
  useEffect(() => {
    connectTicker();
  }, [ticker]);
  return coin;
}
export default CoinStreaming;
