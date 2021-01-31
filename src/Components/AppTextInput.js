import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import AppText from './AppText';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//import { Icon } from 'react-native-elements';

function AppTextInput ({ title='Title',  placeholder= 'Text'}){
    return(
        <View style={styles.container}>
            <AppText styles={{fontWeight: '700', fontSize: hp('2.8%')}} > {title} </AppText>
            <View>
                {/**<Icon name='eye' type='font-awesome-5' size={20} /> **/}
                <TextInput style={styles.textInput} placeholder={placeholder}/>
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
        width: wp('100%'),
        marginBottom: hp("4%"),
    },
    textInput:{
        height: hp("7%"),
        fontSize: hp('2.9%'),
        marginLeft: wp('3%'),
    }
})

export default AppTextInput;