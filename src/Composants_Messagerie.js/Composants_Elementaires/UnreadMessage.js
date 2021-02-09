import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Config_Size from '../Configurations/Config_Size'
import Config_Colors from '../Configurations/Config_Colors'
import Config_Name from '../Configurations/Config_Name'


const { Unread_Message_Padding, Unread_Message_Widht } = Config_Size;
const { Unread_Message_Color } = Config_Colors;
const {default_message} = Config_Name;
export default function UnreadMessage({
    message = default_message,
    size = 14,
    width = wp(Unread_Message_Widht),
    padding = hp(Unread_Message_Padding),
    stylesmessage
}) {
    return (
        <View style={[styles.container, { ...stylesmessage }]}>
            <Text style={{
                fontSize: size,
                color: Unread_Message_Color,
                width: width,
                paddingRight: padding
            }}
                numberOfLines={1}
            >
                {message}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    /*    container: {
          
       }, */
})