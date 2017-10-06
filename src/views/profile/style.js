import {
	StyleSheet,
	// Dimensions,
} from 'react-native';
import { COLORS } from '../../config/'

export const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	userInfo: {
		margin: 16,
		// backgroundColor: 'red',
		// justifyContent: 'center',
		// alignItems: 'center',
	},

	userInfoTop: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	profilePicture: {
		marginRight: 33,
	},

	userIcons: {
		flexDirection: 'row',
		// alignItems: 'center',
	},

	iconBlock: {
		alignItems: 'center',
		marginRight: 33,
	},

	icon: {
		width: 24,
		height: 24,
		resizeMode: 'contain',
	},

	iconLabel: {
		marginTop: 8,
	},

	labelNumber: {
		marginRight: 10,
	},

	userInfoBottom: {
		marginTop: 15,
	},

	userName: {

	},

	userBio: {
		marginTop: 8,
	},
});

