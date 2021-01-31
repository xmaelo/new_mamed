import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import { FontAwesome } from '@expo/vector-icons'; 
import AppText from '../Components/AppText';




function AppPasswordEntry ({ title='Title',  placeholder= 'Text'}){
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>
            <AppText style={{fontWeight: '700', fontSize: hp('2.8%')}} > {title} </AppText>
            <View>
                <TextInput 
                    onChangeText={(text) => {
                        setPassword(text);
                        console.log(text);
                    }}
                    value = {password}
                    secureTextEntry style={styles.textInput} 
                    placeholder={placeholder}/>
            </View>
            <View style={styles.divider}></View>
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
        marginBottom: hp("4%")
    },
    textInput:{
        height: hp("7%"),
        fontSize: hp('2.9%'),
        marginLeft: wp('3%'),
    }
})

export default AppPasswordEntry;