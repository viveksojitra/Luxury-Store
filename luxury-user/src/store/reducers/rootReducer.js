import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    authReducer,
    productReducer,
    cartReducer,
});

export default rootReducer;
