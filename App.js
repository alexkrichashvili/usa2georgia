import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RegisterNavigation from './navigation/RegisterNavigation';

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
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
     },
});
