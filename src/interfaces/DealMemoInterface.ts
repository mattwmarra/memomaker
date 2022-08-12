export default interface DealMemoInterface {
  artist: string,
  loanOut: string,
  project: string,
  company: string,
  compensation: {
    numerical: number,
    textual: string
  }
  contigency: string,
  guarantee: string,
  dates: [Date],
  location: string,
  payment: string,
  wireInformation: string,
  workDay: any,
  postProdDays: number,
  transportation: string,
  dressingRoom: string,
  directorsMeeting: string,
  perDiem: number,
  billingBlock: string,
  approvals: any,
  merchandising: string,
  union: string,
  fo: string,
  idemnities: string,
  provisions: string,
  MHWardrobe: string,
  security: number,
  assistant: number
  premiereTickets: number,
  physicalCopy: string
  signed : boolean
}
