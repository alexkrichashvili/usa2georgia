import React, { useState } from 'react';
import {
     View,
     StyleSheet,
     TouchableWithoutFeedback,
     Text,
     ScrollView,
     Image,
} from 'react-native';
const options = ['თბილისი', 'რუსთავი', 'ქუთაისი', 'ბათუმი', 'თელავი'];
function Dropdown({ selectedItem, setSelectedItem }) {
     const [active, setActive] = useState(false);

     return (
          <View>
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
                                          <Text style={styles.text}>
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
          backgroundColor: '#ffff',
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
     },

     absolute: {
          position: 'absolute',
          width: '100%',
          top: 79,
          zIndex: 5,
     },
});

export default Dropdown;
