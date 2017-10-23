// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button } from 'native-base';
// import { emailChanged, passwordChanged, loginUser } from '../actions'

// class LoginForm extends Component {

//     onEmailChange(text) {
//         this.props.emailChanged(text);

//     }
//     onPasswordChange(text) {
//         this.props.passwordChanged(text);
//     }
//     onButtonPress() {
//         const { email, password, error } = this.props;
//         this.props.loginUser({ email, password, error });
//         // Actions.dashboard();
//     }
//     renderButton() {
//         if (this.props.loading) {
//             return <Spinner size="large" style={styles.spinnerStyle} />;
//         }
//         return (
//             <Button block success style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
//                 <Text> Sign in </Text>
//             </Button>
//         );
//     }
//     render() {
//         return (
//             <Container style={styles.containerStyle}>
//                 <Content>
//                     <Form >
//                         <CardItem>
//                             <Item floatingLabel>
//                                 <Label>EMAIL</Label>
//                                 <Input
//                                     onChangeText={this.onEmailChange.bind(this)}
//                                     value={this.props.email} />
//                             </Item>
//                         </CardItem>

//                         <CardItem>
//                             <Item floatingLabel>
//                                 <Label>PASSWORD</Label>
//                                 <Input
//                                     secureTextEntry
//                                     onChangeText={this.onPasswordChange.bind(this)}
//                                     value={this.props.password}
//                                 />
//                             </Item>

//                         </CardItem>
//                         <CardItem>
//                             <Text style={styles.errorTextStyle} >
//                                 {this.props.error}
//                             </Text>
//                             {this.renderButton()}
//                         </CardItem>
//                         <CardItem>
//                             <Text style={styles.textStyle} > Forget Password? </Text>
//                         </CardItem>
//                         <CardItem>
//                             <Text style={{ marginLeft: 90, marginTop: 30 }} onPress={() => Actions.forgotpassword()} >  Do not have an account? </Text>
//                         </CardItem>
//                         <CardItem>
//                             <Text style={styles.textStyle2} onPress={() => Actions.signup()}> Register  </Text>
//                         </CardItem>
//                     </Form>
//                 </Content>

//             </Container>
//         );
//     };
// }
// const styles = {
//     errorTextStyle: {
        
//     },
//     containerStyle: {
//         marginTop: 80,
//         marginLeft: 10,
//         paddingTop: 10,
//         width: 380
//     },
//     buttonStyle: {
//         marginLeft: 80,
//         width: 180
//     },
//     textStyle: {
//         marginTop: -10,
//         color: 'green',
//         marginLeft: 120,
//     },
//     textStyle2: {
//         marginTop: -15,
//         color: 'green',
//         marginLeft: 150,
//     },
//     spinnerStyle: {
//         marginLeft: 130
//     }
// }
// const mapStateToProps = ({ auth }) => {
//     const { email, password, error, loading } = auth;

//     return { email, password, error, loading };
//     console.log("state", auth);
// };

// export default connect(mapStateToProps, {
//     emailChanged, passwordChanged, loginUser
// })(LoginForm); 