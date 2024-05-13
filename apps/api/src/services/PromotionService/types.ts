export interface ICreatePromotion{
  codeVoucher: string,
  totalVoucher: number,
  discount: number,
  startDate: Date,
  endDate: Date,
  eventId: number
}