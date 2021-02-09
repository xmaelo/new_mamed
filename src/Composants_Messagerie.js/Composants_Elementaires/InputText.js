import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Config_Size from '../Configurations/Config_Size'
import Config_Colors from '../Configurations/Config_Colors'


const {
    placeholder,
    InputPadding,
    InputWidht,
} = Config_Size;

const {placeholder_Color} = Config_Colors;
export default function InputText({
    Placeholder = placeholder,
    inputstyles,
    Widht = wp(InputWidht),
    padding = hp(InputPadding),
    Value,
    onChangeText,
    Placeholder_Color = placeholder_Color
}) {
    return (
        <View>
            <TextInput
                placeholder={Placeholder}
                style={[
                    {
                        width: Widht,
                        paddingLeft: padding,
                        borderBottomColor: '#E0E6E2',
                        borderBottomWidth: 2
                    },
                    {
                        ...inputstyles
                    }
                ]}
                onChangeText={onChangeText}
                value={Value}
                placeholderTextColor={Placeholder_Color}

            />
        </View>
    )
}

