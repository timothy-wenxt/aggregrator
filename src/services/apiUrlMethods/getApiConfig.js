const GET_API_URL = {
    polList: {
        url: '/motor-insurance-policies'
    },
    consentList: {
        url: '/consents'
    },
    polListMain: {
        url: '/policy/getPolicies',
        baseURL: 'CLOUDURL'
    },
    polDetailsJSON: {
        url: '/policy/getPolicyDetails',
        baseURL: 'CLOUDURL'
    },
};

export default GET_API_URL;
