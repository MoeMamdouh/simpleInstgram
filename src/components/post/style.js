import {
	StyleSheet,
	Dimensions,
} from 'react-native';

import { COLORS } from '../../config/';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	post: {
		flex: 1,
		marginBottom: 10,
		paddingBottom: 10,
		backgroundColor: COLORS.WHITE,
		// backgroundColor: 'red',
		borderRadius: 1,
		borderWidth: 0.4,
		borderColor: COLORS.GRAY,
	},

	userBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
		// backgroundColor: 'red',
		height: 50
	},

	userBlockLeft: {
		// backgroundColor: 'green',
		flexDirection: 'row',
	},


	avatar: {
		marginRight: 7
	},

	avatarImage: {
		height: 30,
		width: 30,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: COLORS.GRAY,
	},

	username: {
		justifyContent: 'center',
	},

	userBlockRight: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	imagePost: {
		height: 300,
		resizeMode: 'cover',
	},

	dot: {
		backgroundColor: COLORS.GRAY,
		width: 5,
		height: 5,
		marginRight: 2,
		marginLeft: 2,
	},

	activeDot: {
		width: 7,
		height: 7,
		backgroundColor: COLORS.BLUE,
	},

	postBody: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	actionsLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	actionsRight: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	actionIcon: {
		width: 50,
		height: 50,
		resizeMode: 'contain'
	},

	likes: {
		flexDirection: 'row',
		marginBottom: 7,
	},

	description: {
		flexDirection: 'row',
	},
})