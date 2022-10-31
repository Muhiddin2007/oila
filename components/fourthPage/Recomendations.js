import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {recomends} from '../data/mainData';

const Rule = () => {
  const isBigDevice = Dimensions.get('window').width > 768;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Tafsiyaviy ko’rsatmalar</Text>
      <ScrollView>
        <View style={[styles.sm, isBigDevice && styles.md]}>
          {recomends.map(ariza => (
            <TouchableOpacity
              key={ariza.id}
              onPress={() => Linking.openURL(ariza.url)}>
              <View style={[styles.container, isBigDevice && styles.cardmd]}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={ariza.img}
                    style={{width: 67.46, height: 64}}
                  />
                  <Text style={styles.name}>{ariza.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
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
    flex: 1,
  },
  heading: {
    color: '#324352',
    fontSize: hp('4%'),
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cardmd: {
    width: '25%',
  },
  container: {
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderColor: '#9999',
    borderWidth: 1,
    alignItems: 'center',
    flex: 1,
  },
  md: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: '#5D6677',
    fontFamily: 'Montserrat-Medium',
    width: '70%',
    marginTop: 20,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
