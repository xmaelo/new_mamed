import React, { useState }  from 'react';
import { StyleSheet, Text, View, FlatList,SafeAreaView, TouchableHighlight} from 'react-native';
import UserContainer from '../Composants_Messagerie.js/Composants_Complets/UserContainer'
import Data from '../Data/Data_Message'
//importation de la library pour le responsive design
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../Components/Header';

const MessagItems = ({ item, movechatScreen}) => (
  <View style={styles.container_card}>

      <TouchableHighlight onPress={movechatScreen}
          underlayColor="#9DA7B5"
          activeOpacity={1}
          delayPressIn={500}
      >
          <View style={styles.container_userscontainer}>
              <UserContainer size={55} userprofile={item.image}
                  username={item.name}
                  new_message={item.message}
                  noread={item.non_lu}
                  
              />
          </View>
      </TouchableHighlight>
  </View>
)


export default function MessageScreen({navigation}) {
  const [currentUser] = useState({
    profile_image: 'https://randomuser.me/api/portraits/women/11.jpg',
  });

  const renderItems = ({item}) =>{
    return(
      <MessagItems
       item={item}
       movechatScreen={() => navigation.navigate('ChatScreen',
       { Userpp: item.image, Username: item.name, Message: item.message }
     )}
      />
    )
  }
  return (
    <View style={{ ...styles.container }}>
      <Header profile_image={currentUser.profile_image} navigation={navigation}/>
      <SafeAreaView style={{...styles.container, paddingTop: 0}}>
         <FlatList
         data={Data}
         keyExtractor={(item, index) =>String(index)}
         renderItem={renderItems}
         contentContainerStyle={{paddingBottom:hp('2%')}}
         />
      </SafeAreaView>
      <View style={{height: hp("8%")}}></View>
    </View>
  );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:hp('5%')
  },

  container_userscontainer: {
    height: hp('12%'),
    justifyContent: 'center',
    paddingLeft: hp('1%')
},
});