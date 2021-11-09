import React, { useEffect } from "react";
import { Container } from "@mui/material";
import CardView from "../components/CardView";
import NavBar from "../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getDataMatbaIntraday } from "../store/matba/matbaAction";
import { getDataBymaIntraday } from "../store/byma/bymaAction";

function Home(props) {
  const dispatch = useDispatch();
  const matbaIntraday = useSelector(
    (state) => state.matbaReducer.matbaIntraday
  );
  const bymaIntraday = useSelector((state) => state.bymaReducer.bymaIntraday);
  //const statusMatba = useSelector((state) => state.bymaReducer.status);

  useEffect(() => {
    dispatch(getDataMatbaIntraday("GGAL/OCT21"));
    dispatch(getDataBymaIntraday());
  }, [dispatch]);
  console.log(matbaIntraday);
  console.log(bymaIntraday);
  return (
    <Container maxWidth="lg">
      <NavBar />
      <CardView />
    </Container>
  );
}

export default Home;
