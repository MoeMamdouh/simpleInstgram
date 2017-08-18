import {
    StyleSheet,
    Dimensions,
} from 'react-native';

import { COLORS } from '../../config/';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    post: {
        marginTop: 20,
        // backgroundColor: COLORS.WHITE,
        backgroundColor: COLORS.BLUE,
        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: COLORS.GRAY,
        height: 300,
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

    },
})