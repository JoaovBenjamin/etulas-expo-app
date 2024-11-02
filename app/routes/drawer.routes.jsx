import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Paciente from '../screens/Paciente/Paciente';
import StackRoute from './stack.routes';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
    return (
        <>
            <Drawer.Navigator screenOptions={{ title: '' }}>
                <Drawer.Group>
                    <Drawer.Screen
                        name='Home'
                        component={StackRoute}
                        options={
                            {
                                drawerIcon: ({ size }) =>
                                    <Feather
                                        name='home'
                                        color= 'green'
                                        size={size}
                                    />,
                                drawerLabel: 'Home'
                            }
                        }
                    />
                    <Drawer.Screen
                        name='Paciente'
                        component={Paciente}
                        options={
                            {
                                drawerIcon: ({ size }) =>
                                    <Feather
                                        name='user'
                                        color='green'
                                        size={size}
                                    />,
                                drawerLabel: 'Paciente'
                            }
                        }
                    />
                </Drawer.Group>
            </Drawer.Navigator>
        </>
    )
}

export default DrawerRoutes;

