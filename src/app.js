import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import  Home from './views/home/home';
import MainNavigator from './mainNavigator';


export class App extends Component {
    render() {
        return (
            <MainNavigator/>
        );
    }
}
