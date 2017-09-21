import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import MainNavigator from './navigators/mainNavigator';


export class App extends Component {
    render() {
        return (
            <MainNavigator/>
        );
    }
}
