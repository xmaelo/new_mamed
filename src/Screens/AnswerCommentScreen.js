import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
  Dimensions
} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Feather   from 'react-native-vector-icons/Feather';
import Search from '../Components/Search';
import RoundedImage from '../Components/RoundedImage';
import AppText from '../Components/AppText';
import PostCard from '../Components/PostCard';
import color from '../themes/Color'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Comments, SendComment} from '../Components/CommentSection'

export default function AnswerCommentScreen(){
	const [messages, setMessages] = useState([
	    { sender: 'John Doe', message: 'Hey there!', time: '6:01 PM' },
	    { sender: 'Robert Henry', message: 'Hello, how are you doing?',time: '6:02 PM' },
	    { sender: 'John Doe', message: 'I am good, how about you?', time: '6:02 PM'}
    ])

    return(
    	<View style={{ ...styles.container }}>
    		<ScrollView showsVerticalScrollIndicator={false} vertical={true}>
    			<Comments comments={messages.slice(1, 2)}/>
    			<View style={{marginLeft: 30}}>
    				<Comments comments={messages} noAnswer={true}/>
    			</View>
    		</ScrollView>
    		<SendComment />
    	</View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    paddingTop: hp("1%"),
  }
});