import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { store } from '../store';
import { userLogin } from './login.reducer';

export const rootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history) as Reducer,
		login: userLogin,
    });


export type RootState = ReturnType<typeof store.getState>;
