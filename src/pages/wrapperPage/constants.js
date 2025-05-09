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