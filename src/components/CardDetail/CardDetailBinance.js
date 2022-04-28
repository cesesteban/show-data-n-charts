import React, { useCallback, useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import styles from "./cardDetail.module.css";
import SpotStreaming from "../WebHooks/SpotStreaming";
import CoinStreaming from "../WebHooks/CoinStreaming";
import moment from "moment";
import ImplicitHook from "../WebHooks/ImplicitHook";
import HistoryHook from "../WebHooks/HistoryHook";
import { setEndTime } from "../../utils/setEndTime";
import Chart from "../Chart";
import ImplicitHookArray from "../WebHooks/ImplicitHookArray";

function CardDetailBinance({ value, index }) {
  var start = moment().format("YYYY-MM-DD");
  var end = setEndTime(value);

  const spot = SpotStreaming(value.spot);
  const coin = CoinStreaming(value.coin);
  const implicit = ImplicitHook(start, end, spot, coin);

  const [historySpot, setHistorySpot] = useState();
  const [historyCoin, setHistoryCoin] = useState();
  // const [historyImplicit, setHistoryImplicit] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const getSpotHistory = async () => {
    let data = await fetch(
      `https://api.binance.com/api/v1/klines?symbol=${value.spot.toUpperCase()}&limit=500&interval=15m`,
      { method: "GET" }
    );
    data = await data.json();
    setHistorySpot(data);
  };

  const getCoinHistory = async () => {
    let data = await fetch(
      `https://dapi.binance.com/dapi/v1/klines?symbol=${value.coin.toLowerCase()}&interval=15m`,
      {
        method: "GET",
      }
    );
    data = await data.json();
    setHistoryCoin(data);
  };
  useMemo(() => {
    if (spot && coin) {
      getCoinHistory();
      getSpotHistory();
    }
  }, [spot, coin]);

  // const historyImplicit = ImplicitHookArray(
  //   start,
  //   end,
  //   historySpot,
  //   historyCoin
  // );

  // console.log(historyImplicit);

  return (
    <>
      <Grid key={index} item>
        {
          <Paper onClick={() => handleOpen()} className={styles.paper}>
            <h1>{value.coin}</h1>
            {""}
            <h1>Days {end && end.diff(start, "days")}</h1>
            {""}
            <h1>Spot {spot && Number.parseFloat(spot).toFixed(3)}</h1>
            {""}
            {coin && <h1>Fut {coin}</h1>}
            {""}
            {coin && implicit !== undefined && (
              <h1>TNA% {Number.parseFloat(implicit).toFixed(3)}</h1>
            )}
          </Paper>
        }
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Paper className={styles.paperModal}>
          <Chart coinHistory={historyCoin} spotHistory={historySpot} />
        </Paper>
      </Modal>
    </>
  );
}

export default CardDetailBinance;
