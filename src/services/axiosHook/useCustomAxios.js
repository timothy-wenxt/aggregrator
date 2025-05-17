import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = import.meta.env.WECORE_BASEURL;

const useCustomAxios = () => {
    const navigate = useNavigate();
    const polDetails = useSelector((state) => state?.polDetails?.policyDetails);

    const getCustomHeaders = (url) => {
        if (!url) return {};

        if (url.includes('/motor-insurance-policies')) {
            return {
                'o3-provider-id': 'bank123',
                'o3-caller-org-id': 'org456',
                'o3-caller-client-id': 'client789',
                'o3-caller-software-statement-id': 'stmt001',
                'o3-api-uri': 'https://api.example.com/motor-insurance-policies',
                'o3-api-operation': 'GET',
                'o3-caller-interaction-id': 'off212',
                'o3-ozone-interaction-id': 'odss1112',
                'o3-consent-id': polDetails?.consentId,
                'o3-psu-identifier': 'encoded-json',
                'o3-is-caap-consent-operation': 'true',
            };
        }
        return {};
    };


    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            config => {
                const customHeaders = getCustomHeaders(config.url);
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
