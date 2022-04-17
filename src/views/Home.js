import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Container } from "@mui/material";
import CardViewBinance from "../components/CardView/CardViewBinance";
import NavBar from "../components/NavBar/NavBar";

function Home(props) {
  return (
    <Container maxWidth="lg">
      <NavBar />
      <CardViewBinance />
    </Container>
  );
}

export default Home;
