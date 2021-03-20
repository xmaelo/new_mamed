import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform, ScrollView } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text, Input, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useFocusEffect } from '@react-navigation/native';
export default function DashbordScreen(props) {
    const chart = {
    	chart1: {
		    type: 'angulargauge', 
		    renderAt: 'chart-container',
		    width: wp("94%"),
		    height: hp("31.5%"),
		    dataFormat: 'json',
		    dataSource: {
		      "chart": {
		        "caption": "Mon IMC",
		        "subcaption": "Calcul d'IMC",
		        "lowerLimit": "0",
		        "upperLimit": "",
		         "showValue": "1",
		        "theme": "fusion"
		      },
		      "colorRange": {
		        "color": [{
		          "minValue": "0",
		          "maxValue": "18.5",
		          "code": "#9AC01D"
		        }, {
		          "minValue": "18.5",
		          "maxValue": "24.9",
		          "code": "#41A72A"
		        }, {
		          "minValue": "24.9",
		          "maxValue": "29.9",
		          "code": "#E7AA0D"
		        }, {
		          "minValue": "29.9",
		          "maxValue": "40",
		          "code": "#E6521B"
		        }, {
		          "minValue": "40",
		          "maxValue": "50",
		          "code": "#561A1C"
		        }]
		      },
		      "dials": {
		        "dial": [{}]
		      }
		    }
		},
		chart2: {
			type: 'msspline',
		    renderAt: 'chart-container',
		    width: wp("94%"),
		    height: hp("40%"),
		    dataFormat: 'json',
		    dataSource: {
		      "chart": {
		        "theme": "fusion",
		        "caption": "Pression artérielle",
		        "subCaption": "",
		        "xAxisName": "",
		        "yAxisName": "",
		        "showXAxisLine": "1",
		        "xAxisLineColor": "#999999"
		      },
		      "categories": [{
		        "category": [{
		            "label": "Lun"
		          },
		          {
		            "label": "Mar"
		          },
		          {
		            "label": "Mer"
		          },
		          {
		            "label": "Jeu"
		          },
		          {
		            "label": "Ven"
		          },
		          {
		            "label": "Sam"
		          },
		          {
		            "label": "dim"
		          }
		        ]
		      }],

		  "dataset": [{
		      "seriesname": "Systole",
		      "data": []
		    },
		    {
		      "seriesname": "Diastole",
		      "data": []
		    }
		  ]
		}
		},
		chart3: {
			type: 'column2d',
		    renderAt: 'chart-container',
		    width: wp("94%"),
		    height: hp("40%"),
		    dataFormat: 'json',
		    dataSource: {
		      "chart": {
		        "caption": "Pouls/Bâtement par min",
		        "subCaption": "",
		        "xAxisName": "Temps",
		        "yAxisName": "",
		        "numberPrefix": "",
		        "theme": "fusion"
		      },
		      "data": []
		    }
		}
	}

	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const [state, setState] = useState(chart);
	const [user, setUser] = useState(null);

	useFocusEffect(
	    React.useCallback(() => {
			async function get() {
		      const userId = auth().currentUser.uid;
		      let user = database().ref('users/'+userId);
		      user.on('value', (snapshot) => {
		      	const t = snapshot.val();
		      	setUser(snapshot.val());
		      	chart.chart1.dataSource.dials.dial[0].value = parseFloat(t.poids)/(parseFloat(t.taille)*parseFloat(t.taille));
		      	setState(chart)
		      })

		      let diabetes = database().ref('mesures/'+userId).limitToLast(7);
		      let dataSystole = [];
		      let dataDias = [];
		      let freq = [];
		      diabetes.on('value', (snapshot) => {
		      	    if(snapshot && snapshot.val()){
						for (const [key, value] of Object.entries(snapshot.val())) {
							let sys = {value: value.systole, date: value.date}
							let dias = {value: value.diastole, date: value.date}
							const b = new Date(value.date)
							let f = {value: parseInt(value.freqenceCoeur), label:  days[b.getDay()], date: value.date}
							freq.push(f);
							dataSystole.push(sys)
							dataDias.push(dias)
						}
						console.log('dataSystole ===>', dataDias)
						chart.chart2.dataSource.dataset[0].data = []
						chart.chart2.dataSource.dataset[1].data = []

						dataSystole = dataSystole.sort(function(a,b){
						  return new Date(b.date) - new Date(a.date);
						});
						chart.chart2.dataSource.dataset[0].data = dataSystole

						dataDias = dataDias.sort(function(a,b){
						  return new Date(b.date) - new Date(a.date);
						});
						chart.chart2.dataSource.dataset[1].data = dataDias

						freq = freq.sort(function(a,b){
						  return new Date(b.date) - new Date(a.date);
						});

						const result = freq.filter((val, i)=>{
						  let s =  freq.filter(vals=>vals.label === val.label);
						  if(s.length>1){
						    s = s.sort((a,b) => b.value - a.value)
						    if(s[0].value === val.value){
						      return true
						    }
						  }else{
						    return true;
						  }
						})
					    chart.chart3.dataSource.data = result

						setState(chart)
						console.log('chart.chart2.dataSource.dataset[1].data', state.chart2.dataSource.dataset[1].data)
					}
				});	
		    }
		    get();
		    return;
		  }, []
		)
	);



    const libraryPath = Platform.select({
      android: { uri: 'file:///android_asset/fusioncharts.html' }
    });

    return (
    	<ScrollView style={styles.container1}>
	      <View style={styles.container}>
	        <View style={styles.chartContainer}>
	          <FusionCharts
	            type={state.chart1.type}
	            width={state.chart1.width}
	            height={state.chart1.height}
	            dataFormat={state.chart1.dataFormat}
	            dataSource={state.chart1.dataSource}
	            libraryPath={libraryPath} // set the libraryPath property
	          />
	        </View>
	        <View style={styles.chartContainer}>
	          <FusionCharts
	            type={state.chart2.type}
	            width={state.chart2.width}
	            height={state.chart2.height}
	            dataFormat={state.chart2.dataFormat}
	            dataSource={state.chart2.dataSource}
	            libraryPath={libraryPath} // set the libraryPath property
	          />
	        </View>
	        <View style={styles.chartContainer}>
	          <FusionCharts
	            type={state.chart3.type}
	            width={state.chart3.width}
	            height={state.chart3.height}
	            dataFormat={state.chart3.dataFormat}
	            dataSource={state.chart3.dataSource}
	            libraryPath={libraryPath} // set the libraryPath property
	          />
	        </View>
	      </View>
	      <View style={{height: 30}}>
	      </View>
	    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1
  },
  container: {
    padding: 10
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  chartContainer: {
    height: 200
  }
});



