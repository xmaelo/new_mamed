import React, { Component }from 'react';
import { Alert, View, StyleSheet, SafeAreaView, Image, Picker, Switch, StatusBar, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import {LocaleConfig} from 'react-native-calendars';

const testIDs = {
  menu: {
    CONTAINER: 'menu',
    CALENDARS: 'calendars_btn',
    CALENDAR_LIST: 'calendar_list_btn',
    HORIZONTAL_LIST: 'horizontal_list_btn',
    AGENDA: 'agenda_btn',
    EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
    WEEK_CALENDAR: 'week_calendar_btn'
  },
  calendars: {
    CONTAINER: 'calendars',
    FIRST: 'first_calendar',
    LAST: 'last_calendar'
  },
  calendarList: {CONTAINER: 'calendarList'},
  horizontalList: {CONTAINER: 'horizontalList'},
  agenda: {
    CONTAINER: 'agenda',
    ITEM: 'item'
  },
  expandableCalendar: {CONTAINER: 'expandableCalendar'},
  weekCalendar: {CONTAINER: 'weekCalendar'}
};
export default class RendezVousScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {}
    };
  }

  render() {
  	const date = new Date().toISOString().split("T")[0];
    return (
    	<View>
    		<View
    			style={{height: hp("60%")}}
    		>
			      <Agenda
			        testID={testIDs.agenda.CONTAINER}
			        items={{
					    "2021-02-27": [
					    	{name: <Text>'Reunion avec le docker marco'</Text>}, 
					    	{name: 'Fait un saut au village'}
					    ],
					    "2021-02-28": [
					    	{name: <Text>'Reunion avec le docker marco'</Text>}, 
					    	{name: 'Fait un saut au village'}
					    ],
					 }}        
			        renderItem={this.renderItem.bind(this)}
			        renderEmptyDate={this.renderEmptyDate.bind(this)}
			        rowHasChanged={this.rowHasChanged.bind(this)}
			         markedDates={{
					    '2021-02-26': {selected: true, marked: true},
					  }}
					theme={{
					    agendaDayTextColor: 'yellow',
					    agendaDayNumColor: 'green',
					    agendaTodayColor: 'red',
					    agendaKnobColor: 'blue'
					  }}
			      />
			</View>

	      	<View
	      		style={{justifyContent: 'center', alignItems: 'center',}}
	      	>
		      <Button
				  title="Ajouter un rendez-vous"
				  type="outline"
				  onPress={()=>this.setState({show: true})}
				/>
			</View>
			{this.state.show && (
		        <DateTimePicker
		          testID="dateTimePicker"
		          value={new Date(1598051730000)}
		          mode={"date"}
		          is24Hour={true}
		          display="default"
		          onChange={(event, selectedDate)=>this.setState({show: false})}
		        />
		    )}
	    </View>
    );
  }

 

  renderItem(item) {
    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: item.height}]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    console.log('date.toISOString', date.toISOString().split('T')[0])
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});