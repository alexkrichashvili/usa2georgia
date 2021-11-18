import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RegisterNavigation from './navigation/RegisterNavigation';
import colors from './config/colors';
import Servicecenters from './screens/Servicecenters';

export default function App() {
     return (
          <View>
               <Servicecenters />
          </View>
          // <NavigationContainer>
          //      <RegisterNavigation />
          // </NavigationContainer>
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
