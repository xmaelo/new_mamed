import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Feather   from 'react-native-vector-icons/Feather';
import RoundedImage from '../Components/RoundedImage';
import AppText from '../Components/AppText';
import color from '../themes/Color'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export function SendComment(){
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


export function Comments({comments, navigation, post, noAnswer}){
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
			              	{!noAnswer &&
				              	<View style={{ marginRight: wp("45%")}}>
				              		<TouchableOpacity
				              			onPress={
				              				()=> post ? navigation.navigate("AnswerCommentScreen"): null
				              			}
				              		>
				              			<Text style={{color: color.blackText}}>Repondre</Text>
				              		</TouchableOpacity>
				              	</View>
				            }
			              </View>
			            </>
		            </TouchableWithoutFeedback>
		        	))
		        }
		  </>
		)

}


const styles = StyleSheet.create({



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
