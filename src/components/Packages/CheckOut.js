import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2, } from 'native-base';
import data from '.././data/products';
import * as firebase from '../../configs/db';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: ''
        }
        this.generateBill = this.generateBill.bind(this);
    }
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }

    addToCart(id) {
        let obj = id;
        var dataObj
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === obj) {
                dataObj = data[i];
                break;
            }
        }
        this.props.addToCartRequest(dataObj);
        setTimeout(() => {
            //    window.location.reload(true);\

        }, 50
        )
    }
    // removeCart = (id) => {
    //     let obj = id;
    //     var dataObj
    //     for (var i = 0; i < data.length; i++) {
    //         if (data[i].id === obj) {
    //             dataObj = data[i];
    //             break;
    //         }
    //     }
    //     this.props.removeCartRequest(dataObj);
    // }

    componentDidMount() {
        console.log("props", this.props)
        this.props.checkoutRequest(data);
    }

    generateBill() {
        console.log("props", this.props.cart);
        product = []
        product = this.props.cart.CheckOut
        console.log("product", product);
        var total = 0
        for (var i = 0; i < product.length; i++) {
            if (product[i].quantity > 1) {
                total = product[i].quantity * product[i].price + parseInt(total)

            }
            this.setState({
                totalPrice: "Total Price :" + total
            })
        }
        console.log("total", total);


    }
    render() {

        const CheckOutData = this.props && this.props.cart && this.props.cart.CheckOut ? this.props.cart.CheckOut : [];
        console.log("chechOut ", CheckOutData);

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
                            <Title> Check Out </Title>
                        </Body>
                    </Header >
                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>

                    </View>
                    <ScrollView>

                        {/* <Button block success onPress={() => this.viewProducts()}><Text>Veiw products</Text></Button> */}

                        <Card style={{ backgroundColor: '#ecf0f1', margin: 'auto', width: 400, marginLeft: 5, marginTop: 5, marginRight: 5 }} >
                            {CheckOutData.map((item, index) => {
                                console.log("index", index)
                                return (
                                    <CardItem style={{ margin: 'auto', height: 120, width: 380, marginLeft: 10, marginTop: 10, marginRight: 5 }}>
                                        <Image source={{ uri: item.url }}
                                            style={{ width: 110, height: 100, marginLeft: -5, marginTop: -5 }} />
                                        <Text style={{ flex: 1 }}>
                                            Product: Name:  {item.name} {'\n'}
                                            Price:  {item.price} {'\n'}
                                            Currency: {item.currency} {'\n'}
                                            Quantity:    {item.quantity} {'\n'}
                                            {'\n'}
                                        </Text>
                                        <Icon name='cart' style={{ marginLeft: 70 }} onPress={() => this.addToCart(data[index].id)} />
                                    </CardItem>
                                )
                            })}

                        </Card>
                        <Button block success onPress={() => this.generateBill()}><Text>Generate Bill</Text></Button>
                        <CardItem style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>
                            <H2> {this.state.totalPrice} </H2>
                        </Text>
                    </CardItem>

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

export default Checkout;