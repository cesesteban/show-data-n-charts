import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "./navBar.module.css";

function NavBar(props) {
  return (
    <Grid item xs={12}>
      <Paper className={styles.control}>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default NavBar;
