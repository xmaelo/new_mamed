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

export default function PostViewScreen(){

	const [messages, setMessages] = useState([
	    { sender: 'John Doe', message: 'Hey there!', time: '6:01 PM' },
	    { sender: 'Robert Henry', message: 'Hello, how are you doing?',time: '6:02 PM' },
	    { sender: 'John Doe', message: 'I am good, how about you?', time: '6:02 PM'}
    ])
    const [currentUser] = useState({
	    name: 'XXXX',
	  });

	return(
		<View style={{ ...styles.container }}>
			<ScrollView showsVerticalScrollIndicator={false} vertical={true}>
        		<View style={{ paddingHorizontal: 10 }}>
		        	<View style={styles.post}>
			          <View style={styles.postHeader}>
			            <Image
			              style={{ width: 50, height: 50, borderRadius: 100 }}
			              source={{ uri: "https://randomuser.me/api/portraits/women/11.jpg"}}
			            />
			            <View style={{ flex: 1, paddingHorizontal: wp("3%") }}>
			              <Text style={{ color: color.blackText, fontSize: 18 }}>
			                {"nom prenom"}
			              </Text>
			            </View>
			            <TouchableOpacity style={{ paddingHorizontal: 6 }}>
			              <Feather name='more-horizontal' size={24} />
			            </TouchableOpacity>
			          </View>

			          {/* Post Content */}
			          <View style={{ paddingHorizontal: wp("1.5%") }}>
			            {/* Post Content Text */}
			            <Text style={{color: color.blackText}}>
			              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			              Exercitationem.
			            </Text>
			            {/* Post Content Image */}
			            <ScrollView horizontal={true} vertical={false} showsHorizontalScrollIndicator={false}>
			            	<View style={styles.postImg}>
			            		<View style={styles.singleImg}>
			            			<TouchableOpacity>
							            <Image
							              style={styles.postContentImage}
							              source={require("../../assets/imgs/demo.jpg")}
							            />
							        </TouchableOpacity>
						        </View>
						        <View style={styles.singleImg}>
						        	<TouchableOpacity>
							            <Image
							              style={styles.postContentImage}
							              source={require("../../assets/imgs/demo.jpg")}
							            />
						            </TouchableOpacity>
						        </View>
						        <View style={styles.singleImg}>
						        	<TouchableOpacity>
							            <Image
							              style={styles.postContentImage}
							              source={require("../../assets/imgs/demo.jpg")}
							            />
							        </TouchableOpacity>
						        </View>
					        </View>
				        </ScrollView>
			          </View> 
			          {/* Interactions Bar */}
			          <View style={styles.interactionBar}>
			            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
			              	<TouchableOpacity>
			              		<Ionicons name='heart' color={color.redFair} size={21} />
			              	</TouchableOpacity>
			              <Text style={styles.interactionText}>104</Text>
			            </View>
			            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
			            	<TouchableOpacity> 
			              		<Feather name='message-circle' size={24} />
			              	</TouchableOpacity>
			              <Text style={styles.interactionText}>23 </Text>
			            </View>
			            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
			            	<TouchableOpacity>
			              		<Feather name='share-2' size={24} />
			              	</TouchableOpacity>
			              <Text style={styles.interactionText}>5</Text>
			            </View>
			          </View>
					</View>
        		</View>
        
		        <Comments comments={messages}/>
        	</ScrollView>

	        <SendComment />
	    </View>
	)
}

function SendComment(){
	return(
		<View style={{ paddingVertical: hp("1%") }}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={""}
              style={styles.messageInput}
              placeholder='Message'
              onChangeText={(text) => {/*setInputMessage(text)*/}}
              onSubmitEditing={() => {
                //sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                //sendMessage();
              }}
            >
              <Ionicons name='send' />
            </TouchableOpacity>
          </View>
        </View>
		)
}
function Comments({comments}){
	return(
		  <>
		  	{comments.map((item, index)=> 
		        	(
		        	<TouchableWithoutFeedback key={index}>
		        		<>
			              <View style={{ marginTop: hp("2%"), flex: 1, flexDirection: 'row', marginHorizontal: wp("3%")}}>
			              	<Image
				              style={{ width: 40, height: 40, borderRadius: 100 }}
				              source={{ uri: "https://randomuser.me/api/portraits/women/11.jpg"}}
				            />
			                <View
			                  style={{
			                    backgroundColor: color.barColor,
			                    alignSelf: "flex-start",
			                    marginHorizontal: wp("3%"),
			                    padding: 10,
			                    borderRadius: 8,
			                    borderBottomLeftRadius: 0,
			                    borderBottomRightRadius: 8,
			                  }}
			                >
			                  <Text
			                    style={{
			                      color: 'black',
			                      fontSize: 16,
			                    }}
			                  >
			                    {item.message}
			                  </Text>
			                  <Text
			                    style={{
			                      color: 'black',
			                      fontSize: 14,
			                      alignSelf: 'flex-start',
			                    }}
			                  >
			                    {item.time}
			                  </Text>
			                </View> 
			              </View>
			              <View style={{
			              		flex: 1, 
			              		flexDirection: "row", 
			              		marginTop: hp("1%")
			              	}}>
			              	<View style={{flex: 1, flexDirection: 'row', marginLeft: wp("20%")}}>
			              		<Text>4 </Text>
			              		<TouchableOpacity>  
			              			<Ionicons name={index%2==0?'heart': 'heart-outline'} color={color.redFair} size={21} />
			              		</TouchableOpacity>
			              	</View>
			              	<View style={{ marginRight: wp("45%")}}>
			              		<TouchableOpacity>
			              			<Text style={{color: color.blackText}}>Repondre</Text>
			              		</TouchableOpacity>
			              	</View>
			              </View>
			            </>
		            </TouchableWithoutFeedback>
		        	))
		        }
		  </>
		)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    paddingTop: hp("1%"),
  },
  singleImg: {
  	width: wp('60%'),
  },
  postImg: {
  	flex: 1,
    flexDirection: 'row',
  },
  post: {
    borderColor: '#dfe4ea',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  postHeader: { padding: wp("1.5%"), flexDirection: 'row', alignItems: 'center' },
  postContentImage: {
    width: wp('55%'),
    height: hp("40%"),
    borderRadius: 10,
    marginTop: 10,
  },
  interactionBar: {
    backgroundColor: '#fafafa',
    height: 40,
    marginHorizontal: wp("3%"),
    marginTop: 4,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  interactionText: {
    fontFamily: 'NSRegular',
    color: '#000',
    marginLeft: 4,
  },
  interactionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp("1%"),
  },


  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: wp("3%"),
    backgroundColor: color.barColor,
    borderRadius: 10,
  },
  messageInput: {
    height: hp("7%"),
    flex: 1,
    paddingHorizontal: wp("3%"),
  },
  messageSendView: {
    paddingHorizontal: wp("3%"),
    justifyContent: 'center',
  },
});


