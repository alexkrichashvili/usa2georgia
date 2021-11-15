import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AppButton({
     title,
     onPress,
     style,
     textStyle,
     isActive,
     isPerson,
     ...otherProps
}) {
     return (
          <TouchableOpacity
               style={[
                    styles.button,
                    { backgroundColor: isActive ? '#F68220' : 'white' },
                    { borderBottomWidth: isPerson ? 2 : null },
                    { borderBottomColor: isPerson ? '#F68220' : '#EBEBEB' },

                    style,
               ]}
               onPress={onPress}
               {...otherProps}
          >
               <Text
                    style={[
                         textStyle,

                         isPerson && styles.orange,
                         isActive && styles.white,
                    ]}
               >
                    {title}
               </Text>
          </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
     button: {
          backgroundColor: colors.orange,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,

          marginVertical: 10,
     },
     orange: {
          color: colors.orange,
     },
     white: {
          color: colors.white,
     },
});

export default AppButton;
