import _ from 'lodash';
import { combineReducers } from 'redux';
import {
    UserInfo,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from '@type/login';

interface UserLoginState {
    loading: boolean;
    user: UserInfo;
    error?: string;
}

const userLoginInitialState: UserLoginState = {
    loading: false,
    user: localStorage.getItem('userInfo') !== undefined
        ? JSON.parse(localStorage.getItem('userInfo')!)
        : ({} as UserInfo)
};

export const userLogin = (state = userLoginInitialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true, user: {} };

        case USER_LOGIN_SUCCESS:
            return { loading: false, user: action.payload };

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };

        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    userLogin,
});
