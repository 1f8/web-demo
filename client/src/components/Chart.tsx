import React, { FC, useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import { Line } from 'react-chartjs-2'
import XchangeRate from '../models/XchangeRate'
import StockPrice from '../models/StockPrice'

type Props = {
  xrData: XchangeRate[],
  indexData: StockPrice[],
}

const Chart: FC<Props> = ({ xrData, indexData }) => {

  const [data, setData] = useState({})

  useEffect(() => {

    if (xrData && indexData) {

      const labels = xrData.map(d => d.date).sort((a,b) => a > b ? 1 : -1)
      const datasets = [
        {
          label: 'JPY/USD',
          borderColor: 'red',
          fill: false,
          data: labels.map(ll => {
            const rf = xrData.find(d => d.date===ll)
            return rf ? rf.rate / 100 : null
          }),
        },
        {
          label: 'SnP500',
          borderColor: 'blue',
          fill: false,
          data: labels.map(ll => {
            const rf = indexData.find(d => d.date===ll)
            return rf ? rf.close / 2800 : null
          }),
        },
      ]

      setData({
        labels,
        datasets,
      })
    }

  }, [xrData, indexData])

  return (
    <Box>
      { data && <Line data={data} /> }
    </Box>
  )
}

export default Chart