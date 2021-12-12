import React, { useEffect } from "react"
import { Container } from "@mui/material"
import CardView from "../components/CardView"
import NavBar from "../components/NavBar/NavBar"
import { useDispatch, useSelector } from "react-redux"
import { getAllTickers } from "../store/binance/binanceAction"
import binance from "../config/binance"

function Home(props) {
 const dispatch = useDispatch()
 const allTickers = useSelector((state) => state.binanceReducer.allTickers)

 useEffect(() => {
  dispatch(getAllTickers())
 }, [dispatch])
 return (
  <Container maxWidth="lg">
   <NavBar />
   <CardView tickers={allTickers} />
  </Container>
 )
}

export default Home
