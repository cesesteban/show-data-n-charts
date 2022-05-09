import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "./navBar.module.css";
import SwithDarkMode from "./SwitchDarkMode.js/SwithDarkMode";

function NavBar({ dark, setDarck }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setDarck(darkMode);
  }, [darkMode]);
  return (
    <Grid item xs={12}>
      <Paper
        style={{ backgroundColor: dark ? "#313131" : "#ffffff" }}
        className={styles.control}
      >
        <SwithDarkMode dark={dark} setDarkMode={setDarkMode} />
      </Paper>
    </Grid>
  );
}

export default NavBar;
