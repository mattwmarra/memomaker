const labels = {
 /*
  * PRIMARY GROUP DATA
  */
  Artist: {
    name: 'Artist Name',
    id: 'artist',
    type: 'text',
    placeholder: 'Kit Harrington',
    value: '',
    description: '',
    group: 'primary',
  },
  'Project Name': {
    name: 'Project Name',
    id: 'project',
    type: 'text',
    placeholder: '',
    value: '',
    description: 'Name of the project, include whether it is a feature, television, or new media',
    group: 'primary',
  },
  'Start Date': {
    name: 'Project Start Date',
    id: 'startDate',
    type: 'date',
    placeholder: '',
    value: '',
    description: '',
    group: 'primary',
  },
  Role: {
    name: 'Role',
    id: 'role',
    type: 'text',
    placeholder: 'John Snow',
    value: '',
    description: '',
    group: '',
},
  'Artist Email': {
    name: 'Artist Email',
    id: 'artistEmail',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: 'primary',
  },
  'Artist Cell': {
    name: 'Artist Cell',
    id: 'artistCell',
    type: 'tel',
    placeholder: '',
    value: '',
    description: '',
    group: 'primary',
  },
  'Union Number / Social Security Number': {
    name: 'Union Number / Social Security Number',
    id: 'idNumber',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: 'primary',
  },
  'Mailing Address': {
    name: 'Mailing Address',
    id: 'address',
    type: 'address',
    placeholder: '',
    value: '',
    description: '',
    group: 'primary',
  },
   /*
  * PRODUCTION COMPANY DATA
  */
  'Production Company': {
    name: 'Production Company',
    id: 'productionCompany',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: 'productionCompany',
  },
  'Producer': {
    name: 'Producer',
    id: 'producer',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: 'productionCompany',
  },
  'Production Phone': {
    name: 'Phone',
    id: 'productionPhone',
    type: 'tel',
    placeholder: '',
    value: '',
    description: '',
    group: 'productionCompany',
  },
  'Production Email': {
    name: 'Email',
    id: 'productionEmail',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: 'productionCompany',
  },
     /*
  * Agency DATA
  */
  'Agency Name': {
    name: 'Agency Name',
    id: 'agencyName',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: '',
  },
  'Agency Address': {
    name: 'Agency Address',
    id: 'producer',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: '',
  },
  'Production Phone': {
    name: 'Phone',
    id: 'productionPhone',
    type: 'tel',
    placeholder: '',
    value: '',
    description: '',
    group: '',
  },
  'Production Email': {
    name: 'Email',
    id: 'productionEmail',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: '',
  },
  'Loan/Out': {
    name: 'Loan Out',
    id: 'loanOut',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: '',
  },

  'Compensation': {
    name: 'Compensation',
    id: 'compensation',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Contingency': {
    name: 'Contingency',
    id: 'contigency',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Guarantee': {
    name: 'Guarantee',
    id: 'guarantee',
    type: 'longtext',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Dates': {
    name: 'Dates',
    id: 'dates',
    type: 'date',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Location': {
    name: 'Location',
    id: 'location',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Payment': {
    name: 'Payment',
    id: 'payment',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Wire Information': {
    name: 'Wire Information',
    id: 'wireInformation',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Work Days': {
    name: 'Work Days',
    id: 'workDay',
    type: 'number',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Post Production Days': {
    name: 'Post Production Days',
    id: 'postProdDays',
    type: 'number',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Transportation': {
    name: 'Transportation',
    id: 'transportation',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Dressing Room': {
    name: 'Dressing Room',
    id: 'dressingRoom',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Directors Meeting': {
    name: 'Directors Meeting',
    id: 'directorsMeeting',
    type: 'longtext',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Per Diem': {
    name: 'Per Diem',
    id: 'perDiem',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Billing Block': {
    name: 'Billing Block',
    id: 'billingBlock',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Approvals': {
    name: 'Approvals',
    id: 'approvals',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Merchandising': {
    name: 'Merchandising',
    id: 'merchandising',
    type: 'longtext',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Union': {
    name: 'Union',
    id: 'union',
    type: 'longtext',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'F&O': {
    name: 'F&O',
    id: 'fo',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Idemnities': {
    name: 'Idemnities',
    id: 'idemnities',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Special Provisions': {
    name: 'Special Provisions',
    id: 'provisions',
    type: 'longtext',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Makeup, Hair, & Wardrobe': {
    name: 'Makeup, Hair, & Wardrobe',
    id: 'MHWardrobe',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Security Guard': {
    name: 'Security Guard',
    id: 'security',
    type: 'number',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Personal Assistant': {
    name: 'Personal Assistant',
    id: 'assistant',
    type: 'number',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'Premiere Tickets': {
    name: 'Premiere Tickets',
    id: 'premiereTickets',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
  'DVD / Blue-Ray Copy': {
    name: 'DVD / Blue-Ray Copy',
    physicalCopy: '',
    id: '',
    type: 'text',
    placeholder: '',
    value: '',
    description: '',
    group: ''
  },
};
export default labels;
