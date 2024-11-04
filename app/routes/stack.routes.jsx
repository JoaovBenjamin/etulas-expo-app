import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Register from '../screens/Resgister/Register';
import Paciente from '../screens/Paciente/Paciente';
import NewPaciente from '../screens/Paciente/new/NewPaciente';
import PutPaciente from '../screens/Paciente/put/PutPaciente';

const Stack = createNativeStackNavigator();

export default function StackRoute() {
    return (
        <>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Registro' component={Register}/>
                <Stack.Screen 
                    name="NewPaciente" 
                    component={NewPaciente} 
                />
                <Stack.Screen name='PutPaciente' component={PutPaciente}/>
            </Stack.Navigator>
        </>
    );
}


