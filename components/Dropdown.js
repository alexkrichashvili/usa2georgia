import React, { useState } from 'react';
import {
     View,
     StyleSheet,
     TouchableWithoutFeedback,
     Text,
     ScrollView,
     Image,
} from 'react-native';
import colors from '../config/colors';
const options = ['თბილისი', 'რუსთავი', 'ქუთაისი', 'ბათუმი', 'თელავი'];
function Dropdown({ selectedItem, setSelectedItem }) {
     const [active, setActive] = useState(false);

     return (
          <View style={{ zIndex: 10 }}>
               <TouchableWithoutFeedback
                    onPress={() => {
                         setActive(true);
                    }}
               >
                    <View style={styles.select}>
                         <Text style={styles.text}>{selectedItem} </Text>
                         {!active ? (
                              <Image
                                   style={styles.image}
                                   source={require('../assets/icons/Mask.png')}
                              />
                         ) : (
                              <Image
                                   style={styles.image}
                                   source={require('../assets/icons/Mask2.png')}
                              />
                         )}
                    </View>
               </TouchableWithoutFeedback>

               <ScrollView style={styles.absolute}>
                    {active
                         ? options.map((option, index) => (
                                <TouchableWithoutFeedback
                                     key={index}
                                     onPress={() => {
                                          setSelectedItem(option);
                                          setActive(false);
                                     }}
                                >
                                     <View style={styles.select}>
                                          <Text
                                               style={[
                                                    styles.text,
                                                    styles.black,
                                               ]}
                                          >
                                               {option}
                                          </Text>
                                     </View>
                                </TouchableWithoutFeedback>
                           ))
                         : undefined}
               </ScrollView>
          </View>
     );
}

const styles = StyleSheet.create({
     select: {
          backgroundColor: colors.white,
          borderBottomColor: '#F3F3F3',
          borderBottomWidth: 1,
          paddingRight: 75,
          height: 79,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
     },
     text: {
          width: '100%',
          paddingLeft: 30,
          color: colors.gray,
     },

     absolute: {
          position: 'absolute',
          top: 79,
          left: 0,
          width: '100%',
          zIndex: 5,
     },
     black: {
          color: colors.black,
     },
});

export default Dropdown;
