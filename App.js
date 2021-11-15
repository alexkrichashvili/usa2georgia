import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RegisterNavigation from './navigation/RegisterNavigation';
import colors from './config/colors';

export default function App() {
     return (
          <NavigationContainer>
               <RegisterNavigation />
          </NavigationContainer>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'center',
     },
});
