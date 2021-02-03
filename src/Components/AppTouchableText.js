import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import AppText from '../Components/AppText';


function AppTouchableText ({ 
        children, 
        textStyle={}, 
        touchStyle={}},
        onPress,
        ){
    return(
        <TouchableOpacity 
            style={[styles.container, {...touchStyle}]}
            onPress={() => {onPress}}
        >
            <AppText style={textStyle}>{children}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default AppTouchableText;