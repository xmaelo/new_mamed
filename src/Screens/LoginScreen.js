import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import AppTextInput from '../Components/AppTextInput' ;
import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';

import Color from '../themes/Color';
import AppTouchableText from '../Components/AppTouchableText';
import AppPasswordEntry from '../Components/AppPasswordEntry';


const { defaultColor } = Color;
function LoginScreen (props){
    const pressed = (text) =>{
        console.log('Text pressed');
    }
    return(
        <>
            {/**<StatusBar backgroundColor={themes.color.defaultColor}/>**/}
            <SafeAreaView style={styles.container}>
                <View>
                    <AppTextInput title='Email' placeholder="Enter Your Email Or UserName"/>
                    <AppPasswordEntry title='Password' placeholder="Enter Your Password"/>
                </View>
                <View style={styles.forgotPass}>
                    <AppTouchableText
                        onPress={(text) => pressed(text)} 
                        textStyle={{color:'grey'}}>Forgot Password?</AppTouchableText>
                </View>
                <AppButton onPress={() => console.log('App Pressed')} title='Login'/>
                <View style={styles.signup}>
                    <AppTouchableText 
                        onPress={(text) => {console.log('Text Pressed!')}} 
                        textStyle={{color:'red'}}
                        >Sign Up</AppTouchableText>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPass:{ 
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        paddingRight: wp("10%"),
        marginBottom: hp("2%"),
        width: wp('100%'),
    },
    signup:{
        flexDirection:'row',
        width: wp('100%'),
        justifyContent: 'center',
        marginTop: wp('2%'),
    }
})

export default LoginScreen;