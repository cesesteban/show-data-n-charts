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

function CardDetailBinance({ value, index }) {
  var start = moment().format("YYYY-MM-DD");
  var end = moment("2022-06-24");

  const spot = SpotStreaming(value);
  const coin = CoinStreaming(value);
  const implicit = ImplicitHook(start, end, spot, coin);

  const [historySpot, setHistorySpot] = useState();
  const [historyCoin, setHistoryCoin] = useState();
  const [historyImplicit, setHistoryImplicit] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("handleOpen");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const getSpotHistory = async () => {
    const data = await fetch(
      `https://api.binance.com/api/v1/klines?symbol=${value.toUpperCase()}&limit=500&interval=15m`,
      { method: "GET" }
    );
    data = await data.json();
    //console.log(data);
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
    //console.log(data);
    // setHistoryCoin(data);
  };
  useMemo(() => {
    if (spot && coin) {
      // console.log("HISTORY");
      getCoinHistory();
      getSpotHistory();
    }
  }, [spot, coin]);

  return (
    <>
      <Grid key={index} item>
        {spot && coin && (
          <Paper className={styles.paper}>
            <h1 onClick={() => handleOpen()}>{value}</h1>
            {""}
            <h1>{Number.parseFloat(spot).toPrecision(8)}</h1>
            {""}
            {coin && <h1>{coin}</h1>}
            {""}
            {coin && implicit !== undefined && (
              <h1>%{Number.parseFloat(implicit).toFixed(3)}</h1>
            )}
          </Paper>
        )}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Paper className={styles.paperModal}></Paper>
      </Modal>
    </>
  );
}

export default CardDetailBinance;
