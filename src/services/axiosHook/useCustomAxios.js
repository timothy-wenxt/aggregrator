import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = import.meta.env.WENXT_BASEURL;

const useCustomAxios = () => {
 const navigate = useNavigate();
 const token = useSelector(state => state?.tokenAndMenuList?.token);

 useEffect(() => {
  //   const token = getDecryptedData('token');
  const isTokenAvailable = !!token;
  const noAuthEndpoints = ['auth/getLang'];
  const requestInterceptor = axios.interceptors.request.use(
   config => {
    if (isTokenAvailable && !noAuthEndpoints.includes(config.url)) {
     config.headers['Authorization'] = `Bearer ${token}`;
    }
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
    if (error?.response?.status === 401) {
     navigate('/login');
    }
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
