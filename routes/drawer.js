import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
import { createAppContainer,SafeAreaView } from 'react-navigation';
import React from 'react';
import { StyleSheet, Image, ImageBackground} from 'react-native';

import InitStack from './initStack';
import HomeStack from './homeStack';
import MyCardStack from './myCardStack';
import SearchStack from './searchStack'
import Login from './loginStack';

//Side Menu Links:

const RootDrawNavigator = createDrawerNavigator({
    HomeStack: {
        screen: HomeStack,
        navigationOptions: {
            title: 'הלו"ז שלי',
        }
    },
    MyCardStack: {
        screen: MyCardStack,
        navigationOptions: {
            title: 'הגדרות מתחם',
        }
    },
    InitStack: {
        screen: InitStack,
        navigationOptions: {
            title: 'התנתקות',
            drawerLockMode: 'locked-closed',
        }
    },
}, {
    initialRouteName: 'InitStack',
    drawerWidth: '50%',
    drawerPosition: 'right',
    drawerType: 'slide',
    overlayColor: '#rgba(0,0,0,0.8)',
    contentComponent: (props) => (
    
     <SafeAreaView style={styles.container}>
         <ImageBackground source={require('../assets/trees.jpg')} style={styles.imageBack}>
         <SafeAreaView style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/DibsGlow.png')} />
         </SafeAreaView>
         </ImageBackground>
        <DrawerItems {...props} />
     </SafeAreaView>
     
    )
 });

export default createAppContainer(RootDrawNavigator);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee'
    },
    logoContainer:{
        height: 100,
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 60,
    },
    logo:{
        width: 100,
        resizeMode: 'contain',
    },
    imageBack:{
        marginTop: '-30%',
        resizeMode: 'contain'
    }
  });