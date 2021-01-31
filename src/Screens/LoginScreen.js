import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import AppTextInput from '../Components/AppTextInput' ;
import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';

import Color from '../themes/Color';
import AppTouchableText from '../Components/AppTouchableText';
import AppPasswordEntry from '../Components/AppPasswordEntry';

import color from '../themes/Color'


const img = require('../Images/TextLogo.jpg')
const { defaultColor, appWhite } = Color;
function LoginScreen (props){
    const pressed = (text) =>{
        console.log('Text pressed');
    }
    return(
        <>
            <StatusBar backgroundColor={defaultColor}/>
            <SafeAreaView style={styles.container}>
                <AppText style={{fontSize: 20, fontWeight:'200',color: 'grey', fontFamily:'Roboto'}}> Welcome Back </AppText>
                <View style={styles.imgContainer}>
                    <Image
                        source={img}
                        style={styles.img}
                    />
                </View>
                <View style={styles.textEntries}>
                    <AppTextInput title='Email' placeholder="Enter Your Email Or UserName"/>
                    <AppPasswordEntry title='Password' placeholder="Enter Your Password"/>
                </View>
                <View style={styles.forgotPass}>
                    <AppTouchableText
                        onPress={() => console.log('Text Pressed')} 
                        textStyle={{color:'grey'}}>Forgot Password?</AppTouchableText>
                </View>
                <AppButton 
                    onPress={() => console.log('App Pressed')} 
                    title='Login'
                />
                <View style={styles.signup}>
                    <AppTouchableText 
                        onPress={(text) => {() => console.log('Text Pressed!')}} 
                        textStyle={{color: defaultColor}}
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
        alignItems: 'center',
        backgroundColor: appWhite,
    },
    img: {
        height: hp('15%'),
        width: wp('60%')
    },
    imgContainer:{
        paddingBottom: wp('30%%')
    },
    forgotPass:{ 
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        paddingRight: wp("10%"),
        marginBottom: hp("2%"),
        width: wp('100%'),
    },
    textEntries: {
        alignContent: 'center', 
        justifyContent: 'center'
    },
    signup:{
        flexDirection:'row',
        width: wp('100%'),
        justifyContent: 'center',
        marginTop: wp('2%'),
    }
})

export default LoginScreen;