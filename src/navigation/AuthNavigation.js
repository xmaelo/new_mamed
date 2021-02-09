import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../Screens/LoginScreen"
import RegistrationScreen from "../Screens/RegisterScreen"
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen"
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function AuthNavigation (props){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerTransparent: true, title: ""}}/>
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerTransparent: true, title: ""}}/>
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{headerTransparent: true, title: ""}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AuthNavigation;