import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Pressable } from 'react-native';
import dayjs from 'dayjs';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = props => {
     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
     const [newDate, setNewDate] = useState();

     const showDatePicker = () => {
          setDatePickerVisibility(true);
     };

     const handleConfirm = date => {
          hideDatePicker();
          const birthday = dayjs(date);
          setNewDate(birthday.format('DD. MM. YY'));
     };

     const hideDatePicker = () => {
          setDatePickerVisibility(false);
     };

     return (
          <View style={styles.container}>
               <TextInput
                    placeholder="დაბადების თარიღი"
                    placeholderTextColor={'#A9A9A9'}
                    style={styles.input}
                    value={newDate}
                    onChangeText={text => {
                         setNewDate(text);
                    }}
               />
               <Pressable onPress={showDatePicker}>
                    <Image
                         style={styles.icon}
                         source={require('../assets/calendar.png')}
                    />
               </Pressable>
               <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
               />
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          backgroundColor: '#ffff',
          borderBottomColor: '#F3F3F3',
          borderBottomWidth: 1,
          paddingRight: 60,
          height: 60,
          alignItems: 'center',
     },
     input: {
          width: '100%',
          paddingLeft: 30,
     },
     icon: {},
});

export default DatePicker;
