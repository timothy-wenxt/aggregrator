import { CreditCard, DollarSign, User } from "lucide-react";

export const stepperData = [
    {
        title: 'Consent',
    },
    {
        title: 'Authorize',
    },
    {
        title: 'Complete',
    },
];

export const accordionDataAuthorize = [
    {
        id: 'quoteRelated',
        title: 'Quote Related Information',
        icon: 'message',
        isMainAccordion: true,
        subAccordions: [
            {
                id: 'customerDetails',
                title: 'Your customer details',
                icon: 'user',
                items: [
                    'Full name and contact information',
                    'Address and location details',
                    'Account identification numbers'
                ]
            },
            {
                id: 'policyDetails',
                title: 'Policy details',
                icon: 'file',
                items: [
                    'Coverage information',
                    'Policy terms and conditions',
                    'Effective dates and periods'
                ]
            },
            {
                id: 'productInfo',
                title: 'Product information',
                icon: 'grid',
                items: [
                    'Product specifications',
                    'Features and benefits',
                    'Additional options'
                ]
            }
        ]
    },
    {
        id: 'paymentDetails',
        title: 'Payment details',
        icon: 'creditCard',
        isMainAccordion: true,
        items: [
            'Payment method information',
            'Billing address',
            'Transaction details'
        ]
    }
];

export const accordionDataPlanDetails = [
    {
        id: 'policyDetails',
        title: 'Payment details',
        icon: 'message',
        isMainAccordion: true,
        items: [
            'Payment method information',
            'Billing address',
            'Transaction details'
        ]
    },
    {
        id: 'custDetails',
        title: 'Your customer details',
        icon: 'grid',
        isMainAccordion: true,
        items: [
            'Payment method information',
            'Billing address',
            'Transaction details'
        ]
    },
    {
        id: 'proInfo',
        title: 'Product information',
        icon: 'creditCard',
        isMainAccordion: true,
        items: [
            'Payment method information',
            'Billing address',
            'Transaction details'
        ]
    }
];

export const selectPolicy = [
    {
        id: 1,
        name: 'Car',
        number: '10 22345',
        expires: '12/09/2025',
        polNo: '6674635264347'
    },
    {
        id: 2,
        name: 'MotorBike',
        number: '45 35665',
        expires: '19/07/2025',
        polNo: '7874584758475'
    },
]

export const policiesConsent = [
    {
        id: 1,
        policyNumber: '2011356',
        phoneNumber: '1900 8988 5456',
        expiryDate: '02/11/2019'
    },
    {
        id: 2,
        policyNumber: '2022471',
        phoneNumber: '1900 8988 1234',
        expiryDate: '15/03/2020'
    },
    {
        id: 3,
        policyNumber: '2033592',
        phoneNumber: '1900 8988 6789',
        expiryDate: '24/06/2020'
    }
];

export const companyName = 'WeNxt Tech'

export const customCol = 'WeNxt Tech'

export const connections = [
    {
        id: 1,
        name: 'WeNxt Tech Chennai',
        accounts: 3,
        lastShared: '31/03/2024 11:45',
        expires: '30/03/2025',
        status: 'Active'
    },
    {
        id: 2,
        name: 'WeNxt Tech Bangalore',
        accounts: 1,
        lastShared: '16/10/2024 15:45',
        expires: '10/02/2025',
        status: 'Active'
    },
    {
        id: 3,
        name: 'WeNxt Tech Mumbai',
        accounts: 1,
        lastShared: '1/9/2024 08:30',
        expires: '30/07/2025',
        status: 'Suspended'
    }
];

export const accordionDataConsent = [
    {
        id: 'accountDetails',
        icon: 'userImg',
        title: 'Your Account Details',
        content: [
            'Your account name and number',
            'Your account balance'
        ]
    },
    {
        id: 'accountTransactions',
        icon: 'infoImg',
        title: 'Your Account Transactions',
        content: [
            'Your incoming transactions.',
            'Your outgoing transactions.',
            'Details of your incoming transactions.',
            'Details of your outgoing transactions.'
        ]
    },
    {
        id: 'regularPayments',
        icon: 'payImg',
        title: 'Your Regular Payments',
        content: [
            'Direct Debits',
            'Scheduled Payments'
        ]
    }
];

export const dateInfoListConsent = [
    {
        id: 1,
        label: 'First Connected',
        value: '31 March 2024',
        icon: 'calender'
    },
    {
        id: 2,
        label: 'Connection Expires',
        value: '30 March 2025',
        icon: 'calender'
    },
    {
        id: 3,
        label: 'Last Updated',
        value: '5 June 2024',
        icon: 'refresh'
    }
];

export const updatesListConsent = [
    { date: '5 June 2024', description: 'Updated account access permissions' },
    { date: '15 May 2024', description: 'Changed transaction data access' },
    { date: '20 April 2024', description: 'Initial setup completed' },
    { date: '31 March 2024', description: 'First connected' }
];


 export const data = [
  { name: '10am', value: 40 },
  { name: '11am', value: 55 },
  { name: '12am', value: 65 },
  { name: '01am', value: 35 },
  { name: '02am', value: 50 },
  { name: '03am', value: 70 },
  { name: '04am', value: 30 },
  { name: '05am', value: 60 },
  { name: '06am', value: 80 },
  { name: '07am', value: 90 }
];

 export const cardData = [
    { title: 'Data Request Received', value: 27},
    { title: 'Data Request Responded', value: 3298 },
    { title: 'Data Request Failed', value: 1111 },
    { title: 'Data Request Inprogress', value: 1111 },
    { title: 'Avg Response Time', value: '86%'},
    { title: 'Unique TPP Visitors', value: '+34%'},
  ];

export const statusData = [
  { name: 'To Do', value: 28 },
  { name: 'In-progress', value: 6 },
  { name: 'Done', value: 6 },
];

export const tableData = [

    {
      requestDate: '2025-05-11 10:00 AM',
      requestType: 'New',
      tppName: 'TPP A',
      productType: 'Health',
      productName: 'Product 1',
      policyNumber: 'P12345',
      customerName: 'John Doe',
      respondedTime: '2025-05-11 10:30 AM',
      status: 'Completed',
      consentId: 'C123',
      consentType: 'Opt-in',
    },
    {
      requestDate: '2025-05-11 11:00 AM',
      requestType: 'Renewal',
      tppName: 'TPP B',
      productType: 'Life',
      productName: 'Product 2',
      policyNumber: 'P12346',
      customerName: 'Jane Smith',
      respondedTime: '2025-05-11 11:20 AM',
      status: 'Pending',
      consentId: 'C124',
      consentType: 'Opt-out',
    },
     {
      requestDate: '2025-05-12 09:00 AM',
      requestType: 'Renewal',
      tppName: 'TPP B',
      productType: 'Life',
      productName: 'Product 2',
      policyNumber: 'P12346',
      customerName: 'Jane Smith',
      respondedTime: '2025-05-12 11:20 AM',
      status: 'Pending',
      consentId: 'C124',
      consentType: 'Opt-out',
    },
     {
      requestDate: '2025-05-13 08:00 AM',
      requestType: 'Renewal',
      tppName: 'TPP B',
      productType: 'Life',
      productName: 'Product 2',
      policyNumber: 'P12346',
      customerName: 'Jacob',
      respondedTime: '2025-05-13 11:20 AM',
      status: 'Pending',
      consentId: 'C124',
      consentType: 'Opt-out',
    },
     {
      requestDate: '2025-05-11 11:00 AM',
      requestType: 'Renewal',
      tppName: 'TPP B',
      productType: 'Life',
      productName: 'Product 2',
      policyNumber: 'P12346',
      customerName: 'Jane Smith',
      respondedTime: '2025-05-11 11:20 AM',
      status: 'Pending',
      consentId: 'C124',
      consentType: 'Opt-out',
    },
  ];
export const COLORS = ['#1e3a8a', '#1d4ed8', '#06b6d4'];