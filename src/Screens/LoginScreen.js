import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { StatusBar } from 'expo-status-bar';

import AppTextInput from '../Components/AppTextInput' ;
import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';

import Color from '../themes/Color';
import AppTouchableText from '../Components/AppTouchableText';
import AppPasswordEntry from '../Components/AppPasswordEntry';

import color from '../themes/Color'


const img = require('../Images/TextLogo.jpg')
const { defaultColor, appWhite } = Color;
function LoginScreen ({ navigation }){

    const [password, setPassword] = useState("");
    const [username, defineUsername] = useState("");

    const pressed = (text) =>{
        console.log('Text pressed');
    }
    const handlePress = () =>{
        console.log('Pressed')
    }
    return(
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" />
                <AppText style={{fontSize: 20, fontWeight:'200',color: 'grey', fontFamily:'Roboto'}}> Bienvenue ! </AppText>
                <View style={styles.imgContainer}>
                    <Image
                        source={img}
                        style={styles.img} 
                    />
                </View>
                <View style={styles.textEntries}>
                    <AppTextInput 
                        
                        title='Email' 
                        placeholder="Entrez votre email/nom d'utilisateur"
                        username={username}
                        defineUsername={defineUsername}
                    />
                    <AppPasswordEntry 
                        title='Password' 
                        placeholder="Entrez votre mot de passe"
                        password={password}
                        setPassword={setPassword}
                    />
                </View>
                <View style={styles.forgotPass}>
                    <AppTouchableText
                        onPress={() => navigation.navigate('ForgotPasswordScreen')} 
                        textStyle={{color:'grey'}}>Mot de passe oublié?</AppTouchableText>
                </View>
                <AppButton 
                    onPress={() => navigation.navigate('Main')} 
                    title='Me connecter'
                />
                <View style={styles.signup}>
                    <AppTouchableText 
                        onPress={() => navigation.navigate('RegistrationScreen')} 
                        textStyle={{color: defaultColor, marginTop: hp("2%")}}
                        >Me créé un compte</AppTouchableText>
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
        marginTop: 10,
        height: hp('5.2%'),
        width: wp('40%')
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