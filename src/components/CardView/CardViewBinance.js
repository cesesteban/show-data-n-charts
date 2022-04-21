import React, { useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import CardDetailBinance from "../CardDetail/CardDetailBinance";
import styles from "./cardView.module.css";

function CardViewBinance() {
  const [tickers, setTickers] = useState();

  const getPremiumIndex = async () => {
    console.log("getPremiumIndex");
    let data = await fetch(`https://dapi.binance.com/dapi/v1/premiumIndex`, {
      method: "GET",
    });
    data = await data.json();
    console.log(data);
    let tickers = data && data.filter((pair) => pair.symbol.includes("0"));
    tickers = tickers.map((ticker) => ticker.pair + "T");
    console.log(tickers);
    setTickers(tickers);
  };

  //const getTickers = async () => {
  // let tickers = await fetch("https://api.binance.com/api/v3/exchangeInfo", {
  //   method: "GET",
  // });
  // tickers = await tickers.json();
  // tickers = tickers.symbols.filter(
  //   (symbol) => symbol.symbol && symbol.symbol.includes("USDT")
  // );
  // tickers = tickers.map((symbol) => symbol.symbol);
  //setTickers(TICKERS);
  //};

  useEffect(() => {
    //getTickers();
    getPremiumIndex();
  }, []);

  return (
    <Grid className={styles.root} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {tickers &&
            tickers[0] &&
            tickers.map((value, index) => (
              <CardDetailBinance value={value} index={index} />
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardViewBinance;
