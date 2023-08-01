import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {productReducer} from './proudctReducer'
import { orderReducer } from './orderReducer';
import cartReducer from './cartReducer'


const rootReducer = combineReducers({
    authReducer,
    productReducer,
    orderReducer,
    cartReducer
})

export default rootReducer;