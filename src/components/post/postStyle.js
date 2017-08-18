import {
    StyleSheet,
    Dimensions,
} from 'react-native';

import { COLORS } from '../../config/';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        borderRadius: 35,
    },
    
    btnText: {
        backgroundColor:'transparent'
    }
})