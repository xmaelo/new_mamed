import React, { Children } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import color from '../themes/Color';


const { blackText } = color;
function AppText ({ children, style={} }){
    return(
        <Text style={[styles.text, {...style}]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: blackText,
        fontSize: widthPercentageToDP('3%'),
    }
})

export default AppText;