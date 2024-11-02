import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../screens/Feed/Feed';
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
                                drawerIcon: ({ color, size }) =>
                                    <Feather
                                        name='home'
                                        color={color}
                                        size={size}
                                    />,
                                drawerLabel: 'Home'
                            }
                        }
                    />
                    <Drawer.Screen
                        name='Feed'
                        component={Feed}
                        options={
                            {
                                drawerIcon: ({ color, size }) =>
                                    <Feather
                                        name='list'
                                        color={color}
                                        size={size}
                                    />,
                                drawerLabel: 'Feed'
                            }
                        }
                    />
                </Drawer.Group>
            </Drawer.Navigator>
        </>
    )
}

export default DrawerRoutes;

