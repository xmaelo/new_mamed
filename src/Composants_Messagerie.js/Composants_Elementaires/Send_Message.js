import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UseText from './UseText'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const default_Message = "Vexabat primatibus latera bonis bonis nec orientis latera nec haec onerosus post parcens urbium vexabat nullum latera honoratis nec parcens."
export default function Send_Message({ message = default_Message }) {
    return (
        <View>
            <View>
                <View style={styles.container_all_send_message}>
                    <View style={styles.container_send_message}>
                        <Text style={styles.text}>
                            {message}
                        </Text>
                        <View style={{ alignItems: 'flex-end' }}>
                            <UseText text="18h10" Textcolor="white" TextSize={1.5} TextStyles={{ paddingTop: hp('1%') }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_send_message: {
        backgroundColor: '#008E9B',
        borderBottomRightRadius: 3,
        borderRadius: 15,
        paddingLeft: hp('2%'),
        paddingTop: hp('1%'),
        paddingRight: hp('1.2%'),
        paddingBottom: hp('1%'),
        minWidth: hp('10%'),
        maxWidth: hp('40%'),
        marginTop: hp('1%'),
        marginLeft: hp('2%')
    },
    text: {
        fontSize: hp('2%'),
        color: "black",
        fontWeight: 'bold'
    },
    container_all_send_message: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight:hp('2%')
      
    }
});