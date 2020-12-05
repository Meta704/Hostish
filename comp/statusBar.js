import React, { Component } from 'react';
import { StatusBar } from 'react-native'

export default class StatusLine extends Component{
    render(){
        return(
            <StatusBar 
                barStyle = "dark-content" 
                hidden = {false} 
                backgroundColor = "#db7739" 
                networkActivityIndicatorVisible = {false}
            />
        );
    }
}