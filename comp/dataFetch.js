import React, { Component } from 'react'
import { View } from 'react-native';

export default class DataFetch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount(){
        return fetch('http://localhost:64961/')
    }

    render(){
        return(
            <View>

            </View>
        );
    }
}
