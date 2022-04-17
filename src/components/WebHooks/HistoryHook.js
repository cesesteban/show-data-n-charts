import { useState, useEffect, useCallback, useMemo } from "react";

function HistoryHook(value) {
  const [historySpot, setHistorySpot] = useState();
  const [historyCoin, setHistoryCoin] = useState();
  const [historyImplicit, setHistoryImplicit] = useState();

  const getSpotHistory = async () => {
    const data = await fetch(
      `https://api.binance.com/api/v1/klines?symbol=${value.toUpperCase()}&limit=500&interval=15m`,
      { method: "GET" }
    );
    data = await data.json();
    console.log(data);
    // setHistorySpot(data);
  };

  const getCoinHistory = async () => {
    let data = await fetch(
      `https://dapi.binance.com/dapi/v1/klines?symbol=${value
        .toLowerCase()
        .slice(0, -1)}_220624&interval=15m`,
      {
        method: "GET",
      }
    );
    data = await data.json();
    console.log(data);
    // setHistoryCoin(data);
  };

  useEffect(() => {
    getCoinHistory();
    getSpotHistory();
  }, [value]);
  console.log(historySpot);
  console.log(historyCoin);

  return historyImplicit;
}

export default HistoryHook;
