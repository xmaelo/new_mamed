import React from 'react'
import {
    View, Text, SafeAreaView, StyleSheet, TouchableOpacity,
    TextInput, FlatList, ImageBackground, Dimensions, StatusBar
} from 'react-native'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SendMessage from '../Composants_Messagerie.js/Composants_Elementaires/Send_Message'
import ReceiveMessage from '../Composants_Messagerie.js/Composants_Elementaires/Receive_Message'
//importation des composants ici
import UserProfile from '../Composants_Messagerie.js/Composants_Elementaires/UserProfile'
import UserName from '../Composants_Messagerie.js/Composants_Elementaires/UserName'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Header } from 'react-native-elements';




const ChatItems = ({ item, Receive }) => (
    <View>
        <View>
            <SendMessage message={Receive} />
            {/** <ReceiveMessage/> */}
            {/**<ReceiveMessage message={Receive}/> */}
        </View>
    </View>
)


function HeaderLeft({ Back, name, pp }) {
    return (
        <View style={styles.container_header_left_all}>
            <TouchableOpacity onPress={Back}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container_user}>
                <UserProfile size={32} images={pp} />
                <UserName stylename={{ paddingLeft: hp('1%') }} name={name} />
            </TouchableOpacity>
        </View>
    )
}

function HeaderRight({ visible, hideModal, containerStyle, showModal }) {
    return (
        <View>
            <TouchableOpacity /* onPress={showModal} */ style={styles.container_icon}>
                <Entypo name="dots-three-vertical" size={22} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default function ChatScreen({ route, navigation }) {

    const Data = [
        {
          id:1,
          message: "salut"
        }
    ]

    const { Message, Userpp, Username, Id } = route.params
    const renderItems = ({ item }) => {
        return (
            <ChatItems
                item={item}
                Receive={Message}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header
                leftComponent={<HeaderLeft Back={() => navigation.goBack()}
                    pp={Userpp}
                    name={Username}
                />
                }
                rightComponent={<HeaderRight />}
                containerStyle={{ height: 90, }}
                backgroundColor="#3C85F3"

            />

            <FlatList
                data={Data}
                renderItem={renderItems}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={{ paddingBottom: hp('25%') }}
            />

            <View style={styles.container_input}>
                <TouchableOpacity style={styles.button_emodji}
                >
                    <Entypo name="emoji-happy" size={26} color="#FF8066" />
                </TouchableOpacity>
                <TextInput
                    multiline={true}
                    style={styles.input}
                    placeholder="Taper votre message"
                    placeholderTextColor="gray"

                />
                <TouchableOpacity style={styles.button_link}
                //onPress={() => AddMessage()}
                >
                <Feather name="send" size={26} color="black" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    input: {
        width: wp('80%'),
        maxHeight: hp('20%'),
        paddingLeft: hp('2%'),
        paddingRight: hp('1%'),
        fontSize: 18,
        color: 'black',
        //backgroundColor: '#EFF2F7',
        //borderRadius: 15,
        marginBottom: hp('1%')

    },
    container_input: {
        alignItems: 'center',
        backgroundColor: '#EFF2F7',
        elevation: 8,
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        left: 0,
        width: wp('100%'),

    },

    button: {
        marginRight: hp('2%'),
        marginBottom: hp('1%'),
        backgroundColor: '#642BD3',
        width: wp('10%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    button_emodji: {
        position: 'absolute',
        width: 25,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        left: 0,
        marginLeft: hp('1%')
    },

    button_link: {
        position: 'absolute',
        width: 25,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        marginRight: hp('1%')
    },
    background: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container_user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: hp('2%'),
    },
    container_icon: {
        alignItems: 'center',
        marginTop: hp('0.5%'),
    },
    container_header_left_all: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})