import {
	StyleSheet
} from 'react-native';
import { COLORS } from '../../config/';


export const styles = StyleSheet.create({
	mainContainer: {
		width: 300,
		height: 440,
		backgroundColor: COLORS.APP_BG,
		// justifyContent: 'center',
		//alignItems: 'center',
	},

	content: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 20,
		marginBottom: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	topContent: {
		alignItems: 'center',
	},

	photoContainer: {
		marginBottom: 20,
	},

	selectPhoto: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 200,
		borderWidth: 0.5,
		borderStyle: 'dashed',
		borderColor: COLORS.GRAY,
	},

	selectPhotoText: {

	},

	addIcon: {
		fontSize: 40,
		color: COLORS.GRAY,
	},

	uploadedPhoto: {
		borderWidth: 4,
		borderColor: COLORS.off_GRAY,
		borderRadius: 4,
		height: 150,
		width: 150,
	},

	description: {

	},

	descriptionTextArea: {
		// textAlignVertical: "top",//android iusse
		height: 100,
		width: 200,
		// borderColor: COLORS.WHITE,
		// borderWidth: 0.5,
		padding: 15,
		paddingTop: 15,
	},
	
	btnsContainer: {
		width: 240,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	confirmBtn: {
		backgroundColor: COLORS.WHITE,
		height: 44,
		justifyContent: 'center',
		alignItems: 'center'
	},
})