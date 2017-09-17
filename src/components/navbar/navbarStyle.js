import {
	StyleSheet,
	Dimensions,
} from 'react-native';

import { COLORS } from '../../config/';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	navBarProfileImage: {
		height: 35,
		width: 35,
		borderRadius: 17.5,
		borderWidth: 1,
		borderColor: COLORS.BRAND_COLOR,
	},
})