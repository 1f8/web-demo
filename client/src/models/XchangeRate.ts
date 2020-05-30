export default class XchangeRate {
  date: string
  rate: number

  constructor(date: string, obj: any) {
    this.date = date
    this.rate = obj.JPY
  }
}