import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,Alert, TextInput, TouchableOpacity,StyleSheet, Text, View, SafeAreaView,Dimensions} from 'react-native' ; 
import styles from '../comp/styles.js';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const url = "http://localhost:49745/api";

export default class Register extends React.Component{

	constructor(props) {
        super(props);
        this.state = {
            user: {
                UserName: "",
                UserPassword: "",
                verifypassword: "",
                UserPhone: ""
            }

        }

    }

	actLogin = () =>{
		navigation.navigate('Login')
	}

	
    btnGo1 = () => {
        if (this.state.user.UserName == "") {
            Alert.alert("Error!")
        }
        else if (this.state.user.UserPassword != this.state.user.verifypassword) {
            Alert.alert("Passwords missmatch")
        }
        else {
            fetch(url + 'register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.user)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    Alert.alert("Welcome!")
                    this.props.navigation.navigate("Login");
                })
                .catch(err => console.log(err))
        }

    }

	render(){
	return(
		<ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
			<View style={styles.fromTheTop}>

			<Text style={styles.bigTitle}>
				רישום חדש	
			</Text>

			<TextInput
			style = {styles.inputField}
			placeholder = " תפקיד "
			onChangeText={(value) => this.state.user.UserName = value}
			/>

			<TextInput
			style = {styles.inputField}
			placeholder = " טלפון נייד "
			/>

			<TextInput
			style = {styles.inputField}
			placeholder = " סיסמה "
			secureTextEntry={true}
			/>

			<TextInput
			style = {styles.inputField}
			placeholder = " סיסמה בשנית "
			secureTextEntry={true}
			/>
			
			<TouchableOpacity style = {styles.button} onPress={this.btnGo1} >
				<Text style = {styles.buttonText}>
					הרשמה
				</Text>
			</TouchableOpacity>
			
			</View>
			</ScrollView>
	);
	}
}
	