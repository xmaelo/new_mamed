import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import TabBg  from './TabBg';

export default function TabBarAdvancedButton({bgColor}){
  return ( 
    <View
      style={{...styles.container, backgroundColor: 'white'}}
      pointerEvents="box-none"
    >
      <TabBg
        color={bgColor}
        style={styles.background}
      />
      <TouchableOpacity
        style={styles.button}
      >
        <Ionicons
          name="scan"
          size={50}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: '#E94F37',
  },
  buttonIcon: {
    fontSize: 30,
    color: '#F6F7EB'
  }
});
