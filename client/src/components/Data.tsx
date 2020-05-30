import React, { FC, useState } from 'react'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import TableComponent from './Table'
import xrCols from '../const/xrCols'
import stockCols from '../const/stockCols'
import XchangeRate from '../models/XchangeRate'
import StockPrice from '../models/StockPrice'

type Props = {
  xrData: XchangeRate[],
  indexData: StockPrice[],
}

const Data: FC<Props> = ({ xrData, indexData }) => {

  const [tab, setTab] = useState(0)

  const handleChange = (evt: any, val: number) => setTab(val)

  return (
    <Box>
      <Tabs value={tab} onChange={handleChange} aria-label='data tab' centered>
        <Tab label='JPY/USD' />
        <Tab label='SnP500' />
      </Tabs>
      {
        tab===0 && (
        <TableComponent 
          title='JPY/USD X/R History'
          cols={xrCols}
          data={xrData}
        />
      )}
      {
        tab===1 && (
        <TableComponent 
          title='SnP500 Stock History'
          cols={stockCols}
          data={indexData}
        />
      )}
    </Box>
  )
}

export default Data