import React, { useState }from 'react';
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

    const [password, setPassword] = useState("");
    const [username, defineUsername] = useState("");

    const pressed = (text) =>{
        console.log('Text pressed');
    }
    return(
        <>
            <SafeAreaView style={styles.container}>
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
                        onPress={() => console.log('Text Pressed')} 
                        textStyle={{color:'grey'}}>Mot de passe oublié?</AppTouchableText>
                </View>
                <AppButton 
                    onPress={() => props.navigation.navigate("Main")} 
                    title='Me connecter'
                />
                <View style={styles.signup}>
                    <AppTouchableText 
                        onPress={(text) => {() => console.log('Text Pressed!')}} 
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