
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import UserProfile from '../Composants_Elementaires/UserProfile'
import UserName from '../Composants_Elementaires/UserName'
import UnreadMessage from '../Composants_Elementaires/UnreadMessage'
import InputText from '../Composants_Elementaires/InputText'
import UseText from '../Composants_Elementaires/UseText'
import UserProfile_Badge from '../Composants_Elementaires/UserProfile_Badge'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function UserContainer({ size, userprofile, username, new_message, noread, UsersInfo }) {
    return (
        <View>
            <View style={styles.userContainer}>
                <TouchableOpacity onPress={UsersInfo}>
                    <UserProfile_Badge size={size} images={userprofile} value={noread} />
                </TouchableOpacity>
                <View style={styles.container_all}>
                    <View style={styles.container_Username_UnreadMessage}>
                        <UserName name={username} />
                        <UnreadMessage stylesmessage={{ paddingTop: hp('0.5%') }} message={new_message} />
                    </View>
                    <View>
                        <UseText
                            text="20mn"
                            TextSize={2}
                            TextStyles={{ paddingLeft: hp('2%') }}
                        />
                    </View>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container_Username_UnreadMessage: {
        marginLeft: hp('1%')
    },
    container_all: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
