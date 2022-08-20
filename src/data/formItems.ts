import FormItemClass  from "../FormItemClass.ts";

export const primary = [
  new FormItemClass('Artist Name', 'artist', 'text', 'Kit Harrington'),
  new FormItemClass('Project Name', 'projectName', 'text', 'Game of Thrones'),
  new FormItemClass('Project Start Date', 'startDate', 'date'),
  new FormItemClass('Role', 'role', 'text', 'Kit Harrington'),
  new FormItemClass('Email', 'artistEmail', 'text', 'jonsnow@example.com'),
  new FormItemClass('Cell', 'artistCell', 'tel', '(000) 000 0000'),
  new FormItemClass('Union Number/Social Security Number', 'idNumber', 'text', '############'),
  new FormItemClass('Mailing Address', 'address', 'address'),
];

export const production = [
  new FormItemClass('Production Company', 'companyName', 'text', 'Home Box Office'),
  new FormItemClass('Producer', 'producerName', 'text', 'D&D'),
  new FormItemClass('Email', 'producerEmail', 'text', 'dnd@example.com'),
  new FormItemClass('Phone', 'producerPhone', 'tel', '(000) 000 0000'),
];

export const agency = [
  new FormItemClass('Agency', 'agencyName', 'text', 'House Stark'),
  new FormItemClass('Agency Address', 'agencyAddress', 'address'),
  new FormItemClass('Email', 'agencyEmail', 'text', 'dnd@example.com'),
  new FormItemClass('Phone', 'agencyPhone', 'tel', '(000) 000 0000'),
];
export const manager = [
  new FormItemClass('Manager', 'managerName', 'text', 'House Stark'),
  new FormItemClass('Manager Address', 'managerAddress', 'address'),
  new FormItemClass('Email', 'managerEmail', 'text', 'dnd@example.com'),
  new FormItemClass('Phone', 'managerPhone', 'tel', '(000) 000 0000'),
];
export const compensation = [
  new FormItemClass('Loan/Out: EIN Number', 'loanoutNumber', 'text', '##############'),
  new FormItemClass('Pay or Play', 'payOrPlay', 'radio'),
  new FormItemClass('Work Days', 'workDays', 'text', '0'),
  new FormItemClass('Travel Days', 'travelDays', 'text', '0'),
  new FormItemClass('Payment', 'payment', 'text', '0'),
  new FormItemClass('Per Diem', 'perDiem', 'text', '0'),
  new FormItemClass('Billing Name', 'billingName', 'text', '0'),
  new FormItemClass('Other Details', 'details', 'bigText', 'Additional details'),
  new FormItemClass('Rehearsals/Fittings', 'rehearsalsAndFittings', 'bigText', ''),
];

export const details = [
  new FormItemClass('Transportation', 'transportation', 'bigText', ''),
  new FormItemClass('Dressing Room/Trailer', 'dressingRoom', 'text'),
  new FormItemClass('Lodging', 'lodging', 'text', 'First class accommodations or best available'),
  new FormItemClass('Hair', 'hairDetails', 'text', 'Production will pay for Hair stylist up Artist'),
  new FormItemClass('Makeup', 'makeupDetails', 'text', 'Production will pay for Artist\'s Make up Artist'),
  new FormItemClass('Special Agreements', 'specialAgreements', 'bigText', 'Production will provide only Green M&M\'s for Artist Dressing Room'),
  new FormItemClass('Post Production', 'postProductionDays', 'text', '0', 'Number of days allowed for post-production'),
  new FormItemClass('ADR Days', 'adrDays', 'text', '0', 'Number of days allowed for ADR'),
];

export const agreements = [
  new FormItemClass('Personal Assistant', 'personalAssistant', 'text', ''),
  new FormItemClass('Premiere Tickets', 'premiereTickets', 'text', ''),
  new FormItemClass('DVD/Blu Day Copy', 'digitalCopyInfo', 'text', ''),
  new FormItemClass('Additional Notes', 'agreementNotes', 'bigText', ''),
];
