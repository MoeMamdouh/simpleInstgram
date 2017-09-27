import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import { COLORS, textStyles, config } from './config/';
import { AppWithNavigationState } from './navigators/appNavigator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

export class App extends Component {
	componentWillMount() {
		firebase.initializeApp(config.firebase)
	}

    render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
			<Provider store={store}>
				<AppWithNavigationState/>
			</Provider>
        );
    }
}
