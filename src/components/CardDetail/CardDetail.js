import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import styles from "./cardDetail.module.css";

function CardDetail({ value, index }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid key={index} item>
        <Paper className={styles.paper} onClick={handleOpen}>
          <h1>{value}</h1>
        </Paper>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Paper className={styles.paperModal}></Paper>
      </Modal>
    </>
  );
}

export default CardDetail;
