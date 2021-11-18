import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';

function Header2({ title }) {
     return (
          <View style={styles.background}>
               <ImageBackground
                    style={{ width: '100%', height: 89 }}
                    source={require('../assets/Rectangle.png')}
               />
               <View style={styles.headline}>
                    <Text style={styles.registerTxt}>{title}</Text>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     background: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
     },

     headline: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'relative',
          bottom: 30,
     },
     closeIcon: {
          height: 19,
          width: 19,
     },
     Icon: {
          height: 19,
          width: 19,
     },
     registerTxt: {
          color: colors.white,
          fontSize: 25,
     },
});

export default Header2;
