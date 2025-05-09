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