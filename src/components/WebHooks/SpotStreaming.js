import { useState, useEffect, useCallback, useMemo } from "react";
import useWebSocket from "react-use-websocket";

function SpotStreaming(ticker) {
  const [spot, setSpot] = useState();
  const urlSpot = "wss://stream.binance.com:9443/stream";

  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket(urlSpot);

  const connectTicker = () => {
    sendJsonMessage({
      method: "SUBSCRIBE",
      params: [`${ticker.toLowerCase()}@miniTicker`],
      id: 1,
    });
  };

  // console.log(
  //   lastJsonMessage && lastJsonMessage.data && lastJsonMessage.data.c
  // );

  useMemo(() => {
    setSpot(lastJsonMessage && lastJsonMessage.data && lastJsonMessage.data.c);
  }, [lastJsonMessage]);
  useEffect(() => {
    connectTicker();
  }, [ticker]);
  return spot;
}
export default SpotStreaming;
