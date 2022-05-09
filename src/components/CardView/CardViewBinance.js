import React, { useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import CardDetailBinance from "../CardDetail/CardDetailBinance";
import styles from "./cardView.module.css";

function CardViewBinance({ dark }) {
  const [tickers, setTickers] = useState();

  const getPremiumIndex = async () => {
    let data = await fetch(`https://dapi.binance.com/dapi/v1/premiumIndex`, {
      method: "GET",
    });
    data = await data.json();
    data = data.filter((pair) => pair.symbol.includes("0"));
    data = data.map((data) => data.symbol);
    data = data.sort();
    data = data.map((pair) => {
      return { coin: pair, spot: pair.split("_")[0] + "T" };
    });
    setTickers(data);
  };

  useEffect(() => {
    getPremiumIndex();
  }, []);

  return (
    <Grid className={styles.root} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {tickers &&
            tickers[0] &&
            tickers.map((value, index) => (
              <CardDetailBinance dark={dark} value={value} index={index} />
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardViewBinance;
