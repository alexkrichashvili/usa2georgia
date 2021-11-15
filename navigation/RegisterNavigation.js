import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from '../screens/RegisterScreen';
import Header from '../components/Header';
import RegisterScreen2 from '../screens/RegisterScreen2';
import RegisterScreen3 from '../screens/RegisterScreen3';

const Stack = createStackNavigator();

const RegisterNavigation = () => (
     <Stack.Navigator
          screenOptions={{
               headerShown: false,
          }}
     >
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="RegisterScreen2" component={RegisterScreen2} />
          <Stack.Screen name="RegisterScreen3" component={RegisterScreen3} />
     </Stack.Navigator>
);

export default RegisterNavigation;
