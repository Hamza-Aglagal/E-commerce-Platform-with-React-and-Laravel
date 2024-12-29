import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import Reducers from '../Reducers/Reducers'


const Store = createStore(Reducers , applyMiddleware(thunk) )



export default Store