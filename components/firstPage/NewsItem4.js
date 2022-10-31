import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const NewsItem4 = ({route}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.dastur}>
          <Text style={styles.dasturHeading}>Dastur haqida</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.dasturBtn}>
              Bosh Sahifa /
              <Text style={styles.dasturSpan}> Biznes Rejalar</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: '90%', height: 220, borderRadius: 10, marginTop: 20}}
            source={route.params.img}
          />
          <Text style={styles.heading}>{route.params.heading}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 12,
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image source={require('../../assets/images/Frame.png')} />
            <Text style={styles.date}>23.02.2022</Text>
          </View>
          <Text style={styles.headingTitle}>{route.params.headingTitle1}</Text>
          <Text style={styles.title}>{route.params.title1}</Text>
          <Text style={styles.title}>{route.params.title2}</Text>
          <Text style={styles.title}>{route.params.title3}</Text>
          <Text style={styles.title}>{route.params.title4}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsItem4;

const styles = StyleSheet.create({
  heading: {
    color: '#324352',
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    width: '90%',
  },
  headingTitle: {
    color: '#56679f',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
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
  dasturHeading: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
  },
  date: {
    color: '#5D6677',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 5,
  },
  title: {
    textAlign: 'center',
    color: '#5D6677',
    fontFamily: 'Montserrat-Regular',
    padding: 5,
  },
});
