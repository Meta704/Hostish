import React from 'react';
import styles from './styles.js';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'native-base';


export default class EditProps extends React.Component{

	render(){
		return (
                <ScrollView style={styles.scroll}>

                    <Text>Institution Props</Text>

                </ScrollView>
		);
	}
}
