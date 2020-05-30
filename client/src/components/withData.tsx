import React, { FC, useState, useEffect } from 'react'
import Amplify from '@aws-amplify/core'
import { API } from 'aws-amplify'
import { AmplifyConfig } from '../amplify-config'
import XchangeRate from '../models/XchangeRate'
import StockPrice from '../models/StockPrice'

Amplify.configure({
  API: {
    endpoints: AmplifyConfig.aws_cloud_logic_custom.map(ep => {
      return {
        name: AmplifyConfig.api_name,
        endpoint: ep.endpoint,
        region: ep.region,
      }
    })
  }
})

type Props = {
  xrData: XchangeRate[],
  indexData: StockPrice[],
}

const withData = (Component: FC<Props>) => () => {

  const [xrData, setXrData] = useState<any[]>([])
  const [indexData, setIndexData] = useState<any[]>([])

  useEffect(() => {
    API.get(AmplifyConfig.api_name, AmplifyConfig.api_paths.xr, {})
      .then((data: any) => {
        const rng = Object.keys(data.rates).map(k => new XchangeRate(k, data.rates[k]))
        setXrData(rng.sort((a,b) => a.date < b.date ? 1 : -1))
      })
      .catch((err: any) => console.error('xr data failed', err))
    API.get(AmplifyConfig.api_name, AmplifyConfig.api_paths.stock, {})
      .then((data: any) => {
        const rng: StockPrice[] = data.historical.map((d: any) => new StockPrice(d))
        setIndexData(rng.sort((a,b) => a.date < b.date ? 1 : -1))
      })
      .catch((err: any) => console.error('stock data failed', err))
  }, [])

  return (
    <Component 
      xrData={xrData}
      indexData={indexData}
    />
  )
}

export default withData;