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
import {news, agro, tikuvchli, tadbirkorlik} from '../data/mainData';
import Feather from 'react-native-vector-icons/Feather';

const News = ({navigation}) => {
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
          <Text style={styles.dasturHeading}>Dastur haqida</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.dasturBtn}>
              Bosh Sahifa /<Text style={styles.dasturSpan}> Yangiliklar</Text>
            </Text>
          </TouchableOpacity>
        </View>
        {news.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('NewsItem', item)}>
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
        {tadbirkorlik.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('NewsItem2', item)}>
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
        {agro.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('NewsItem3', item)}>
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
        {tikuvchli.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('NewsItem4', item)}>
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

export default News;

const styles = StyleSheet.create({
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
  img: {
    width: '90%',
    height: 180,
    borderRadius: 10,
    marginTop: 10,
  },
  heading: {
    color: '#324352',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    padding: 20,
    paddingBottom: 10,
    paddingTop: 40,
    width: '90%',
  },
  container: {
    alignItems: 'center',
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
