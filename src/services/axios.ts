import axios from 'axios';
import _ from 'lodash';

import { history } from '@redux';

const httpService = axios.create({ timeout: 5000 });
const httpServiceWFile = axios.create({ timeout: 5000 });
const httpServiceWToken = axios.create({ timeout: 5000 });

httpService.interceptors.request.use(
    async config => {
        config.headers = {
            'Content-Type': 'application/json',
        };

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

httpService.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },

    async error => {
        const responseData = _.get(error, 'response.data');

        if (responseData) {
            return Promise.reject(responseData);
        }
        return Promise.reject('CONNECTION_TIMEOUT');
    },
);

httpServiceWFile.interceptors.request.use(
    async config => {
        const { token } = JSON.parse(localStorage.getItem('userInfo')!) ?? null;
        if (!token) {
            return Promise.reject(new Error('Undefined token'));
        }

        config.headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        };

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

httpServiceWFile.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },

    async error => {
        const responseData = _.get(error, 'response.data');

        if (responseData) {
            return Promise.reject(responseData);
        }
        return Promise.reject('CONNECTION_TIMEOUT');
    },
);

httpServiceWToken.interceptors.request.use(
    async config => {
        const { token } = JSON.parse(localStorage.getItem('userInfo')!) ?? null;
        if (!token) {
            return Promise.reject(new Error('Undefined token'));
        }

        config.headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

httpServiceWToken.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },

    async error => {
        const responseData = _.get(error, 'response.data');

        if (responseData) {
            if (responseData.errorCode === 'CC_7') {
                localStorage.removeItem('userInfo');
                history.push('/login');
            }
            return Promise.reject(responseData);
        }
        return Promise.reject('CONNECTION_TIMEOUT');
    },
);

export { httpService, httpServiceWToken, httpServiceWFile };
