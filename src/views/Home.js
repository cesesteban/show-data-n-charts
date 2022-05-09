import React, { createContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import CardViewBinance from "../components/CardView/CardViewBinance";
import NavBar from "../components/NavBar/NavBar";

function Home(props) {
  const [dark, setDarck] = useState(true);

  return (
    <Container maxWidth="lg">
      <div style={{ backgroundColor: dark ? "rgb(24 22 22)" : "#ffffff" }}>
        <NavBar dark={dark} setDarck={setDarck} />
        <CardViewBinance dark={dark} />
      </div>
    </Container>
  );
}

export default Home;
