import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AppButton from '../components/AppButton';
import Header from '../components/Header';

const backIcon = require('../assets/icons/Mask3.png');
const pageIcon = require('../assets/icons/group13.png');

function RegisterScreen3({ navigation }) {
     const [password, setPassword] = useState('');
     const [repeatPassword, setRepeatPassword] = useState('');

     const handleSubmit = () => {
          if (password === repeatPassword) {
               console.log(password);
          }
     };
     return (
          <>
               <View style={styles.container}>
                    <Header pageIcon={pageIcon} backIcon={backIcon} />
                    <Text style={styles.txt}>საკონტაქტო ინფორმაცია</Text>

                    <AppTextInput
                         onChangeText={setPassword}
                         placeholder="პაროლი"
                    />

                    <AppTextInput
                         onChangeText={setRepeatPassword}
                         placeholder="გაიმეორეთ პაროლი"
                    />
               </View>

               <Text style={styles.txt}>არიჩიეთ ფილიალი ან ლოქერი</Text>

               <View style={styles.Wrapper}>
                    <View style={styles.iconBackground}>
                         <Image
                              source={require('../assets/icons/map-pin.png')}
                         />
                    </View>

                    <Text style={styles.brunch}>ფილიალების სია</Text>
               </View>
               <View style={styles.nextBtnWrapper}>
                    <AppButton
                         onPress={() => {
                              handleSubmit();
                         }}
                         style={styles.bigButton}
                         title="გაგრძელება"
                         isActive
                    />
               </View>
          </>
     );
}

const styles = StyleSheet.create({
     container: {},

     txt: {
          marginLeft: 30,
          fontWeight: 'bold',
          marginVertical: 20,
     },
     nextBtnWrapper: {
          backgroundColor: '#fff',
          width: '100%',
          position: 'absolute',
          bottom: 15,
          alignItems: 'center',
          justifyContent: 'center',
          height: 79,
     },
     bigButton: {
          width: 325,
          height: 60,
          borderRadius: 4,
     },
     Wrapper: {
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignItems: 'center',

          height: 79,
          paddingLeft: 30,
     },
     iconBackground: {
          borderRadius: 50,
          borderColor: 'rgba(246, 130, 32, 0.05)',
          backgroundColor: 'rgba(246, 130, 32, 0.05)',
          width: 48,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
     },
     brunch: {
          marginLeft: 10,
          color: '#F68220',
     },
});

export default RegisterScreen3;
