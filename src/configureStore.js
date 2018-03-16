import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const configureStore = () => {
  const middlewares = [thunk]

  const composeEnhancers = composeWithDevTools({})

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}

export default configureStore
