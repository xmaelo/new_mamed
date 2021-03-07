import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function PatientListScreen(props){
	const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
	    StatusBar.setBarStyle('dark-content', false);
	    // axios.get('https://randomuser.me/api/?results=150').then(({ data }) => {
	    //   setUsers(data.results);
	    // });
	  }, []
	);

	return(
		<View style={{ flex: 1, paddingTop: 10 }}>
	      <View style={styles.container}>
	        <View style={styles.searchView}>
	          <View style={styles.inputView}>
	            <TextInput
	              defaultValue={searchText}
	              style={styles.input}
	              placeholder='Search'
	              textContentType='name'
	              onChangeText={(text) => {
	                setSearchText(text);
	                if (text === '') {
	                  return setFilteredUsers([]);
	                }
	                const filtered_users = users.filter((user) =>
	                  user.name.first.toLowerCase().startsWith(text.toLowerCase())
	                );
	                setFilteredUsers(filtered_users);
	              }}
	              returnKeyType='search'
	            />
	            {searchText.length === 0 ? (
	              <TouchableOpacity>
	                <Icon name='search' size={24} color='#333' />
	              </TouchableOpacity>
	            ) : (
	              <TouchableOpacity
	                onPress={() => {
	                  setSearchText('');
	                  setFilteredUsers([]);
	                }}
	              >
	                <Icon name='cancel' size={24} color='#333' />
	              </TouchableOpacity>
	            )}
	          </View>
	        </View>
	        {[1, 2].length > 0 ? (
	          <ScrollView>
	            {[1, 2].map((user) => (
	              <TouchableOpacity
	                key={user}
	                style={styles.userCard}
	                onPress={() => {
	                	props.navigation.navigate('PatientDataScreen');
	                  // Alert.alert(
	                  //   `${user.name.first} ${user.name.last}`,
	                  //   `You can call me at ${user.phone}`
	                  // );
	                }}
	              >
	              	<View style={{flexDirection: "row", alignItems: 'center',}}>
		                <Image
		                  style={styles.userImage}
		                  source={require('../../assets/imgs/doc.jpg')}
		                />
		                <View style={styles.userCardRight}>
		                  <Text
		                    style={{ fontSize: 18, fontWeight: '500' }}
		                  >Ismael Bienvenu</Text>
		                  <Text  style={{color: "#5F666D", fontSize: 15}}>695 93 07 73</Text>
		                  <Text style={{color: "#5F666D", fontSize: 13}}>Last update: 20/03/2021</Text>
		                </View>
		            </View>
	                <View>
		                <View style={{flexDirection: "row"}} >
		                	<Ionicons name="call" size={20} color="#4793CC" style={{paddingHorizontal: 20}} />
		                	<Ionicons name="chatbubble" size={20} color="#4793CC"/>
		                </View>
		            </View>
	              </TouchableOpacity>
	            ))}
	            <View style={{ height: 50 }}></View>
	          </ScrollView>
	        ) : searchText.length > 0 ? (
	          <View style={styles.messageBox}>
	            <Text style={styles.messageBoxText}>No user found</Text>
	          </View>
	        ) : (
	          <View style={styles.messageBox}>
	            <Text style={styles.messageBoxText}>Search for users</Text>
	          </View>
	        )}
	      </View>
	    </View>
	)
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  searchView: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputView: {
    flex: 1,
    height: 40,
    backgroundColor: '#dfe4ea',
    paddingHorizontal: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  userCard: {
    backgroundColor: '#fafafa',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "space-between",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
  messageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBoxText: {
    fontSize: 20,
    fontWeight: '500',
  },
});