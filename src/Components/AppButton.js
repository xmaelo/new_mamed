import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



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
            onPress={onPress} >
            <View >
                <AppText style={{color: 'white', fontSize: 20, fontWeight:'bold'}}> {title} </AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: wp("90%"),
        height: hp("6%"),
        borderRadius: 10,
    }
})

export default AppButton;