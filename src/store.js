import { createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga'

import rootReducers from "./state/reducers/index";

import rootSaga from './state/Saga/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default store;