import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import MainNavigator from './navigators/mainNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


export class App extends Component {
    render() {
        return (
			<Provider store={createStore(reducers)}>
			<MainNavigator/>
		  </Provider>
        );
    }
}
