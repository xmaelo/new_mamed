import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';
import { widthPercentageToDP } from 'react-native-responsive-screen';


function ForgotPasswordScreen (props){
    return(
        <View style={styles.container}>
            <AppText style={{fontSize: widthPercentageToDP('5%'), paddingBottom: widthPercentageToDP('5%')}}>VERFICATION</AppText>
            <AppTextInput title='Email' placeholder="Entrez Votre Email" />
            <AppButton 
                title="Verifier l'Email"
                onPress={() => console.log("Verifier l'Email")}
            />
            <AppText 
                style={{
                    fontSize: widthPercentageToDP('4%'), 
                    paddingTop: widthPercentageToDP('5%'), 
                    padding: widthPercentageToDP('5%'),
                    textAlign: 'center'
                 }}>Entrer un email valid pour recevoir un nouveau mot de passe</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: widthPercentageToDP('20%'),
        backgroundColor: 'white'
    }
})

export default ForgotPasswordScreen;