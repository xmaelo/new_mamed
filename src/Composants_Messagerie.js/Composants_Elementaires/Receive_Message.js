import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UseText from './UseText'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const default_Message = "Vexabat primatibus latera bonis bonis nec orientis latera nec haec onerosus post parcens urbium vexabat nullum latera honoratis nec parcens."
export default function Receive_Message({ message = default_Message }) {
    return (
        <View>
            <View style={styles.container_all_Receive_message}>
                <View style={styles.container_Receive_message}>
                    <Text style={styles.text}>
                        {message}
                    </Text>

                    <View style={{ alignItems: 'flex-start' }}>
                        <UseText text="18h10" Textcolor="black" TextSize={1.5} TextStyles={{ paddingTop: hp('1%') }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_Receive_message: {
        backgroundColor: '#FF8066',
        borderBottomLeftRadius: 3,
        borderRadius: 15,
        paddingLeft: hp('2%'),
        paddingTop: hp('1%'),
        paddingRight: hp('1.2%'),
        paddingBottom: hp('1%'),
        minWidth: hp('10%'),
        maxWidth: hp('40%'),
        marginTop: hp('1.3%'),
        marginRight: hp('2%'),
    },
    text: {
        fontSize: hp('2%'),
        color: 'white',
        fontWeight: 'bold'
    },
    container_all_Receive_message: {
        flexDirection: 'row',
       justifyContent: 'flex-start',
       marginLeft:hp('2%')
    }
});