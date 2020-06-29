import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import postReducer from './reducers/postReducer'

const middleWare = [thunk]

const rootReducer = combineReducers({
  postInCombine: postReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(...middleWare)
)

export default store