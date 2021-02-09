import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

const image = require('../images/moi.jpg')
export default function UserProfile({ images = image, size = 50, stylesProfile, value }) {
    /* const [value, setValue] = React.useState(0) */
    return (
        <View>
            <View style={[{ ...stylesProfile }]}>
                <Avatar
                    rounded
                    source={images}
                    size={size}
                />

                <Badge
                    status="success"
                    value={value}
                    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        overflow: "hidden"
    },
})