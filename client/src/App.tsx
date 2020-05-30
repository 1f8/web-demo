import React, { FC } from 'react'
import './App.css';
import withData from './components/withData'
import './App.css'
import Header from './components/Header'
import Chart from './components/Chart'
import Data from './components/Data'
import XchangeRate from './models/XchangeRate'
import StockPrice from './models/StockPrice'

type Props = {
  xrData: XchangeRate[],
  indexData: StockPrice[],
}

const App: FC<Props> = ({ xrData, indexData }) => {
  return (
    <div className="App">
      <Header />
      <div className="AppBody">
        <Chart xrData={xrData} indexData={indexData} />
        <Data xrData={xrData} indexData={indexData} />
      </div>
    </div>
  );
}

export default withData(App);
