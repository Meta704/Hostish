import {AppRegistry, Text, View, TouchableWithoutFeedback, Dimensions, Modal} from 'react-native'
import React,{ Component } from "react";
import ImageElement from './imageElement';
import styles from './styles.js';

export default class ImageGallery extends Component{

    state = {
        modalVisible: false,
        modalImage: require('../assets/gallery/1.jpg'),
        images: [
            require('../assets/gallery/1.jpg'),
            require('../assets/gallery/2.jpg'),
            require('../assets/gallery/3.jpg'),
            require('../assets/gallery/4.jpg'),
            require('../assets/gallery/5.jpg'),
            require('../assets/gallery/6.jpg'),
            require('../assets/gallery/7.jpg'),
            require('../assets/gallery/8.jpg'),
        ]
    }

    setModalVisible(visible, imageKey){
        this.setState({ modalImage: this.state.images[imageKey]});
        this.setState({ modalVisible: visible })
    }

    getImage(){
        return this.state.modalImage;
    }

    render() {

        let images = this.state.images.map((val,key) => {
            return <TouchableWithoutFeedback key={key} 
            onPress={()=> {this.setModalVisible(true, key)} } >

            <View style={styles.imageWrap}>
                <ImageElement imgsource={val} />
            </View>

            </TouchableWithoutFeedback>
        });

        return (
            <View>
                <Modal 
                style={styles.modal} 
                animationType={'fade'}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={()=> {}}
                >
                    <View style={styles.modal}>
                        <Text style={styles.titleText} onPress={()=> {this.setModalVisible(false)}}>
                            X
                        </Text>
                        <ImageElement imgsource={this.state.modalImage}></ImageElement>
                    </View>

                </Modal>

                <View style={styles.imageContainer}>
                    {images}
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);