import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppText from './AppText';
import RoundedImage from './RoundedImage';

import Feather   from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NotificationCard ({ profileImage, profileName, dateTime, description }){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection: 'row'}}>
                <RoundedImage profile_image={profileImage} style={{}}/> 
                <View style={{ paddingLeft: widthPercentageToDP('2%')}}>
                    <AppText style={styles.name}>{profileName}</AppText>
                    <Text 
                        numberOfLines={2} 
                        style={{
                            fontSize:widthPercentageToDP('4.5%'), 
                            paddingRight: widthPercentageToDP('5%'), 
                            width: widthPercentageToDP('73%'),
                            paddingBottom: heightPercentageToDP('1%')
                        }}>{description}</Text>
                    <AppText style={{color: 'grey', fontSize:widthPercentageToDP('4%')}}>{dateTime}</AppText>
                </View>
                </View>
                <TouchableOpacity>
                    <Feather 
                        name='more-vertical'
                        color='black' 
                        size={30} 
                        style={{}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: widthPercentageToDP('2%'),
        padding: widthPercentageToDP('1%'),
        backgroundColor: 'white',
        elevation: widthPercentageToDP('1%'),
        paddingTop: heightPercentageToDP('1%'),
        paddingBottom: heightPercentageToDP('1%'),
        borderRadius: widthPercentageToDP('3%'),
        marginBottom: heightPercentageToDP('1%'),
        width: widthPercentageToDP('95%')
    },
    name:{
        fontWeight: 'bold',
        fontSize: widthPercentageToDP('4%')
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default NotificationCard;