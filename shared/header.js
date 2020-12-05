import React from 'react';
import { StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }){

    const openMenu = () => {
        navigation.openDrawer()
    }

    return(
        <SafeAreaView style={styles.header}>

            <Image style={styles.logo} source={require('../assets/logoTrans.png')} />

            <Text style={styles.headerText}> {title} </Text>

            <MaterialIcons name="menu" size={36} onPress={openMenu} style={styles.icon} />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        letterSpacing: 4,
    },
    icon: {
    },
    logo: {
        width: 40,
        resizeMode: 'contain'
    }
});