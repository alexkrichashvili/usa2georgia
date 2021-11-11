import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

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

          backgroundColor: '#ffff',
          borderBottomColor: '#F3F3F3',
          borderBottomWidth: 1,
          paddingRight: 75,
          height: 60,
          alignItems: 'center',
     },
     text: {
          // paddingRight: 25,
          color: '#DADADA',
     },

     input: {
          width: '100%',
          paddingLeft: 30,
     },
});

export default AppTextInput;
