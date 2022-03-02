import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const middleWares = [ thunk, routeMiddleware];

export const store = createStore(rootReducer(history), compose(applyMiddleware(...middleWares)));
export { history };
