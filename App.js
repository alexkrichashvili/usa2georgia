import React, { useState } from 'react';
import {
     StyleSheet,
     Text,
     View,
     ScrollView,
     ImageBackground,
     Image,
     Switch,
} from 'react-native';
import AppTextInput from './components/AppTextInput';
import AppButton from './components/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from './components/DatePicker';

const validationSchema = Yup.object().shape({
     name: Yup.string().required().label('Name'),
     namelat: Yup.string().required().label('Name'),
     surname: Yup.string().required().label('Surname'),
     surnamelat: Yup.string().required().label('Surname'),
     email: Yup.string().required().label('Email'),
     number: Yup.string().required().label('Number'),
     dateofbirth: Yup.string().required().label('Date of birth'),
     pn: Yup.string().required().min(11).label('P/n'),
});

export default function App() {
     const [userSex, setUserSex] = useState();
     const [person, setPerson] = useState();
     const [isEnabled, setIsEnabled] = useState(false);

     const toggleSwitch = () => setIsEnabled(previousState => !previousState);

     return (
          <View style={styles.screen}>
               <View style={styles.background}>
                    <ImageBackground
                         style={{ width: '100%', height: 100 }}
                         source={require('./assets/Rectangle.png')}
                    />
                    <View style={styles.headline}>
                         <Image
                              style={styles.closeIcon}
                              source={require('./assets/Fill1.png')}
                         />
                         <Text style={styles.registrTxt}>რეგისტრაცია</Text>

                         <Image
                              style={styles.icon}
                              source={require('./assets/Group11.png')}
                         />
                    </View>
               </View>
               <ScrollView>
                    <View style={styles.personWrapper}>
                         <AppButton
                              isPerson={person === 'ფიზიკური'}
                              style={styles.personBtn}
                              title="ფიზიკური"
                              onPress={() => {
                                   setPerson('ფიზიკური');
                              }}
                         />
                         <AppButton
                              textStyle={styles.btnTxt}
                              style={styles.personBtn}
                              title="იურიდიული"
                              onPress={() => {
                                   setPerson('იურიდიული');
                              }}
                              isPerson={person === 'იურიდიული'}
                         />
                    </View>
                    <Text style={styles.info}>პირადი ინფორმაცია</Text>
                    {person === 'ფიზიკური' ? (
                         <View style={styles.citizen}>
                              <Text>უცხოეთის მოქალაქე</Text>
                              <View style={styles.citizenIconWrapper}>
                                   <Switch
                                        trackColor={{
                                             false: '#767577',
                                             true: '#4CD964',
                                        }}
                                        thumbColor="#ffff"
                                        ios_backgroundColor="#F2F2F2"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                   />
                              </View>
                         </View>
                    ) : null}

                    <Formik
                         initialValues={{
                              name: '',
                              namelat: '',
                              surname: '',
                              surnamelat: '',
                              email: '',
                              number: '',
                              dateofbirth: '',
                              pn: '',
                         }}
                         onSubmit={values => {
                              console.log(values);
                         }}
                         validationSchema={validationSchema}
                    >
                         {({ handleChange, handleSubmit, errors }) => (
                              <>
                                   {!isEnabled && (
                                        <AppTextInput
                                             onChangeText={handleChange('name')}
                                             placeholder="სახელი"
                                             lang="ქარ"
                                        />
                                   )}

                                   <AppTextInput
                                        onChangeText={handleChange('namelat')}
                                        placeholder="სახელი ლათინურად"
                                        lang="ლათ"
                                   />

                                   {!isEnabled && (
                                        <AppTextInput
                                             onChangeText={handleChange(
                                                  'surname'
                                             )}
                                             placeholder="გვარი"
                                             lang="ქარ"
                                        />
                                   )}

                                   <AppTextInput
                                        onChangeText={handleChange(
                                             'surnamelat'
                                        )}
                                        lang="ლათ"
                                        placeholder="გვარი ლათინურად"
                                   />

                                   <View style={styles.buttonContainer}>
                                        <AppButton
                                             title="მამრობითი"
                                             style={styles.littleButton}
                                             isActive={userSex === 'male'}
                                             onPress={() => {
                                                  setUserSex('male');
                                             }}
                                        />
                                        <AppButton
                                             title="მდედრობითი"
                                             style={styles.littleButton}
                                             isActive={userSex === 'female'}
                                             onPress={() => {
                                                  setUserSex('female');
                                             }}
                                        />
                                   </View>

                                   <DatePicker />

                                   <AppTextInput
                                        onChangeText={handleChange('email')}
                                        placeholder="ელექტრონული ფოსტა"
                                   />

                                   <AppTextInput
                                        onChangeText={handleChange('number')}
                                        placeholder="ტელეფონის ნომერი"
                                   />

                                   <AppTextInput
                                        onChangeText={handleChange('pn')}
                                        placeholder="პირადი ნომერი"
                                        lang="11 ნიშნა"
                                   />

                                   <View style={styles.nextBtnWrapper}>
                                        <AppButton
                                             onPress={handleSubmit}
                                             style={styles.bigButton}
                                             title="გაგრძელება"
                                             isActive
                                        />
                                   </View>
                              </>
                         )}
                    </Formik>
               </ScrollView>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
     },
     buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
     },
     littleButton: {
          width: 160,
          height: 50,
          borderRadius: 4,
     },
     bigButton: {
          width: 325,
          height: 60,
          alignSelf: 'center',
          borderRadius: 4,
          marginTop: 25,
     },
     citizen: {
          width: '100%',
          height: 79,
          paddingLeft: 30,
          backgroundColor: '#fff',
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
     },
     screen: {
          backgroundColor: '#F2F2F2',
     },

     errorMessage: {
          color: 'red',
          fontSize: 10,
     },

     info: {
          marginLeft: 30,
          fontWeight: 'bold',
          marginVertical: 10,
     },
     personWrapper: {
          flexDirection: 'row',
          justifyContent: 'space-around',
     },
     personBtn: {
          width: '50%',
          height: 65,
     },
     header: {
          backgroundColor: 'black',
          height: 300,
          width: '100%',
     },
     img: {
          width: '100%',
          height: 65,
     },
     background: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
     },

     headline: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'relative',
          bottom: 30,
     },
     closeIcon: {
          height: 19,
          width: 19,
     },
     Icon: {
          height: 19,
          width: 19,
     },
     registrTxt: {
          color: 'white',
          fontSize: 25,
     },
     nextBtnWrapper: {
          backgroundColor: '#fff',
          width: '100%',
          height: 200,
     },
     citizenIconWrapper: {
          marginRight: 40,
     },
});
