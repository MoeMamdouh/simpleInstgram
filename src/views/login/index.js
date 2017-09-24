import React, { Component } from 'react';
import {
	View, Text, Button, TouchableWithoutFeedback,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from './../../actions';

class Loin extends React.Component {

	/**
	 * login 
	 */
	login() {
		const { navigate } = this.props.navigation;
		navigate('Drawer', { user: 'Moe' })
        this.props.selectLibrary(1)
	}

	render() {
		console.log('=>Login(render), this.props ', this.props)
		return (
			<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
				<Button
					onPress={() => this.login()}
					title="Login"
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	console.log('===>mapStateToProps this.state ', state)
	return { selectedLibraryId: state.selectedLibraryId };
};
  
export default connect(mapStateToProps, actions)(Loin);
  