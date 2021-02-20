import React, { useState }from 'react';
import { View, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, Input, Button, CheckBox } from 'react-native-elements';



const img = require('../../assets/imgs/logo.png')
function RegisterScreen ({ navigation }){

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
                    <Text h4>
                      Créer un compte
                    </Text>
                </View> 
                <View style={{marginTop: hp("3%")}}>
                    <Input
                       inputStyle={{marginTop: 5}}
                       label="Nom de famille"
                       containerStyle={{marginTop: -20, marginBottom: -10, marginBottom: -10}}
                       labelStyle={{color: "red", transform: [{ translateY: 20 }]}}
                       onChangeText={value => {}}
                      />
                      <Input
                       inputStyle={{marginTop: 5}}
                       containerStyle={{marginTop: -20, marginBottom: -10}}
                       label="Numéro de teléphone"
                       labelStyle={{color: "red", transform: [{ translateY: 20 }]}}
                       onChangeText={value => {}}
                      />
                      <Input
                       inputStyle={{marginTop: 5}}
                       containerStyle={{marginTop: -20, marginBottom: -10}}
                       label="Email"
                       labelStyle={{color: "red",transform: [{ translateY: 20 }]}}
                       onChangeText={value => {}}
                      />
                      <Input
                       containerStyle={{marginTop: -20, marginBottom: -10}}
                       inputStyle={{marginTop: 5}}
                       label="Password"
                       labelStyle={{color: "red", transform: [{ translateY: 20 }]}}
                       secureTextEntry={!false}
                       onChangeText={value => {}}
                      />
                      <Input
                       containerStyle={{marginTop: -20, marginBottom: -10}}
                       inputStyle={{marginTop: 5}}
                       label="Confirm password"
                       labelStyle={{color: "red", transform: [{ translateY: 20 }]}}
                       secureTextEntry={!false}
                       onChangeText={value => {}}
                      />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%')}}>
                        <CheckBox
                          title={
                            <View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>I agree to the</Text>
                                <Text style={{color: "red"}}> Terms of Services</Text>
                                <Text > and</Text>
                                </View>
                                <Text style={{color: "red"}}> Privacy Policy</Text>
                            </View>
                            }
                          checkedColor="red"
                          containerStyle={{backgroundColor: null, marginTop: -hp("3%")}}
                          checked={true}
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
                      title="Continue"
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%')}}>
                        <Text style={styles.slogan}>
                          Have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("LoginScreen")}
                        >
                            <Text style={{...styles.slogan, color: 'red' }}>
                              Sign In
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
        marginTop: hp('2%'),
        
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

export default RegisterScreen;