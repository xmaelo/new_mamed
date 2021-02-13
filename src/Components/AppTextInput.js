import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import AppText from './AppText';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import color from "../themes/Color"
import { 
    Feather,
    
} from "@expo/vector-icons"


const { greyText } = color;
function AppTextInput ({ title='Title',  placeholder= 'Text', username, defineUsername}){
    return(
        <View style={styles.container}>
            <AppText style={styles.title} > {title} </AppText>
            <View style={{flexDirection: 'row'}}>
                <View style={{ justifyContent: 'flex-end', paddingBottom: wp('1%')}}>
                    <Feather style={{paddingTop: 10}} name="user" size={24} color={greyText} />
                </View>
                <TextInput 
                    style={styles.textInput} 
                    placeholder={placeholder}
                    onChangeText={(text) => {
                        // defineUsername(text);
                        console.log(text);
                    }}
                    value = {username} 
                />
            </View>
            <View style={styles.divider} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
    },
    divider:{
        backgroundColor: 'black',
        height: hp('0.1%'),
        width: wp('85%'),
        marginBottom: hp("4%"),
    },
    textInput:{
        height: hp("6%"),
        fontSize: hp('2.2%'),
        marginLeft: wp('3%'),
        paddingBottom: 0
    },
    title: {
        fontWeight: '700', 
        fontSize: hp('2.3%')
    }
})

export default AppTextInput;