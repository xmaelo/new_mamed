import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, Input, Button } from 'react-native-elements';



const img = require('../../assets/imgs/logo.png')
function LoginScreen ({ navigation }){

    const [password, setPassword] = useState("");
    const [username, defineUsername] = useState("");

    const pressed = (text) =>{
        console.log('Text pressed');
    }
    const handlePress = () =>{
        console.log('Pressed')
    }
    const [pinSecure, setPinSecure] = useState(false);
    return(
        <>
            <StatusBar style="auto" backgroundColor="white" />
            <SafeAreaView style={styles.container}>
                <View style={styles.imgBloc}>
                    <Image
                        style={{ width: wp("40%"), height: hp("10%"), borderRadius: 100 }}
                        source={img}
                    />
                    <Text style={styles.slogan}>Mobile application </Text>
                    <Text style={styles.slogan}>for Medical documentation </Text>
                </View> 
                <View style={{marginTop: hp("4%")}}>
                    <Text h4>Sign In</Text>
                    <Text style={styles.slogan}>Hi there! Nice to see you again</Text>
                </View>
                <View style={{marginTop: hp("3%")}}>
                    <Input
                       placeholder="Username"
                       label="Email"
                       labelStyle={{color: "red"}}
                       leftIcon={
                        <Ionicons 
                            name={"person"} 
                            size={24}   
                        />
                       }
                       onChangeText={value => {}}
                      />

                      <Input
                       placeholder="Password"
                       label="Password"
                       labelStyle={{color: "red"}}
                       leftIcon={
                        <Ionicons 
                                name={"lock-closed"} 
                                size={24}   
                            />
                        }
                       rightIcon={
                        <TouchableOpacity
                            style={{padding: 4}}
                            onPress={()=>setPinSecure(!pinSecure)}
                        >
                            <Ionicons 
                                name={pinSecure ? "eye": "eye-off"} 
                                size={24}   
                            />
                        </TouchableOpacity>
                       }
                       secureTextEntry={!pinSecure}
                       onChangeText={value => {}}
                      />
                </View>
                <View> 
                    <Button
                      buttonStyle={{backgroundColor: "red", borderRadius: 20}}
                      icon={{
                        name: "arrow-right",
                        size: 15,
                        color: "white"
                      }}
                      onPress={()=>navigation.navigate("Main")}
                      title="Sign In"
                    />
                    <View style={{alignItems: "center", marginTop: hp("1%")}}>
                        <Text style={styles.slogan}>Or use one of you social profile</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('4%')}}>
                    <Icon.Button name="twitter" backgroundColor="#51ABF1">
                        <Text style={{ color: 'white', fontSize: 15, width: wp("25%") }}>
                          Twitter
                        </Text>
                    </Icon.Button>
                    <Icon.Button name="facebook" backgroundColor="#3b5998">
                        <Text style={{ color: 'white', fontSize: 15, width: wp("25%") }}>
                          Facebook
                        </Text>
                      </Icon.Button>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('3.7%')}}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("TabBarMed")}
                    >
                        <Text style={styles.slogan}>
                          Forgot password ?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("RegisterScreen")}
                    >
                        <Text style={{...styles.slogan, color: 'red' }}>
                          Sign Up
                        </Text> 
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: hp('6%'),
        
        paddingHorizontal: wp("6%"),
    },
    imgBloc: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slogan: {
        color: "#5F666D",
        fontSize: hp("2.3%")

    },
    test2: {
        marginTop: hp('3%'),
        // marginLeft: -wp('72%'),
        // paddingBottom: 50
    },
    img: {
        // marginTop: hp('6%'),
        height: hp('8.2%'),
        width: wp('40%')
    },
    imgContainer:{
        // paddingBottom: wp('30%')
    },
    forgotPass:{ 
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        paddingRight: wp("10%"),
        marginBottom: hp("2%"),
        width: wp('100%'),
    },
    textEntries: {
        alignContent: 'center', 
        justifyContent: 'center'
    },
    signup:{
        flexDirection:'row',
        width: wp('100%'),
        justifyContent: 'center',
        marginTop: wp('2%'),
    }
})

export default LoginScreen;