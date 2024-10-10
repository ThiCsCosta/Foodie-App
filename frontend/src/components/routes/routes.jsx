import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/login.jsx'
import Registry from '../screens/registro/step_1/registry.jsx';
import Registry2 from '../screens/registro/step_2/registry2.jsx';
import { COLORS } from '../constants/themes.js';

const Stack = createNativeStackNavigator();

function Routes(){
    return<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login} options={
                {headerShown: false}
            }/>
            <Stack.Screen name='registry' component={Registry} options={
                {
                   // headerShown: false
                   headerTintColor: COLORS.medium_red,
                   headerShadowVisible: false,
                   headerTransparent: true,
                   title: '',
                }
            }/>
            <Stack.Screen name='registry_2' component={Registry2} options={
                {
                     // headerShown: false
                   headerTintColor: COLORS.medium_red, 
                   headerShadowVisible: false,
                   headerTransparent: true,
                   title: ''
                }
            }/>
        </Stack.Navigator>
    </NavigationContainer>
}
export default Routes;