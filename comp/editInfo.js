import React from 'react';
import styles from "../comp/styles.js";
import { View, Button, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';


export default class EditInfo extends React.Component{

	render(){
		return (
                <View style={styles.scroll}>

					<View style={styles.container}>
                    
						<View style={styles.rowContainer}>
							<TextInput style = {localStyles.inputField} placeholder = "   " />
							<Text style={styles.notes}> טלפון </Text>
						</View>
							
						<View style={styles.rowContainer}>
							<TextInput style = {localStyles.inputField} placeholder = "   " />
							<Text style={styles.notes}> כתובת </Text>
						</View>

						<View style={styles.rowContainer}>
							<Button style = {styles.mainButton} title="סנכרן לוח שנה Gmail" />
						</View>

					</View>

                </View>
		);
	}
}

const localStyles = StyleSheet.create({

	inputField: {
	  color: '#f59753',
	  textAlign: 'center',
	  margin: 5,
	  fontSize: 20,
	  width: '80%', 
	  height: 30,
	  backgroundColor: '#5c5c5c',
	  borderColor: '#111', 
	  borderWidth: 1,
	  borderRadius: 10,
	  paddingHorizontal: 16,
	}
	
  });
