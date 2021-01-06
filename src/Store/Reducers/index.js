import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    ProductReducer,
    UserReducer
});

export default rootReducer;