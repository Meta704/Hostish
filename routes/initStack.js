import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/00_login';
import Register from '../screens/01_register';


const screens = {
    
    Login:{
        screen: Login,
        navigationOptions: {
            header: () => null,
        }
    },
    Register:{
        screen: Register,
        navigationOptions: {
            title: 'רישום חדש'
        }
    }
}

const InitStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle:{
            backgroundColor: '#db7739',
            height: 60
        }
    }
});

export default InitStack;