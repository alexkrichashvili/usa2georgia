import React, { useState, useRef } from 'react';

import {
     View,
     StyleSheet,
     Dimensions,
     Modal,
     Text,
     ScrollView,
     Image,
     Pressable,
} from 'react-native';
import Header2 from '../components/Header2';
import MapView, { Marker, Callout } from 'react-native-maps';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import Location from '../components/Location';
import LocationDetails from '../components/LocationDetails';

import branches from '../config/branches';

function Servicecenters() {
     const mapRef = useRef(null);

     const [servicecenters, setServicecenters] = useState('ცენტრები');
     const [branch, setBranch] = useState({
          title: 'ვაჟაფშაველას გამზირი 1',
          distance: '230 მ',
          coordinates: {
               latitude: 41.72842211274288,
               longitude: 44.76705201103984,
          },
     });
     const [modalVisible, setModalVisible] = useState(false);

     return (
          <View style={styles.container}>
               <Header2 title="სერვისცენტრები" />

               <MapView ref={mapRef} style={styles.map}>
                    <Marker
                         style={{ width: 200 }}
                         coordinate={branch.coordinates}
                    >
                         <View>
                              <Image
                                   style={{ width: 88 }}
                                   source={require('../assets/icons/marker.png')}
                              />
                         </View>
                         <Callout>
                              <Pressable
                                   onPress={() => {
                                        setModalVisible(true);
                                   }}
                                   style={styles.callout}
                              >
                                   <View>
                                        <Text>{branch.title}</Text>
                                        <Text style={styles.distanceTitle}>
                                             {branch.distance}
                                        </Text>
                                   </View>
                                   <View style={styles.locationIconWrapper}>
                                        <Image
                                             source={require('../assets/icons/locationIcon.png')}
                                        />
                                   </View>
                              </Pressable>
                         </Callout>
                    </Marker>
               </MapView>

               <View>
                    <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                         <View style={styles.view}>
                              <View style={styles.personWrapper}>
                                   <AppButton
                                        isPerson={servicecenters === 'ცენტრები'}
                                        style={styles.personBtn}
                                        title="ცენტრები"
                                        onPress={() => {
                                             setServicecenters('ცენტრები');
                                        }}
                                        textStyle={styles.textStyle}
                                   />
                                   <AppButton
                                        textStyle={styles.textStyle}
                                        style={styles.personBtn}
                                        title="ლოკერები"
                                        onPress={() => {
                                             setServicecenters('ლოკერები');
                                        }}
                                        isPerson={servicecenters === 'ლოკერები'}
                                   />
                              </View>

                              <ScrollView
                                   contentContainerStyle={{
                                        height: 445,
                                   }}
                              >
                                   {servicecenters === 'ცენტრები'
                                        ? branches.map((branch, index) => (
                                               <Location
                                                    onPress={() => {
                                                         setBranch(branch);
                                                         mapRef.current.animateToRegion(
                                                              branch.coordinates,
                                                              1 * 1000
                                                         );
                                                    }}
                                                    key={index}
                                                    title={branch.title}
                                                    distance={branch.distance}
                                               />
                                          ))
                                        : undefined}
                              </ScrollView>
                              <Modal
                                   style={{ flexDirection: 'column-reverse' }}
                                   animationType="slide"
                                   transparent={true}
                                   visible={modalVisible}
                              >
                                   <LocationDetails
                                        branch={branch}
                                        setModalVisible={setModalVisible}
                                   />
                              </Modal>
                         </View>
                    </View>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {},

     map: {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
     },

     view: {
          backgroundColor: colors.white,
          height: 426,
     },
     personWrapper: {
          flexDirection: 'row',
          justifyContent: 'space-around',
     },
     personBtn: {
          width: '50%',
          height: 65,
     },
     textStyle: {
          color: colors.gray,
     },
     callout: {
          height: 81,
          width: 251,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
     },
     locationIconWrapper: {
          height: 50,
          width: 50,
          backgroundColor: 'rgba(246, 130, 32, 0.1)',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
     },
     distanceTitle: {
          color: colors.gray,
     },
     scroll: {
          height: 1000,
          paddingBottom: 500,
     },
});

export default Servicecenters;
