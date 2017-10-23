import { connect } from 'react-redux';
import Checkout from '../components/Packages/CheckOut'
import {
    checkOut,
    addToCart
} from '../store/actions/CartActions';


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
    // console.log(cart);

}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartRequest: (userObj) => dispatch(addToCart(userObj)),
        checkoutRequest: (userObj) => dispatch(checkOut(userObj))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
