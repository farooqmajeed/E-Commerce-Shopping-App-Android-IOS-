import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H1, H2 } from 'native-base';


class PackageDetailScreen extends Component {
    
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
                            <Title style={{ margin: 0 }}>Package Details</Title>
                        </Body>
                    </Header >
                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>

                    </View>
                    <Card>

                        <CardItem >
                            <Image source={{ uri: 'http://www.monstablog.de/images/category_80/Meistverkauft%20OYYO11jd%20Arbeiten%20Nike%20Cool%20Grau%20Rot%20Schwarz%20Free%2030%20V5%20Damen%20Schuhe%20Online%20Einkaufen.jpg' }}


                                style={{ width: 380, height: 200 }} />
                        </CardItem>
                        <CardItem >
                            <Text>
                                <H2> S/89 {'\n'} </H2>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                            </Text>

                        </CardItem >

                        <CardItem >
                            <Button success>
                                <Text>
                                    Add to Cart
                                </Text>
                            </Button>
                            <Button light style={{ marginLeft: 15 }}>
                                <Icon name='heart' />
                            </Button>
                        </CardItem>

                        <CardItem>
                            <H2> Size {'\n'} </H2>
                        </CardItem>


                    </Card>



                </DrawerLayoutAndroid>

            </Container >
        );
    };
}
const styles = {
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
}


export default PackageDetailScreen;