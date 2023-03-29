import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

//关联Saga
import createSagaMiddleware from 'redux-saga';
import { defSaga } from './sagas';

const middleWareSaga = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleWareSaga)));

//运行saga
middleWareSaga.run(defSaga);

export type RootState = ReturnType<typeof reducers>;

export default store;
