import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {faqs} from '../data/mainData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Rule = () => {
  const isBigDevice = Dimensions.get('window').width > 768;

  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Ko’p beriladigan savollar (FAQs)</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.sm, isBigDevice && styles.md]}>
          {faqs.map((ariza, index) => (
            <Collapse
              key={ariza.id}
              onToggle={() => {
                isOpened === index ? setIsOpened(null) : setIsOpened(index);
              }}>
              <CollapseHeader>
                <View style={[styles.container, isBigDevice && styles.cardmd]}>
                  <Text style={styles.name}>{ariza.name}</Text>
                  <FontAwesome
                    name={isOpened === index ? 'chevron-up' : 'chevron-down'}
                    color={'#00C695'}
                    size={18}
                  />
                </View>
              </CollapseHeader>
              {isOpened != index ? (
                ''
              ) : (
                <CollapseBody style={styles.collapse}>
                  <Text style={styles.title}>{ariza.title}</Text>
                </CollapseBody>
              )}
            </Collapse>
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
    textAlign: 'center',
  },
  cardmd: {
    width: '25%',
  },
  container: {
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flex: 1,
  },
  collapse: {
    width: wp('90%'),
    backgroundColor: '#fff',
    padding: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
  },
  md: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    color: '#5D6677',
    fontFamily: 'Montserrat-Medium',
    width: '80%',
  },
  wrapper: {
    marginBottom: 10,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: '#5D6677',
    fontFamily: 'Montserrat-Regular',
    width: '90%',
  },
});
