import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {arizalar} from '../data/mainData';

const Rule = () => {
  const isBigDevice = Dimensions.get('window').width > 768;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Аризаларни кўриб чиқиш тартиби</Text>
      <ScrollView>
        <View style={[styles.sm, isBigDevice && styles.md]}>
          {arizalar.map(ariza => (
            <View
              key={ariza.id}
              style={[styles.container, isBigDevice && styles.cardmd]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={ariza.img} style={{width: 67.46, height: 64}} />
                <Text style={styles.name}>{ariza.name}</Text>
              </View>
              <Text style={styles.title}>{ariza.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Rule;

const styles = StyleSheet.create({
  sm: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  heading: {
    color: '#324352',
    fontSize: hp('4%'),
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
  },
  cardmd: {
    width: '25%',
  },
  container: {
    width: wp('95%'),
    marginLeft: '2%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
    borderColor: '#9999',
    borderWidth: 1,
  },
  md: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: '#324352',
    fontFamily: 'Montserrat-Bold',
    marginLeft: 20,
    width: '70%',
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    width: '95%',
    color: '#998',
  },
  wrapper: {
    flex: 1,
  },
});
