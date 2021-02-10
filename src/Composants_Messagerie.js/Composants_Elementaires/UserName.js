//This is the UserName Components
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Config_Size from '../Configurations/Config_Size'


const { NameWidht, NamePadding, NameSize } = Config_Size;
const default_name = "Malick Mbengue"
export default function UserName({
    name = default_name,
    size = NameSize,
    width = wp(NameWidht),
    padding = hp(NamePadding),
    stylename
}) {
    return (
        <View style={[styles.container, { ...stylename }]}>
            <Text style={{
                fontSize: size,
                color: 'black',
                width: width,
                paddingRight: padding,
                fontWeight: 'bold'
            }}
                numberOfLines={1}
            >
                {name}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    /*  container: {
 
     }, */
})