import {AppRegistry, Image} from 'react-native'
import React,{ Component } from "react";
import styles from './styles.js';

export default class ImageElement extends Component{
    render() {
        return (
            <Image source={this.props.imgsource} style={styles.imgElement} />
        );
    }
}
