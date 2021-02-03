import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../Components/AppText';


function RegisterScreen (props){
    return(
        <View style={styles.container}>
            <AppText>Register Screen</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default RegisterScreen;