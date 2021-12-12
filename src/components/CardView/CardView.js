import React from "react"
import Grid from "@mui/material/Grid"
import CardDetail from "../CardDetail/CardDetail"
import styles from "./cardView.module.css"

function CardView({ tickers }) {
 return (
  <Grid className={styles.root} container spacing={2}>
   <Grid item xs={12}>
    <Grid container justifyContent="center" spacing={2}>
     {tickers.map((value, index) => (
      <CardDetail value={value} index={index} />
     ))}
    </Grid>
   </Grid>
  </Grid>
 )
}

export default CardView
