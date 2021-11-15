import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
     street: Yup.string().required().label('Street'),
     house: Yup.string().required().label('House'),
});

const backIcon = require('../assets/icons/Mask3.png');
const pageIcon = require('../assets/icons/Group12.png');

function RegisterScreen2({ navigation }) {
     const [selectedItem, setSelectedItem] = useState('აირჩიეთ ქალაქი');
     return (
          <Formik
               initialValues={{
                    street: '',
                    house: '',
               }}
               onSubmit={values => {
                    console.log(values);
               }}
               validationSchema={validationSchema}
          >
               {({ handleChange, handleSubmit, errors }) => (
                    <>
                         <View style={styles.container}>
                              <Header pageIcon={pageIcon} backIcon={backIcon} />

                              <Text style={styles.info}>
                                   საკონტაქტო ინფორმაცია
                              </Text>

                              <AppTextInput
                                   onChangeText={handleChange('street')}
                                   placeholder="ქუჩის დასახელება"
                              />

                              <AppTextInput
                                   onChangeText={handleChange('house')}
                                   placeholder="ბინის # სადარბაზოს, სართული"
                              />
                         </View>
                         <Dropdown
                              selectedItem={selectedItem}
                              setSelectedItem={setSelectedItem}
                         />

                         <View style={styles.nextBtnWrapper}>
                              <AppButton
                                   onPress={() => {
                                        handleSubmit;
                                        navigation.navigate('RegisterScreen3');
                                   }}
                                   style={styles.bigButton}
                                   title="გაგრძელება"
                                   isActive
                              />
                         </View>
                    </>
               )}
          </Formik>
     );
}

const styles = StyleSheet.create({
     info: {
          marginLeft: 30,
          fontWeight: 'bold',
          marginVertical: 20,
     },
     nextBtnWrapper: {
          backgroundColor: colors.white,
          width: '100%',
          position: 'absolute',
          bottom: 15,
          alignItems: 'center',
          justifyContent: 'center',
     },
     bigButton: {
          width: 325,
          height: 60,
          borderRadius: 4,
     },
});

export default RegisterScreen2;
