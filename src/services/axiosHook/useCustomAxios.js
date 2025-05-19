import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = import.meta.env.WECORE_LOCALURL;

const useCustomAxios = () => {
    const navigate = useNavigate();
    const polDetails = useSelector((state) => state?.polDetails?.policyDetails);

    const getCustomHeaders = (url) => {
        if (!url) return {};

        if (url.includes('https://52dqkv2bge.execute-api.us-east-1.amazonaws.com/')) {
            return {
                'o3-provider-id': 'UnionInsurance',
                'o3-caller-org-id': 'GargashInsuranceServices',
                'o3-caller-client-id': 'client789',
                'o3-caller-software-statement-id': 'stmt001',
                'o3-api-uri': 'https://cbuae.wenxt.com/v3/motor-insurance-policies',
                'o3-api-operation': 'GET',
                'o3-caller-interaction-id': 'interaction-uae-1002',
                'o3-ozone-interaction-id': 'interaction-uae-1002',
                'o3-consent-id': polDetails?.consentId,
                'o3-psu-identifier': 'eyJ1c2VySWQiOiAidXNlci11YWUtYWJjLTIzNCJ9',
                'o3-is-caap-consent-operation': 'true',
            };
        }
        return {};
    };


    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            config => {
                console.log("config : ", config.baseURL)
                const customHeaders = getCustomHeaders(config.baseURL);
                config.headers = {
                    ...config.headers,
                    ...customHeaders,
                };
                return config;
            },
            error => {
                return Promise.reject(error);
            },
        );

        const responseInterceptor = axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                // if (error?.response?.status === 401) {
                //  navigate('/login');
                // }
                return Promise.reject(error);
            },
        );

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return axios;
};

export default useCustomAxios;
