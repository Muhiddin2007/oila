import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown2} from './Selects';
import {buttons} from '../data/mainData';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCreditValue,
  setMonthValue,
  setDavrValue,
} from '../../features/counterSlice';
import {Snackbar} from 'react-native-paper';

const Calculator = ({navigation}) => {
  const dispatch = useDispatch();

  const [focused, setIsFocused] = useState(11);
  const [key, setKey] = useState(2);
  const [typeId, setTypeId] = useState(2);
  const [month, setMonth] = useState();
  const [davr, setDavr] = useState();
  const [credit, setCredit] = useState();

  const [creditVal, setCreditVal] = useState(0);
  const [monthVal, setMonthVal] = useState(0);
  const [davrVal, setDavrVal] = useState(0);

  const creditValue = useSelector(state => state.credit.creditValue);
  const monthValue = useSelector(state => state.credit.monthValue);
  const davrValue = useSelector(state => state.credit.davrValue);

  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const handleSubmit = () => {
    if (creditVal === 0 && monthVal === 0 && davrVal === 0) {
      setVisible(true);
      setMessage('Заполните все поля');
    } else {
      navigation.navigate('Result');
    }
  };

  const handler = (id, key, type_id) => {
    setIsFocused(id);
    setKey(key);
    setTypeId(type_id);
  };

  function moneyFormatter(value) {
    return value.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }

  const creditChange = val => {
    setCreditVal(val);
    dispatch(setCreditValue(val));
    if (val > credit) {
      dispatch(setCreditValue(credit + ''));
    }
  };

  const monthChange = val => {
    setMonthVal(val);
    dispatch(setMonthValue(val));
    if (val > month) {
      dispatch(setMonthValue(month + ''));
    }
  };

  const davrChange = val => {
    setDavrVal(val);
    dispatch(setDavrValue(val));
    if (val > davr) {
      dispatch(setDavrValue(davr + ''));
    }
  };

  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          padding: 10,
        }}>
        <Image
          source={require('../../assets/images/calculator.png')}
          style={{width: 46, height: 46}}
        />
        <Text style={styles.heading}>Kredit kalkulyator</Text>
      </View>
      <Text style={styles.choose}>Tanlang:</Text>
      <View style={styles.flex}>
        {buttons.map(({name, id, key, type_id}) => {
          return (
            <TouchableOpacity
              key={id}
              onPress={() => handler(id, key, type_id)}>
              <Text
                style={[
                  focused === id ? styles.activeBtn : styles.btn,
                  id == 13 ? {width: 350} : null,
                ]}>
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView style={{flex: 1}}>
        <Dropdown2
          thisKey={key}
          typeId={typeId}
          setMonth={setMonth}
          setDavr={setDavr}
          setCredit={setCredit}
        />
        {credit ? (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={value => creditChange(Number(value))}
              keyboardType="number-pad"
              value={creditValue}
              placeholderTextColor={'#888'}
              placeholder="Kreditning miqdorini kiriting"
            />
            <Text style={styles.inputText}>so’m</Text>
          </View>
        ) : (
          ''
        )}
        {credit ? (
          <Text style={styles.max}>Max: {moneyFormatter(credit)} so’m</Text>
        ) : (
          ''
        )}
        {credit ? (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              onChangeText={value => monthChange(Number(value))}
              value={monthValue}
              placeholder="Kredit mudatini kiriting"
              placeholderTextColor={'#888'}
            />
            <Text style={styles.textOy}>oy</Text>
          </View>
        ) : (
          ''
        )}
        {credit ? <Text style={styles.max}>Max: {month} oy</Text> : ''}
        {credit ? (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              onChangeText={value => davrChange(Number(value))}
              value={davrValue}
              placeholder="Kreditning imtiyozli davrini kiriting"
              placeholderTextColor={'#888'}
            />
            <Text style={styles.textOy}>oy</Text>
          </View>
        ) : (
          ''
        )}
        {credit ? <Text style={styles.max}>Max: {davr} oy</Text> : ''}
        {credit ? (
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.activeBtn}>Hisoblash</Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </ScrollView>
      {message && (
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={5000}
          action={{
            label: 'Yopish',
          }}>
          {message}
        </Snackbar>
      )}
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  heading: {
    marginLeft: 10,
    color: '#324352',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  choose: {
    fontFamily: 'Montserrat-Medium',
    color: '#5D6677',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',
  },
  flex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  activeBtn: {
    backgroundColor: '#00C695',
    color: '#fff',
    marginLeft: 10,
    borderRadius: 27,
    width: 175,
    height: 46,
    textAlign: 'center',
    paddingTop: 12,
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
    alignSelf: 'center',
  },
  btn: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    color: '#5D6677',
    marginLeft: 10,
    borderRadius: 27,
    width: 175,
    height: 46,
    textAlign: 'center',
    paddingTop: 12,
    fontFamily: 'Montserrat-Medium',
    borderWidth: 2,
    borderColor: '#E6EAED',
    marginTop: 10,
  },
  input: {
    width: '89%',
    color: '#324352',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    fontSize: 16,
    paddingLeft: 25,
  },
  max: {
    color: '#AFB1B5',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'right',
    width: '97%',
    fontSize: 15,
  },
  container: {
    borderWidth: 2,
    borderColor: '#E6EAED',
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  inputText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#324352',
  },

  textOy: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#324352',
    paddingLeft: 15,
  },
});
