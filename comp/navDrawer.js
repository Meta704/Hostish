import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native' ; 
import styles from './styles';

export default class NavDrawer extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View style={styles.navDrawer}>

                <TouchableOpacity style={styles.navButton} onPress={() => this.props.parentChangePage('info')}>
    				<Text style={styles.buttonText}>מידע</Text>
  				</TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => this.props.parentChangePage('gallery')}>
    				<Text style={styles.buttonText}>תמונות</Text>
  				</TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => this.props.parentChangePage('props')}>
    				<Text style={styles.buttonText}>אביזרים</Text>
  				</TouchableOpacity>

            </View>
        );
    }
}