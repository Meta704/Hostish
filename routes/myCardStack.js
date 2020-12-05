import {createStackNavigator} from 'react-navigation-stack';
import MyCard from '../screens/03_myCard';
import React from 'react';
import Header from '../shared/header';


const screens = {

    MyCard:{
        screen: MyCard,
        navigationOptions: ( {navigation} ) =>{
            return {
                headerTitle: () => <Header navigation={navigation} title='הגדרות מתחם' />,
              }
        }
    },
}

const MyCardStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle:{
            backgroundColor: '#db7739',
            height: 70
        }
    }
});

export default MyCardStack;