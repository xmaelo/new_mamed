import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
//importation de la library pour le responsive design
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const image = require('../images/moi.jpg')
export default function UserProfile({images = image, size= 50, stylesProfile}) {
    return (
        <View style={[styles.container, { borderRadius: size / 2}, {...stylesProfile}]}>
           <Image style={{ width: size, height: size,}} source={images} width={size} height={size}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        overflow: "hidden"
    },
})