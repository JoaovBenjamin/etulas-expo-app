import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Register from '../screens/Resgister/Register';

const Stack = createNativeStackNavigator();

export default function StackRoute() {
    return (
        <>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Registro' component={Register}/>
            </Stack.Navigator>
        </>
    );
}


