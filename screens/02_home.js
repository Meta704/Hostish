import React from 'react';
import Calendar from '../comp/calendar';
import { TouchableOpacity } from 'react-native' ; 
import { Text, SafeAreaView } from 'react-native';
import styles from '../comp/styles.js';


export default function Home({ navigation }){
	
	const actSearch = () =>{
		navigation.navigate('Search')
	}

	return(
		<SafeAreaView style={styles.fromTheTop}>

				<TouchableOpacity style={styles.mainButton} onPress={actSearch}>
    				<Text style={styles.buttonText}>חפש יעד</Text>
  				</TouchableOpacity>

				<Text style={styles.titleText}>
					--- לו"ז מתחם ---
				</Text>

				<SafeAreaView style={styles.calendarContainer}>
					<Calendar />
				</SafeAreaView>
			  	
			</SafeAreaView>
	);

}



