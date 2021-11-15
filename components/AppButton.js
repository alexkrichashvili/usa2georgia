import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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
                         // {
                         //      color: isPerson ? '#F68220' : '#A9A9A9',
                         // },

                         { color: isActive ? 'white' : 'black' },
                    ]}
               >
                    {title}
               </Text>
          </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
     button: {
          backgroundColor: '#F68220',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,

          marginVertical: 10,
     },
});

export default AppButton;
