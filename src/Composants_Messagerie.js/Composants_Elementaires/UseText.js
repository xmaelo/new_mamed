import React from 'react'
import { View, Text } from 'react-native'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Config_Size from '../Configurations/Config_Size'
import Config_Colors from '../Configurations/Config_Colors'
import Config_Name from '../Configurations/Config_Name'


const {textSize} = Config_Size;
const {textcolor} = Config_Colors;
const { default_Text } = Config_Name;
export default function UseText({
    Textcolor = textcolor,
    TextStyles,
    TextSize = textSize,
    text = default_Text
}) {
    return (
        <View>
            <Text
                style={[
                    {
                        color: Textcolor,
                        fontSize:hp(TextSize)
                    },
                    {
                        ...TextStyles
                    }
                ]}
            >
                {text}
            </Text>
        </View>
    )
}
