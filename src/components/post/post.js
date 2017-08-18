import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    TextInput,
} from 'react-native';

import { styles } from './postStyle';
import { COLORS, textStyles } from './../../config/';

export default class Post extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let { data } = this.props;
        return (
            <View style={{margin:10}}>
                <Text style={[textStyles.ButtonText, styles.btnText]}>{data.user}</Text>
            </View>
        )
    }
}