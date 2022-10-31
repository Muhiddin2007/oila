import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const BiznesItem = ({route}) => {
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
          <Text style={styles.text}>Kredit miqdori:</Text>
          <Text style={styles.title}>{route.params.kredit1}</Text>
          <Text style={styles.title}>{route.params.kredit2}</Text>
          <Text style={styles.title}>{route.params.kredit3}</Text>
        </View>
        <View style={styles.attention}>
          <View style={styles.attentionItem}></View>
          <Text style={styles.attentionText}>
            E'tibor qarating! Tizimda keltirilgan barcha biznes-rejalar
            tavsiyaviy xarakterga ega.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BiznesItem;

const styles = StyleSheet.create({
  heading: {
    color: '#324352',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    paddingTop: 10,
    width: '90%',
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
  text: {
    color: '#56678f',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    textAlign: 'center',
    color: '#5D6677',
    fontFamily: 'Montserrat-Regular',
    padding: 5,
  },
  attention: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
  },
  attentionItem: {
    width: 3,
    height: 60,
    backgroundColor: '#00C695',
  },
  attentionText: {
    color: '#5D6677',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'italic',
  },
});
