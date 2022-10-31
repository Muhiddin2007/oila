import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {steps} from '../data/mainData';

const About = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('OilaKredit')}>
          <Image
            source={require('../../assets/images/header.png')}
            style={{width: 150, height: 35}}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Octicons
              name={'three-bars'}
              size={34}
              color="#324352"
              style={styles.menu}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.dastur}>
          <Text style={styles.heading}>Dastur haqida</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.dasturBtn}>
              Bosh Sahifa /<Text style={styles.dasturSpan}> Dastur Haqida</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.family}>
          <Image
            source={require('../../assets/images/doda.png')}
            style={styles.image}
          />
          <Text style={styles.familyHeading}>OILAVIY TADBIRKORLIK HAQIDA</Text>
          <Text style={styles.familyParagraph}>
            Oilaviy tadbirkorlikni rivojlantirish dasturlari doirasida kreditlar
            ajratish mexanizmini soddalashtirish, aholining bandligi va daromad
            manbalarini kengaytirishga doir mehnat faoliyatini
            qo‘llab-quvvatlash maqsadida O‘zbekiston Respublikasi Prezidentining
            2021 yil 20 dekabrdagi PQ-55-son“Oilaviy tadbirkorlikni
            rivojlantirish va aholining daromad manbayini kengaytirishga doir
            qo‘shimcha chora-tadbirlar to‘g‘risida”gi qaroriga asosan 2022 yil 1
            martdan dasturlar doirasida kreditlar to‘liq raqamlashgan holda
            Oilaviy tadbirkorlikni rivojlantirish dasturlarining yagona elektron
            platformasi orqali ajratilishi belgilab qo‘yildi.
          </Text>
          <TouchableOpacity>
            <Text style={styles.familyBtn}>Batafsil</Text>
          </TouchableOpacity>
          <Text style={styles.work}>Ishlash jarayonining ketma-ketligi</Text>
          {steps.map((step, i) => (
            <View style={styles.step} key={i}>
              <Text style={styles.stepNum}>
                {step.num} <Text style={styles.stepSpan}>qadam</Text>
              </Text>
              <Text style={styles.title}>{step.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 450,
  },
  family: {
    alignItems: 'center',
    marginTop: 30,
  },
  familyHeading: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  heading: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
  },
  dastur: {
    alignItems: 'center',
    backgroundColor: '#324352',
    height: 200,
    justifyContent: 'center',
  },
  dasturBtn: {
    width: 225,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    height: 40,
    paddingTop: 9,
    borderRadius: 25,
    color: '#5D6677',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 20,
  },
  dasturSpan: {
    color: '#00C695',
  },
  familyParagraph: {
    color: '#000000',
    fontFamily: 'Montserrat-Medium',
    width: '95%',
    textAlign: 'center',
    fontSize: 14,
    paddingBottom: 10,
  },
  familyBtn: {
    width: 155,
    textAlign: 'center',
    backgroundColor: '#00C695',
    height: 40,
    color: '#fff',
    paddingTop: 9,
    borderRadius: 27,
  },
  work: {
    color: '#324352',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  step: {
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#00C695',
    borderRadius: 10,
    marginBottom: 20,
  },
  stepNum: {
    backgroundColor: '#00C695',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 46,
    fontFamily: 'BebasNeue-Regular',
  },
  stepSpan: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  title: {
    padding: 20,
    color: '#000000',
    fontFamily: 'Montserrat-Medium',
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
});
