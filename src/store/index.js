import { createStore, applyMiddleware } from 'redux';
import toDoApp from '../reducers';
import createSagaMiddleware from 'redux-saga';

import { loadToDoList } from '../actions';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
store.dispatch(loadToDoList());

export default store;
