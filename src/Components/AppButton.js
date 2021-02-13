import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';


import Color from '../themes/Color';


const { defaultColor } = Color;
function AppButton ({
    title='Button',
    backgroundColor = defaultColor,
    onPress 
    }){
    return(
        <TouchableOpacity 
            style={[styles.container, {backgroundColor}]}
            onPress={onPress}
            activeOpacity={0.9}
         >

            <View >
                <AppText style={{color: 'white', fontSize: widthPercentageToDP('4%'), fontWeight:'bold'}}> {title} </AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp("65%"),
        height: hp("6%"),
        borderRadius: 10,
    }
})

export default AppButton;