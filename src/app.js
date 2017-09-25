import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import { COLORS, textStyles, config } from './config/';
import MainNavigator from './navigators/mainNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

export class App extends Component {
	componentWillMount() {
		firebase.initializeApp(config.firebase)
	}

    render() {
        return (
			<Provider store={createStore(reducers)}>
				<MainNavigator/>
			</Provider>
        );
    }
}
