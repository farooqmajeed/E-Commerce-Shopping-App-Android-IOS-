import { CART_ADD, CART_REMOVE, CHECK_OUT_SUCCESSFULLY } from '../actions/types';

const INITIAL_STATE = {


};

export default CartReducer = (state = INITIAL_STATE, action) => {
    // console.log(action);

    switch (action.type) {
        case CART_ADD: {
            return Object.assign({}, state, { cartAdd: action.data });

        }
        case CART_REMOVE: {
            return state;

        }
        case CHECK_OUT_SUCCESSFULLY: {
            return Object.assign({}, state, { CheckOut: action.data });

        }
        default:
            return state;
    }
}
