import React, { useEffect } from "react"
import { Container } from "@mui/material"
import CardView from "../components/CardView"
import NavBar from "../components/NavBar/NavBar"
import { useDispatch, useSelector } from "react-redux"
import { getAllTickers, getAllFutures } from "../store/binance/binanceAction"

function Home(props) {
 const dispatch = useDispatch()
 const allTickers = useSelector((state) => state.binanceReducer.allTickers)
 const allFutures = useSelector((state) => state.binanceReducer.allFutures)

 useEffect(() => {
  dispatch(getAllTickers())
  dispatch(getAllFutures())
 }, [dispatch])

 const spot = Object.keys(allTickers)

 const futures = allFutures.map((future) => future.symbol)

 const instruments = spot.filter((s) => futures.includes(s))

 console.log(instruments)

 return (
  <Container maxWidth="lg">
   <NavBar />
   <CardView tickers={instruments} />
  </Container>
 )
}

export default Home
