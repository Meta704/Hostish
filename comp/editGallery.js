import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles.js';
import ImageGallery from './imageGallery'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default class EditGallery extends React.Component{

	render(){
		return (
                <ScrollView style={styles.scroll}>
                    <ImageGallery />
                    
                    <View style={styles.addImage}>
                    <TouchableOpacity style="flex: 1">
                        <Image style={styles.logo} source={require('../assets/add.png')} />
                    </TouchableOpacity>
                    </View>

                </ScrollView>
		);
	}
}
