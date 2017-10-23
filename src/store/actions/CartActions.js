import {
    CART_ADD,
    CART_REMOVE,
    CART_ADD_SUCCESSFULLY,
    CART_REMOVE_SUCCESSFULLY,
    CHECK_OUT,
    CHECK_OUT_SUCCESSFULLY
}
    from '../actions/types';
import * as firebase from '../../configs/db';
import { AsyncStorage } from 'react-native';

// export function addToCart(data) {
//     const { currentUser } = firebase.auth;
//     return dispatch => {
//         dispatch(addToCartRequest());
//         return firebase.database.ref('/users/' + currentUser.uid + '/Cart').push(data, function (err) {
//             console.log('data', data)
//             if (err) {
//                 throw err
//             } else {
//                 dispatch(cartAddSuccessfully(data));
//             }
//         })
//     }
// }
// const arr = []

export function addToCart(data) {
    return dispatch => {
        dispatch(addToCartRequest());
        //AsyncStorage.removeItem('storeItem');
        return AsyncStorage.getItem('storeItem', (err, result) => {
            result = JSON.parse(result);
            let oldData = result;
            if (!oldData || !oldData.length) {
                oldData = [];
                data.quantity = 1;
                oldData.push(data)
            } else {
                let isOldObject = false;
                for (var i = 0; i < oldData.length; i++) {
                    if (oldData[i].id == data.id) {
                        oldData[i].quantity += 1;
                        isOldObject = true;
                    }
                }
                if (!isOldObject) {
                    data.quantity = 1;
                    oldData.push(data)
                }
            }


            return AsyncStorage.setItem("storeItem", JSON.stringify(oldData), () => {
                AsyncStorage.getItem('storeItem', (err, innerResult) => {
                    console.log("RESULT", JSON.parse(innerResult));
                    dispatch(cartAddSuccessfully(JSON.parse(innerResult)));
                })
            })
        })
    }
}


function addToCartRequest() {
    return {
        type: CART_ADD
    };
}

function cartAddSuccessfully(data) {
    return {
        type: CART_ADD_SUCCESSFULLY,
        data
    };
}

// export function removeCart(data) {
//     console.log("got key <<" + data + ">>");

//     const { currentUser } = firebase.auth;
//     return dispatch => {
//         dispatch(removeFromCart());
//         return firebase.database.ref('/users/' + currentUser.uid + '/Cart/' + data).remove().then(function () {
//             dispatch(cartRemoveSuccessfully("Deleted"));
//             console.log("testing done")
//         }).catch(function (error) {
//             console.log("Errroooor >>>> ".error)
//         })
//     }
// }
export function removeCart(data) {
    return dispatch => {
        dispatch(removeFromCart());
        return AsyncStorage.getItem('storeItem', (err, result) => {
            result = JSON.parse(result);
            let oldData = result;
            if (!oldData || !oldData.length) {
                oldData = [];
                // data.quantity = 1;
                oldData.push(data)
            } else {
                let isOldObject = false;
                for (var i = 0; i < oldData.length; i++) {
                    if (oldData[i].id == data.id) {
                        if (oldData[i].quantity > 1) {
                            oldData[i].quantity -= 1;
                            isOldObject = true;
                            console.log("oldData", oldData);
                            return AsyncStorage.setItem("storeItem", JSON.stringify(oldData), () => {
                                AsyncStorage.getItem('storeItem', (err, innerResult) => {
                                    console.log("RESULT", JSON.parse(innerResult));
                                    dispatch(cartRemoveSuccessfully(JSON.parse(innerResult)));
                                })
                            })

                        } else {
                            let delObj = oldData[i]
                            delObj = oldData.filter(function (obj) {
                                return obj.id !== data.id;
                            })
                            console.log(JSON.stringify(delObj, null, ''));
                            return AsyncStorage.setItem("storeItem", JSON.stringify(delObj), () => {
                                AsyncStorage.getItem('storeItem', (err, innerResult) => {
                                    console.log("RESULT", JSON.parse(innerResult));
                                    dispatch(cartRemoveSuccessfully(JSON.parse(innerResult)));
                                })
                            })
                        }
                    }
                    if (!isOldObject) {
                        // oldData.quantity = 1
                        // oldData.push(data)
                    }
                }
            }
        })
    }
}

function removeFromCart() {
    return {
        type: CART_REMOVE
    };
}

function cartRemoveSuccessfully() {
    return {
        type: CART_REMOVE_SUCCESSFULLY

    };
}



export function checkOut() {
    return dispatch => {
        dispatch(checkoutRequest());
        // AsyncStorage.removeItem('storeItem');
        return AsyncStorage.getItem('storeItem', (err, result) => {
            result = JSON.parse(result);
            console.log(result);
            dispatch(checkoutSuccessfully(result));
        })
    }
}

function checkoutRequest() {
    return {
        type: CHECK_OUT
    };
}

function checkoutSuccessfully(data) {
    return {
        type: CHECK_OUT_SUCCESSFULLY,
        data

    };
}