import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';

const Result = () => {
  const date = new Date();
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.focusedLabel}></View>
          <Text style={styles.labelText}>Arizachi</Text>
        </View>
        <View>
          <View style={styles.focusedLabel}></View>
          <Text style={styles.labelText}>Manzil</Text>
        </View>
        <View>
          <View style={styles.focusedLabel}></View>
          <Text style={styles.labelText}>Harajatlar</Text>
        </View>
        <View>
          <View style={styles.focusedLabel}></View>
          <Text style={styles.labelText}>Daromadlar</Text>
        </View>
        <View>
          <View style={styles.focusedLabel}></View>
          <Text style={styles.labelText}>Natija</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image source={require('../../assets/images/star.png')} />
        <View style={styles.hr}></View>
        <Text style={styles.totalHeading}>
          Кредит олиш учун электрон аризангизни СМС код билан тасдиқдашни
          унутманг!
        </Text>
        <View style={styles.hr}></View>
        <Text style={styles.totalHeading}>
          Arizangiz yuborilgan sana:{' '}
          <Text style={styles.totalText}>
            {dayjs(date).format('DD.MM.YYYY')}
          </Text>
        </Text>
        <Text style={styles.totalHeading}>
          Ariza qayd raqami: <Text style={styles.totalText}>№ 124587</Text>
        </Text>
        <View style={styles.hr}></View>
        <Text style={styles.totalText}>
          Ariza raqami orqali arizaning holatini tekshirish mumkin. Arizaning
          ko’rib chiqilishi bo’yicha{' '}
          <Text style={styles.number}>+998 (97) 309 93 46</Text> raqamiga SMS
          xabar yuboriladi
        </Text>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  focusedLabel: {
    height: 15,
    backgroundColor: '#00C695',
    borderRadius: 60,
  },
  labelText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#324352',
  },
  label: {
    height: 15,
    backgroundColor: '#E6EAED',
    borderRadius: 60,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E6EAED',
    width: '98%',
    height: 80,
    alignItems: 'center',
    marginBottom: 10,
  },
  totalHeading: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#324352',
    textAlign: 'center',
  },
  hr: {
    width: '90%',
    height: 2,
    backgroundColor: '#E6EAED',
    margin: 20,
  },
  totalText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#324352',
    textAlign: 'center',
  },
  number: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#00C695',
    textAlign: 'center',
  },
  container: {
    width: '90%',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
