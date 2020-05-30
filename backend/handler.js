import * as rp from 'request-promise'

const reportStartDate = '2020-01-01'
const today = new Date().toISOString().substring(0,10)

const buildResponse = (statusCode, body) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  }
}

export const getExchangeRates = async (event, context) => {
  const options = {
    url: 'https://api.exchangeratesapi.io/history',
    qs: {
      start_at: reportStartDate,
      end_at: today,
    },
  }

  return await rp(options)
    .then((data) => {
      console.log(data)
      return buildResponse(200, data)
    })
    .catch((err) => {
      console.error(err)
      return buildResponse(500, err)
    })
};

export const getGspcHist = async (event, context) => {
  const options = {
    url: 'https://financialmodelingprep.com/api/v3/historical-price-full/index/^GSPC',
    qs: {
      from: reportStartDate,
      to: today,
      apikey: process.env.FMP_API_KEY,
    },
  }

  return await rp(options)
    .then((data) => {
      console.log(data)
      return buildResponse(200, data)
    })
    .catch((err) => {
      console.error(err)
      return buildResponse(500, err)
    })
};
