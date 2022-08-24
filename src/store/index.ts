import { legacy_createStore as createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

//关联Saga
import createSagaMiddleware from 'redux-saga'
import { defSaga } from './sagas'

const middleWareSaga = createSagaMiddleware()

const stroe = createStore(reducers, composeWithDevTools(applyMiddleware(middleWareSaga)))

//运行saga
middleWareSaga.run(defSaga)

export type rootState = ReturnType<typeof reducers>

export default stroe
