import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl, 
    headers: {
        'Content-Type': 'application/json'
    },
    // paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey}), // TODO: Create this as an issue in the project repo
    paramsSerializer: {
        serialize: params => queryString.stringify({...params, api_key: apiConfig.apiKey}),
    },
})

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    // console.log(response, 'in axiosClient');
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;