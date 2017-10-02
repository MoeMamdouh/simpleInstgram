import {
	StyleSheet,
	Dimensions,
} from 'react-native';

import { COLORS } from '../../config/';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	cover: {
		width: null,
		height: 176,
	},

	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: COLORS.TRANSPARENT_BLACK_2,
	},

	drawerHeader: {
		marginTop: 35,
		marginLeft: 15
	},

	draweUser: {
		marginTop: 20,
		backgroundColor: 'transparent'
	},

	drawerLabel: {
		// color: COLORS.BLACK,
		fontSize: 12,
		fontWeight: '500'
	}
})