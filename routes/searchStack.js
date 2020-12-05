import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/02_home';
import Search from '../screens/04_search';
import Header from '../shared/header';
import React from 'react';


const screens = {
    Home:{
        screen: Home,
        navigationOptions: ( {navigation} ) =>{
            return {
                headerTitle: () => <Header navigation={navigation} title='הלו"ז שלי' />,
              }
        }
    },
    Search:{
        screen: Search,
        navigationOptions: ( {navigation} ) =>{
            return {
                headerTitle: () => <Header navigation={navigation} title='חיפוש' />,
              }
        }
    },
    
    
}

const SearchStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle:{
            backgroundColor: '#db7739',
            height: 70
        }
    }
});

export default SearchStack;