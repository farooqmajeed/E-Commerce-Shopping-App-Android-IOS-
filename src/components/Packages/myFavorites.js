import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2, } from 'native-base';
import data from '.././data/products';
import * as firebase from '../../configs/db';
// import { addToCart } from '../../store/actions/CartActions';

class MyFavorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackbar: false
        }
        this.addToCart = this.addToCart.bind(this);
        // this.removeCart = this.removeCart.bind(this);
    }
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }

    addToCart = (id) => {
        let obj = id;
        var dataObj
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === obj) {
                dataObj = data[i];
                break;
            }
        }
        this.props.addToCartRequest(dataObj);
    }

    // addToCart(id) {
    //     let obj = id;
    //     var dataObj
    //     for (var i = 0; i < data.length; i++) {
    //         if (data[i].id === obj) {
    //             dataObj = data[i];
    //             break;
    //         }
    //     }
    //     this.props.addToCartRequest(dataObj);

    // }
    removeCart = (id) => {
        let obj = id;
        var dataObj
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === obj) {
                dataObj = data[i];
                break;
            }

        }
        this.props.removeCartRequest(dataObj);
    }
    // removeCart(id) {
    //     const { currentUser } = firebase.auth;
    //     var that = this;
    //     var getData
    //     var deletedObject
    //     var keyValue
    //     var pushId
    //     var dataObj
    //     var starCountRef = firebase.database.ref('users/' + currentUser.uid + '/Cart').orderByChild('id').equalTo(id).once('value', function (snapshot) {
    //         console.log("deleted VAlue", snapshot.val());
    //         getData = snapshot.val()
    //         for (let [key, value] of Object.entries(getData)) {
    //             console.log("got Object", key, value);
    //             deletedObject = key
    //             console.log("deletedObject", deletedObject);
    //         }
    //         that.props.removeCartRequest(deletedObject);

    //     });



    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#ecf0f1' }} >
                <Image source={{ uri: 'https://www.solutionhive.com/images/portfolioLogo1.png' }}
                    style={{ width: 250, height: 250, marginLeft: 20 }} />
                <Button block success style={{ margin: 5 }} onPress={() => Actions.dashboard()} >
                    <Text>Home</Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.myfavorite()} >
                    <Text> My Favorite </Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.checkout()} >
                    <Text>check out</Text>
                </Button>
            </View>
        );
        return (
            <Container style={styles.containerStyle}>
                <DrawerLayoutAndroid
                    ref="myDrawer"
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                >
                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button success style={styles.buttonStyle} onPress={this.openDrawer}  >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>My Favorite </Title>
                        </Body>
                    </Header >
                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>

                    </View>
                    <ScrollView>


                        <Card style={{ backgroundColor: '#ecf0f1', margin: 'auto', width: 400, marginLeft: 5, marginTop: 5, marginRight: 5 }} >

                            <CardItem style={{ margin: 'auto', height: 120, width: 380, marginLeft: 10, marginTop: 10, marginRight: 5 }}>
                                <Image source={{ uri: data[0].url }}
                                    style={{ width: 110, height: 100, marginLeft: -5, marginTop: -5 }} />
                                <Text> {data[0].name}  {'\n'}  {data[0].price}  </Text>
                                <Icon name='cart' style={{ marginLeft: 80 }}
                                    onPress={() => this.addToCart(data[0].id)}
                                />
                                <Icon name='trash' style={{ marginLeft: 5 }}
                                    onPress={() => this.removeCart(data[0].id)} />
                            </CardItem>

                            <CardItem style={{ margin: 'auto', height: 120, width: 380, marginLeft: 10, marginTop: 10, marginRight: 5 }}>
                                <Image source={{ uri: data[1].url }}
                                    style={{ width: 110, height: 100, marginLeft: -5, marginTop: -5 }} />
                                <Text> {data[1].name}  {'\n'}  {data[1].price}  </Text>
                                <Icon name='cart' style={{ marginLeft: 70 }} onPress={() => this.addToCart(data[1].id)} />
                                <Icon name='trash' style={{ marginLeft: 5 }} onPress={() => this.removeCart(data[1].id)} />
                            </CardItem>

                            <CardItem style={{ margin: 'auto', height: 120, width: 380, marginLeft: 10, marginTop: 10, marginRight: 5 }}>
                                <Image source={{ uri: data[2].url }}
                                    style={{ width: 110, height: 100, marginLeft: -5, marginTop: -5 }} />
                                <Text> {data[2].name}  {'\n'}  {data[2].price}  </Text>
                                <Icon name='cart' style={{ marginLeft: 70 }} onPress={() => this.addToCart(data[2].id)} />
                                <Icon name='trash' style={{ marginLeft: 5 }} onPress={() => this.removeCart(data[2].id)} />
                            </CardItem>



                            {/* {React.cloneElement(this.props.children, { ...this.props })} */}

                        </Card>


                    </ScrollView>

                </DrawerLayoutAndroid >

            </Container >

        );
    };
}
const styles = StyleSheet.create({
    containerStyle: {
        marginTop: -65
    },
    headerStyle: {
        backgroundColor: '#4BB543',
    },
    buttonStyle: {
        width: 40,

    },
    carditemStyle: {
        width: 420,
        height: 150,
        backgroundColor: '#FFCC80'
    }
});


// function mapStateToProps(state) {
//     return {
//         cart: state.cart

//     }
// }
// function mapDispatchToProps(dispatch) {
//     addToCartRequest: (cartObj) => dispatch(addToCart(cartObj))
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyFavorites);

// }
export default MyFavorites;