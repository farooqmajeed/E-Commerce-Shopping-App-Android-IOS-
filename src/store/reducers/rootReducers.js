import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer'


const rootReducer = combineReducers({
  auth: AuthReducer,
  cart: CartReducer
});
export default rootReducer;