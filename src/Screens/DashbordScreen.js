import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform, ScrollView } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text, Input, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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
		        "dial": [{
		          "value": "23"
		        }]
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
		          }
		        ]
		      }],

		  "dataset": [{
		      "seriesname": "",
		      "data": [
		        {
		          "value": "5"
		        },
		        {
		          "value": "2"
		        },
		        {
		          "value": "4"
		        }
		      ]
		    },
		    {
		      "seriesname": "",
		      "data": [{
		          "value": "3"
		        },
		        {
		          "value": "5"
		        },
		        {
		          "value": "1"
		        }
		      ]
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
		      "data": [
		        {
		          "label": "Lun",
		          "value": "2"
		        },
		        {
		          "label": "Mar",
		          "value": "4"
		        },
		        {
		          "label": "Mer",
		          "value": "3"
		        },
		        {
		          "label": "Jeu",
		          "value": "1"
		        },
		        {
		          "label": "Ven",
		          "value": "5"
		        }
		      ]
		    }
		}
	}

	const [state, setState] = useState(chart);
	const [user, setUser] = useState(null);

	useEffect(() => {
    (async()  =>{
      const userId = auth().currentUser.uid;
      let user = database().ref('users/'+userId);
      user.on('value', (snapshot) => {
      	const t = snapshot.val();
      	setUser(snapshot.val());
      	chart.chart1.dataSource.dials.dial[0].value = parseFloat(t.poids)/(parseFloat(t.taille)*parseFloat(t.taille));
      	setState(chart)
      })
    })();
  }, []);


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
