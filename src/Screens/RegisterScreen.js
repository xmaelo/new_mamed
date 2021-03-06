import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import AppButton from '../Components/AppButton';

import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppPasswordEntry from '../Components/AppPasswordEntry';


function RegisterScreen (props){
    return(
        <View style={styles.container}>
            <AppText style={{fontSize: widthPercentageToDP('5%')}}>Saisisez Vos informations</AppText> 
            <AppText style={{fontSize: widthPercentageToDP('5%'), paddingBottom: widthPercentageToDP('10%')}}>S'il vous Plait</AppText> 
            <AppTextInput title="Prenom" placeholder="Entrez votre Prenom"/>
            <AppTextInput title="Nom" placeholder="Entrez votre Nom"/>
            <AppPasswordEntry title='Password' placeholder="Creer un mot de passe" />
            <AppPasswordEntry title='Password' placeholder="Confirmer le mot de passe" />

            <AppButton
                title="s'Inscrirre"
                onPress={() => console.log('Inscription')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default RegisterScreen;