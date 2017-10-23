import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2 } from 'native-base';
// import logo from '../images'
class Dashboard extends Component {
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }
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
                            <Title>Rashan Walay</Title>
                        </Body>
                    </Header >
                    <Header searchBar rounded style={styles.headerStyle} >
                        <Item>
                            <Icon name='search' />
                            <Input placeholder=" Smartphone " />
                        </Item>

                    </Header>

                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>

                    </View>
                    <ScrollView>

                        <CardItem style={styles.carditemStyle}>


                            <Image source={{ uri: 'https://www.romanoriginals.co.uk/Content/img/static/christmas-promotion/big-banner.jpg' }}
                                style={{ width: 420, height: 150, marginTop: -5, marginLeft: -20 }} />
                        </CardItem>


                        <Card style={{ backgroundColor: '#ecf0f1', margin: 'auto', width: 400, marginLeft: 5, marginTop: 5, marginRight: 5 }} >
                            <Text style={{ color: 'black', marginRight: 5, width: 100 }}> My Favorite </Text>
                            <Text style={{ marginLeft: 310, width: 100, marginTop: -18 }} onPress={() => Actions.myfavorite()}> VIEW MORE</Text>

                            <CardItem style={{ backgroundColor: '#4BB543', margin: 'auto', height: 150, width: 120, marginLeft: 10, marginTop: 10, marginRight: 5 }}>
                                <Image source={{ uri: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/HA/MHAK2/MHAK2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=08AkF2' }}
                                    style={{ width: 100, height: 100, marginLeft: -5, marginTop: -40 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 100, height: 30, marginTop: 110, marginLeft: -100 }}>
                                    <Text onPress={() => Actions.packageDetails()} >Purchase</Text>

                                </CardItem>

                            </CardItem>



                            <CardItem style={{ backgroundColor: '#4BB543', margin: 'auto', height: 150, width: 120, marginLeft: 140, marginTop: -150, marginRight: 5 }}>

                                <Image source={{ uri: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/HA/MHAK2/MHAK2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=08AkF2' }}
                                    style={{ width: 100, height: 100, marginLeft: -5, marginTop: -40 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 100, height: 30, marginTop: 110, marginLeft: -100 }}>
                                    <Text onPress={() => Actions.packageDetails()} >Purchase</Text>

                                </CardItem>
                            </CardItem>

                            <CardItem style={{ backgroundColor: '#4BB543', margin: 'auto', height: 150, width: 120, marginLeft: 270, marginTop: -150, marginRight: 5 }}>

                                <Image source={{ uri: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/HA/MHAK2/MHAK2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=08AkF2' }}
                                    style={{ width: 100, height: 100, marginLeft: -5, marginTop: -40 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 100, height: 30, marginTop: 110, marginLeft: -100 }}>
                                    <Text>Purchase</Text>

                                </CardItem>

                            </CardItem>

                            <CardItem style={{ backgroundColor: '#4BB543', margin: 'auto', height: 150, width: 380, marginLeft: 10, marginTop: 5, marginRight: 5 }}>
                                <Image source={{ uri: 'http://www.monstablog.de/images/category_80/Meistverkauft%20OYYO11jd%20Arbeiten%20Nike%20Cool%20Grau%20Rot%20Schwarz%20Free%2030%20V5%20Damen%20Schuhe%20Online%20Einkaufen.jpg' }}
                                    style={{ width: 170, height: 100, marginLeft: -5, marginTop: -35 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 170, height: 30, marginTop: 110, marginLeft: -170 }}>
                                    <Text onPress={() => Actions.packageDetails()} >       Price = $250 </Text>

                                </CardItem>

                                <Image source={{ uri: 'http://www.runnersworld.com/sites/runnersworld.com/files/styles/slideshow-desktop/public/nike_lunarglide_8_w_400.jpg?itok=3ZJQsgrj' }}
                                    style={{ width: 170, height: 100, marginTop: -35, marginLeft: 15 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 170, height: 30, marginTop: 110, marginLeft: -170 }}>
                                    <Text onPress={() => Actions.packageDetails()} >       Price = $250 </Text>

                                </CardItem>
                            </CardItem>

                            <CardItem style={{ margin: 'auto', height: 150, width: 380, marginLeft: 10, marginTop: 5, marginRight: 5 }}>
                                <Image source={{ uri: 'http://static1.lacoste.com/aaqm_prd/on/demandware.static/Sites-INT-Site/Library-Sites-LacosteContent/en/dw3f446a00/ss17/homepage/slider/Slider-L1212family.jpg' }}
                                    style={{ height: 150, width: 380, marginLeft: -15 }} />
                            </CardItem>

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


export default Dashboard;