import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/00_login';



const screens = {
    
    Login:{
        screen: Login,
        navigationOptions: {
        }
    },
}

const LoginStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle:{
            backgroundColor: '#db7739',
            height: 70
        }
    }
});

export default LoginStack;