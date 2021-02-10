import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default function Button({
    ButtonName = "Button",
    widthbutton = wp('100%'),
    heightbutton = hp('7%'),
    colorsText = "white",
    TextSize = hp('3%'),
    backgroundColorButton = "red",
    stylesbutton
}) {
    return (
        <View>
            <View style={[
                {
                    backgroundColor: backgroundColorButton,
                    width: widthbutton,
                    height: heightbutton,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                {
                    ...stylesbutton
                }
            ]}>
                <Text
                    style={{
                        fontSize: TextSize,
                        color: colorsText,
                        fontWeight: 'bold'
                    }}
                >
                    {ButtonName}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})