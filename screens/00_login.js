import React, { useState, useEffect } from "react";
import {  Image,  Text,  View,  TextInput,  Dimensions,  TouchableOpacity,} from "react-native";
import styles from "../comp/styles.js";
import StatusLine from "../comp/statusBar";
import { firebaseConfig } from "../db/db.config";
import "firebase/auth";

console.disableYellowBox = true;
const { width, height } = Dimensions.get("window");

//-----------------------------------------------------------------------------------------------------------

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        UserPhone: "",
        UserPassword: "",
      },
    };
  }

  // componentDidMount() {
  //   // Listen for authentication state to change.
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user != null) {
  //       console.log("Loading...");
  //     }
  //     console.log("Please log in");

  //     // Do other things
  //   });
  // }

  btnGo = async () => {
   
  }

  btnSign = async () => {
    //this.props.navigation.navigate("Register");
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword('test@test.com', '123456')
    //   .then((user) => {
    //   this.setState({user},function(){console.log('user => ',this.state.user)})
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    //   });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusLine style={styles.StatusBar} />

        <Image style={styles.logo} source={require("../assets/DibsGlow.png")} />

        <Text style={styles.bigTitle}>התחברות</Text>

        <TextInput 
          style={styles.inputField} 
          placeholder=" טלפון " 
          onChangeText={text => this.setState({UserPhone: text})}
        />
        <TextInput
          style={styles.inputField}
          placeholder=" סיסמה "
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={this.btnGo}>
          <Text style={styles.buttonText}>התחברות</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.btnSign}>
          <Text style={styles.links}> רישום חדש </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
