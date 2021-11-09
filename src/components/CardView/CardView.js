import React from "react";
import Grid from "@mui/material/Grid";
import CardDetail from "../CardDetail/CardDetail";
import styles from "./cardView.module.css";

function CardView() {
  return (
    <Grid className={styles.root} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2, 0, 1, 2, 1, 2, 0, 1].map((value, index) => (
            <CardDetail value={value} index={index} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardView;
