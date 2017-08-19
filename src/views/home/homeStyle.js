import React from 'react'
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { COLORS } from '../../config/'

export const styles = StyleSheet.create({

   container: {
		flex: 1,
		backgroundColor: COLORS.APP_BG,
	},

    topBar: {
        height:66,
        backgroundColor: COLORS.BRAND_COLOR
    },

    bottomBar: {
        alignItems: 'center',
        justifyContent: 'center',
        height:54,
        backgroundColor:'#efefef',
        borderTopWidth: 1,
        borderTopColor: COLORS.GRAY,
    },

    posts: {

    },

    addPost: {
        height: 40,
        width: 40,
    }
})