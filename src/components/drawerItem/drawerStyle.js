import {
	StyleSheet,
	Dimensions,
} from 'react-native';

import { COLORS } from '../../config/';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 50,
		flexDirection:'row',
		alignItems: 'center',
		padding: 10,
		marginTop:5,
		borderBottomWidth: 0.5,
		borderBottomColor: COLORS.GRAY,
		justifyContent: 'space-between'
		// paddingTop: 10,
		// paddingBottom: 10,
		// paddingRight: 10,
		// paddingLeft: 10,
	},

	leftContent: {
		flexDirection:'row',
	},

	icon: {
		fontSize: 20,
		marginRight: 20,	
	},
	
	label: {

	}
})