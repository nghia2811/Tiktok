import _ from 'lodash';
import { ActionCreator, Dispatch } from 'redux';

import { httpService } from '@services/axios';
import { BaseError } from '@type/common';
import {
    UserLoginFetchActionTypes,
    UserInfo,
    UserLogoutFetchActionTypes,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from '@type/login';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const userLoginRequest: ActionCreator<UserLoginFetchActionTypes> = () => {
    return { type: USER_LOGIN_REQUEST };
};
const userLoginSuccess: ActionCreator<UserLoginFetchActionTypes> = (user: UserInfo) => {
    return { type: USER_LOGIN_SUCCESS, payload: user };
};
const userLoginFail: ActionCreator<UserLoginFetchActionTypes> = (error: BaseError) => {
    return { type: USER_LOGIN_FAIL, payload: error };
};

export const login =
    ({ email, password }: { email: string; password: string }) =>
    async (dispatch: Dispatch) => {
        try {
            dispatch(userLoginRequest());

            const { data } = await httpService.post(
                `${BASE_URL}:8009/v1/api/auth/user/login`,
                { email, password, loginType: 'E' },
                config,
            );

            dispatch(userLoginSuccess(data));
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error) {
            dispatch(userLoginFail(error));
        }
    };

const userLogoutRequest: ActionCreator<UserLogoutFetchActionTypes> = () => {
    return { type: USER_LOGOUT };
};

export const logout = () => async (dispatch: Dispatch) => {
    try {
        dispatch(userLogoutRequest());

        localStorage.removeItem('userInfo');
    } catch (error) {
        console.log(error);
    }
};
