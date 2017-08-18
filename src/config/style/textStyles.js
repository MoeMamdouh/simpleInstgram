import React from 'react'
import {
	StyleSheet,
} from 'react-native';
import { COLORS } from './colors'

export const textStyles = StyleSheet.create({

	/**
	 * White colors
	 */
	HEADLINE1: {
		fontWeight: 'bold',
		color: COLORS.WHITE,
		fontSize: 25,
	},

	TextInputField: {
		color: COLORS.WHITE,
		fontSize: 15,
		fontWeight: 'bold'
	},

	TextInputFieldNormal: {
		color: COLORS.WHITE,
		fontSize: 13,
		fontWeight: '500'
	},

	ButtonText: {
		fontSize: 15,
		color: COLORS.WHITE,
		fontWeight: 'bold',
	},


	/**
	 * Black Colors
	 */
	HEADING1Black: {
		fontSize: 26,
		color: COLORS.BLACK,
		fontWeight: '500',
	},

	ModalMediumBlack: {
		fontSize: 18,
		color: COLORS.BLACK,
	},

	ModalSmallBlack: {
		fontSize: 12,
		color: COLORS.BLACK,
	},

	CancelButton: {
		fontSize: 15,
		color: COLORS.BLACK,
		fontWeight: '500',
		textDecorationLine: 'underline',
	},

	BoldBlackMedium: {
		fontSize: 16,
		color: COLORS.BLACK,
		fontWeight: 'bold',
	},
	

	/**
	 * grays colors
	 */
	grayMedium: {
		fontSize: 16,
		color: COLORS.off_GRAY,
		fontWeight: 'bold',
	},

	graySmall: {
		fontSize: 11,
		color: COLORS.off_GRAY,
	},

})