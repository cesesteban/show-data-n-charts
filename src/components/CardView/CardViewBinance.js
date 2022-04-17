import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardDetailBinance from "../CardDetail/CardDetailBinance";
import styles from "./cardView.module.css";

function CardViewBinance() {
  const [tickers, setTickers] = useState();

  const getTickers = async () => {
    let tickers = await fetch("https://api.binance.com/api/v3/exchangeInfo", {
      method: "GET",
    });
    tickers = await tickers.json();
    tickers = tickers.symbols.filter(
      (symbol) => symbol.symbol && symbol.symbol.includes("USDT")
    );
    tickers = tickers.map((symbol) => symbol.symbol);
    setTickers(tickers);
  };

  useEffect(() => {
    getTickers();
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
