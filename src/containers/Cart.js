import { connect } from 'react-redux';
import MyFavorites from '../components/Packages/myFavorites'
import { addToCart, removeCart } from '../store/actions/CartActions';

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
    // console.log(cart);

}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartRequest: (userObj) => dispatch(addToCart(userObj)),
        removeCartRequest: (userObj) => dispatch(removeCart(userObj))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyFavorites);
