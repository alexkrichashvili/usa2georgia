import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function AppTextInput({ onChangeText, lang, ...otherProps }) {
     return (
          <View style={styles.container}>
               <TextInput
                    onChangeText={onChangeText}
                    placeholderTextColor={'#A9A9A9'}
                    style={styles.input}
                    {...otherProps}
               />
               {lang ? <Text style={styles.text}>{lang}</Text> : null}
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          backgroundColor: colors.white,
          borderBottomColor: '#F3F3F3',
          borderBottomWidth: 1,
          paddingRight: 75,
          height: 79,
          alignItems: 'center',
          zIndex: 1,
     },
     text: {
          color: '#DADADA',
     },

     input: {
          width: '100%',
          paddingLeft: 30,
     },
});

export default AppTextInput;
