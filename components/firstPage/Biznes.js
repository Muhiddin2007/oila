import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {features} from '../data/mainData';
import Feather from 'react-native-vector-icons/Feather';

const Biznes = ({navigation}) => {
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
      <ScrollView style={{flex: 1}}>
        {features.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('Item', item)}>
            <View style={styles.container}>
              <Image source={item.img} style={styles.img} />
              <Text style={styles.heading}>{item.heading}</Text>
              <View style={styles.line}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 12,
                    marginTop: 12,
                    alignItems: 'center',
                  }}>
                  <Image source={require('../../assets/images/Frame.png')} />
                  <Text style={styles.date}>23.02.2022</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 12,
                    marginTop: 12,
                  }}>
                  <Text style={styles.lineText}>Batafsil</Text>
                  <Feather name="more-horizontal" size={20} color="#5D6677" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Biznes;

const styles = StyleSheet.create({
  img: {
    width: '90%',
    height: 180,
    borderRadius: 10,
    margin: 10,
  },
  heading: {
    color: '#324352',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    width: '90%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
  },
  date: {
    marginRight: 195,
    color: '#5D6677',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 5,
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
  line: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    paddingBottom: 10,
  },
  lineText: {
    color: '#5D6677',
    fontFamily: 'Montserrat-SemiBold',
    marginRight: 5,
  },
});
