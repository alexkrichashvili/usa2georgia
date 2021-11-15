import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import colors from '../config/colors';

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
                         secureTextEntry={true}
                    />

                    <AppTextInput
                         onChangeText={setRepeatPassword}
                         placeholder="გაიმეორეთ პაროლი"
                         secureTextEntry={true}
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
     txt: {
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
          height: 79,
     },
     bigButton: {
          width: 325,
          height: 60,
          borderRadius: 4,
     },
     Wrapper: {
          flexDirection: 'row',
          backgroundColor: colors.white,
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
          color: colors.orange,
     },
});

export default RegisterScreen3;
