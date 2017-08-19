import {
	StyleSheet
} from 'react-native';
import { COLORS } from '../../config/';


export const styles = StyleSheet.create({
	mainContainer: {
		width: 300,
		height: 500,
		backgroundColor: COLORS.BRAND_COLOR,
		// justifyContent: 'center',
		//alignItems: 'center'
	},

	content: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 20,
		marginBottom: 50,
		justifyContent: 'space-between'
	},

	description: {

	},

	descriptionTextArea: {
		textAlignVertical: "top",//android iusse
		height: 180,
		borderColor: COLORS.WHITE,
		borderWidth: 0.5,
		padding: 15,
		paddingTop: 15,
	},

	confirmBtn: {
		backgroundColor: COLORS.WHITE,
		height: 44,
		justifyContent: 'center',
		alignItems: 'center'
	},
})