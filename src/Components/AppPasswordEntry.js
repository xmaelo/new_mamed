import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome, Feather } from '@expo/vector-icons'; 

import AppText from '../Components/AppText';
import color from '../themes/Color'
const { defaultColor, greyText } = color;

function AppPasswordEntry ({ title='Title',  placeholder= 'Text', setPassword, password}){
    const [visibilityPassword, setVisibilityPassword] = useState(false);
    return(
        <View style={styles.container}>
            <AppText style={{fontWeight: '700', fontSize: hp('2.8%')}} > {title} </AppText>
            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
            <Feather style={{paddingTop: 10}} name="lock" size={24} color={greyText} />
                <TextInput 
                    onChangeText={(text) => {
                        setPassword(text);
                        console.log(text);
                    }}
                    value = {password} 
                    secureTextEntry={!visibilityPassword}
                    style={styles.textInput} 
                    placeholder={placeholder}/>
                    <TouchableOpacity
                        onPress={()=>setVisibilityPassword(!visibilityPassword)}
                    >
                        <Icon 
                            style={{marginTop: hp("1%")}}
                            name="visibility" 
                            size={25}   
                            color={visibilityPassword ? defaultColor: "#1F252A"} 
                        />
                    </TouchableOpacity>
            </View>
            <View style={styles.divider}></View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('80%'),
    },
    divider:{
        backgroundColor: 'black',
        height: hp('0.1%'),
        width: wp('85%'),
        marginBottom: hp("4%")
    },
    textInput:{
        height: hp("7%"),
        fontSize: hp('2.5%'),
        marginLeft: wp('3%'),
    }
})

export default AppPasswordEntry;