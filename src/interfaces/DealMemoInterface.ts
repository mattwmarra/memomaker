import Address from '../address.ts';

export default interface DealMemoInterface {
  artistName: string;
  projectName: string;
  startDate: Date;
  role: string;
  artistEmail: string;
  artistCell: string;
  idNumber: string;
  artistAddress: Address;

  // production company info
  companyName: string;
  producerName: string;
  producerEmail: string;
  producerPhone: string;

  // agency company info
  agencyName: string;
  agencyAddres: Address;
  agencyEmail: string;
  agencyPhone: string;

  // production company info
  managerName: string;
  managerAddres: Address;
  managerEmail: string;
  managerPhone: string;

  loanOutNumber: string;
  payOrPlay: any;
  workDays: number;
  travelDays: number;
  payment: string;
  perDiem: number;
  billingBlock: string;
  otherDetails: string;
  rehearsalsAndFittings: string;

  // details
  transportation: string;
  dressingRoom: string;
  lodging: string;
  hairDetails: string;
  makeupDetails: string;
  specialArrangements: string;
  postProductionDays: number;
  ADRDays: number;

  // agreements
  personalAssistant: number;
  premiereTickets: number;
  physicalCopy: string;
  additionalNotes: string;
}
