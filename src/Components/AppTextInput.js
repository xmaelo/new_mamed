import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import AppText from './AppText';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function AppTextInput ({ title='Title',  placeholder= 'Text', username, defineUsername}){
    return(
        <View style={styles.container}>
            <AppText style={{fontWeight: '700', fontSize: hp('2.8%')}} > {title} </AppText>
            <View>
                <TextInput 
                    style={styles.textInput} 
                    placeholder={placeholder}
                    onChangeText={(text) => {
                        defineUsername(text);
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
        width: wp('90%'),
        marginBottom: hp("4%"),
    },
    textInput:{
        height: hp("7%"),
        fontSize: hp('2.5%'),
        marginLeft: wp('3%'),
    }
})

export default AppTextInput;