import React from 'react';
import {
     View,
     StyleSheet,
     Image,
     Pressable,
     Text,
     coordinate,
     ScrollView,
} from 'react-native';
import colors from '../config/colors';

function LocationDetails({ setModalVisible, branch }) {
     return (
          <View style={styles.container}>
               <View style={styles.wrapper}>
                    <View style={styles.streetWrapper}>
                         <View style={styles.street}>
                              <View style={styles.greenOval}></View>
                              <Text style={{ marginLeft: 15 }}>
                                   {branch.title}
                              </Text>
                         </View>
                         <Pressable
                              onPress={() => {
                                   setModalVisible(false);
                              }}
                         >
                              <Image
                                   source={require('../assets/icons/closeIcon.png')}
                              />
                         </Pressable>
                    </View>

                    <View style={styles.scheduleContainer}>
                         <View>
                              <Text style={styles.days}>
                                   ორშაბათი-პარასკევი
                              </Text>
                              <Text style={styles.days}>შაბათ</Text>
                              <Text style={styles.days}>კვირა</Text>
                         </View>
                         <View>
                              <Text style={styles.time}>19-00 - 20-00</Text>
                              <Text style={styles.time}>19-00 - 20-00</Text>
                              <Text style={styles.time}>19-00 - 20-00</Text>
                         </View>
                    </View>

                    <ScrollView
                         contentContainerStyle={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                              width: 600,
                              flex: 1,
                         }}
                    >
                         <Image
                              source={require('../assets/images/Rectangle5.png')}
                         />

                         <Image
                              source={require('../assets/images/Rectangle7.png')}
                         />
                         <Image
                              source={require('../assets/images/Rectangle6.png')}
                         />
                         <Image
                              source={require('../assets/images/Rectangle7.png')}
                         />

                         <Image
                              source={require('../assets/images/Rectangle6.png')}
                         />
                    </ScrollView>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'flex-end',
     },
     greenOval: {
          height: 10,
          width: 10,
          backgroundColor: '#22D390',
          borderRadius: 50,
     },
     wrapper: {
          backgroundColor: 'white',
          height: 370,
     },
     streetWrapper: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 30,
          paddingHorizontal: 25,
     },
     street: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
     },
     imageContainer: {
          flexDirection: 'column',
     },
     scheduleContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 25,
     },
     time: {
          color: colors.gray,
          fontSize: 16,
     },
     days: {
          fontSize: 16,
     },
});

export default LocationDetails;
