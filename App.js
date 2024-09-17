import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login/Login';
import Home from './app/screens/Home/Home';
import Register from './app/screens/Resgister/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Registro' component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


