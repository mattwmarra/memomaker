const initialState = {
  artistName: '',
  projectName: '',
  startDate: new Date().getUTCDate,
  role: '',
  artistEmail: '',
  artistCell: '',
  idNumber: '',
  artistAddress: undefined,

  // production company info
  companyName: '',
  producerName: '',
  producerEmail: '',
  producerPhone: '',

  // agency company info
  agencyName: '',
  agencyAddres: undefined,
  agencyEmail: '',
  agencyPhone: '',

  // production company info
  managerName: '',
  managerAddres: undefined,
  managerEmail: '',
  managerPhone: '',

  loanOutNumber: '',
  payOrPlay: 'pay',
  workDays: 0,
  travelDays: 0,
  payment: '',
  perDiem: 0,
  billingBlock: '',
  otherDetails: '',
  rehearsalsAndFittings: '',

  // details
  transportation: '',
  dressingRoom: '',
  lodging: '',
  hairDetails: '',
  makeupDetails: '',
  specialArrangements: '',
  postProductionDays: 0,
  ADRDays: 0,

  // agreements
  personalAssistant: 0,
  premiereTickets: 0,
  physicalCopy: '',
  additionalNotes: '',
};

export default initialState;
