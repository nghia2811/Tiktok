import { UserRoleEnums } from '../user';

export type UserLoginRequestType = {
    email: string;
    password: string;
};
export type UserInfo = {
    email?: string;
    username?: string;
    userRoleEnums?: UserRoleEnums[];
    refreshToken?: string;
    token?: string;
};

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

interface UserLoginRequestAction {
    type: typeof USER_LOGIN_REQUEST;
}
interface UserLoginSuccessAction {
    type: typeof USER_LOGIN_SUCCESS;
    payload: UserInfo;
}
interface UserLoginFailAction {
    type: typeof USER_LOGIN_FAIL;
    payload: any;
}

export type UserLoginFetchActionTypes =
    | UserLoginRequestAction
    | UserLoginSuccessAction
    | UserLoginFailAction;

export type UserLogoutRequestType = {
    email: string;
    password: string;
};

export const USER_LOGOUT = 'USER_LOGOUT';

interface UserLogoutAction {
    type: typeof USER_LOGOUT;
}

export type UserLogoutFetchActionTypes = UserLogoutAction;
