import { createStore, compose, applyMiddleware } from "redux";
import employees from './reducer';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router';
import history from './history'
import saga from './saga'

const initialState = {

}

const sagaMiddleware = createSagaMiddleware();

const middleWare =
    process.env.NODE_ENV !== 'production'
        ? [logger, routerMiddleware(history), sagaMiddleware]
        : [routerMiddleware(history), sagaMiddleware]


const composeEnchancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;


const store = createStore(
    employees,
    initialState,
    composeEnchancers(applyMiddleware(...middleWare))
)

sagaMiddleware.run(saga)

export default store