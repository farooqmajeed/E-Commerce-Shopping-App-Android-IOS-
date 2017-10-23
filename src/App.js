import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase'
// import reducers from './reducers';
// import ReduxThunk from 'redux-thunk';
import Router from './Router';
import store from './store/store'


class App extends Component {

    render() {
        // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }} >
                    <Router /> 
                </View>
            </Provider >
        );
    };
}

export default App;