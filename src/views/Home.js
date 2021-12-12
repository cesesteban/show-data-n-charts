import React, { useEffect } from "react"
import { Container } from "@mui/material"
import CardView from "../components/CardView"
import NavBar from "../components/NavBar/NavBar"
import { useDispatch, useSelector } from "react-redux"
import { getAllTickers, getAllFutures, getDataDapi, getDataFapi, getDataApi, getDataVapi } from "../store/binance/binanceAction"

function Home(props) {
 const dispatch = useDispatch()
 const allTickers = useSelector((state) => state.binanceReducer.allTickers)
 const allFutures = useSelector((state) => state.binanceReducer.allFutures)
 const data_dapi = useSelector((state) => state.binanceReducer.data_dapi)
 const data_fapi = useSelector((state) => state.binanceReducer.data_fapi)
 const data_api = useSelector((state) => state.binanceReducer.data_api)
 const data_vapi = useSelector((state) => state.binanceReducer.data_vapi)

 useEffect(() => {
  dispatch(getAllTickers())
  dispatch(getAllFutures())
  dispatch(getDataDapi())
  dispatch(getDataFapi())
  dispatch(getDataApi())
  dispatch(getDataVapi())
 }, [dispatch])

 const instruments = Object.keys(allTickers).filter((s) => allFutures.map((future) => future.symbol).includes(s))
 console.log(data_vapi)

 return (
  <Container maxWidth="lg">
   <NavBar />
   <CardView tickers={instruments} />
  </Container>
 )
}

export default Home
