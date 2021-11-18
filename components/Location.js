import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import colors from '../config/colors';

function Location({ title, distance, ...otherProps }) {
     return (
          <Pressable style={styles.container} {...otherProps}>
               <View style={styles.iconBackground}>
                    <Image source={require('../assets/icons/map-pin.png')} />
               </View>
               <View style={styles.titleWrapper}>
                    <Text style={styles.brunch}>{title}</Text>
                    <Text style={styles.distance}>{distance}</Text>
               </View>
          </Pressable>
     );
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          backgroundColor: colors.white,
          alignItems: 'center',
          height: 79,
          paddingLeft: 30,
          width: '100%',
          borderBottomColor: colors.lightGrey,
          borderBottomWidth: 1,
     },
     iconBackground: {
          borderRadius: 50,
          borderColor: 'rgba(246, 130, 32, 0.05)',
          backgroundColor: 'rgba(246, 130, 32, 0.05)',
          width: 48,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
     },
     brunch: {
          marginLeft: 10,
          color: colors.black,
     },
     titleWrapper: {
          flexDirection: 'column',
          justifyContent: 'center',
     },
     distance: {
          color: colors.gray,
          marginLeft: 10,
     },
});

export default Location;
