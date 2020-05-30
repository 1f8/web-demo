export default class StockPrice {
  date: string
  open: number
  close: number

  constructor(obj: any) {
    this.date = obj.date
    this.open = obj.open
    this.close = obj.close
  }
}