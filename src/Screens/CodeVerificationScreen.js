import React, { useState, useEffect }from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView,ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { getStateForKey } from "react-native-redux"
import CodeInput from 'react-native-code-input';
import { connect } from "react-native-redux"



function CodeVerificationScreen({route, navigation}){
	const [confirm, setConfirm] = useState(null);

	useEffect(() => {
		(async()  =>{	
		const confirmation = getStateForKey("user.confirmation");
		console.log('confirmation confirmation', confirmation)
		setConfirm(confirmation);
	    })()
	  }, []);

	const _onFinishCheckingCode2 = (code) => {
		console.log('code', code);
		confirmCode(code)
	}
	async function confirmCode(code) {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        confirm.verificationId,
        code,
      );
      let userData = await auth().currentUser.linkWithCredential(credential);
      //setUser(userData.user);
      //set local storage and dispatch user
    } catch (error) {
      if (error.code == 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log('Account linking witout error');
      }
    }
  }
	return(
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>VERIFICATION</Text>
          </View>
  
          <View style={[styles.inputWrapper, {backgroundColor: '#2980C3'}]}>
            <Text style={[styles.inputLabel, {color: '#fff', textAlign: 'center'}]}>
              ENTREZ LE CODE DE VERICATION
            </Text>
            <CodeInput
              codeLength={5}
              borderType='circle'
              autoFocus={false}
              codeInputStyle={{ fontWeight: '800' }}
              onFulfill={(code)=>_onFinishCheckingCode2(code)}
            />
          </View>
        </ScrollView> 
      </KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'red',
    fontSize: 16,
    fontWeight: '800',
    paddingVertical: 30
  },
  wrapper: {
    marginTop: 30
  },
  inputWrapper: {
  	borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '800'
  },
})


export default connect(CodeVerificationScreen, ["user"])