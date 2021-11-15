import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

function Header({ backIcon, pageIcon }) {
     const navigation = useNavigation();
     return (
          <View style={styles.background}>
               <ImageBackground
                    style={{ width: '100%', height: 89 }}
                    source={require('../assets/Rectangle.png')}
               />
               <View style={styles.headline}>
                    {backIcon ? (
                         <TouchableOpacity
                              onPress={() => {
                                   navigation.goBack();
                              }}
                         >
                              <Image
                                   style={styles.closeIcon}
                                   source={backIcon}
                              />
                         </TouchableOpacity>
                    ) : (
                         <Image
                              style={styles.closeIcon}
                              source={require('../assets/icons/Fill1.png')}
                         />
                    )}
                    <Text style={styles.registerTxt}>რეგისტრაცია</Text>

                    <Image style={styles.icon} source={pageIcon} />
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

export default Header;
