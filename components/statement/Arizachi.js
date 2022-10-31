import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Linking,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {arizaType} from '../data/mainData';
import {postAriza, getCompany} from '../data/axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import {Switch, Snackbar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {setRegionId, setPasport} from '../../features/counterSlice';
import {Input} from './PasportInput';

const Arizachi = ({navigation}) => {
  const [focusedKey, setFocusedKey] = React.useState(2);
  const [id, setId] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);
  const [result, setResult] = React.useState([]);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [stir, setStir] = React.useState([]);
  const [clock, setClock] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [company, setCompany] = React.useState([]);

  const series = useSelector(state => state.credit.series);
  const number = useSelector(state => state.credit.number);
  const pasport = useSelector(state => state.credit.pasport);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pasport && date !== null) {
      postAriza(series, number, date)
        .then(res => {
          setResult(res.data.data.passport);
          dispatch(setRegionId(res.data.data.passport.region_id));
          setMessage('');
        })
        .catch(e => {
          setMessage(e?.response?.data?.message);
        });
    }
  }, [series, number, date]);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const handler = (key, i) => {
    setFocusedKey(key);
    setId(i);
    setResult([]);
    setDate(null);
    dispatch(setPasport(''));
    setCompany([]);
    setStir('');
    setClock(null);
  };

  useEffect(() => {
    if (stir && clock !== null) {
      getCompany(stir, clock)
        .then(res => {
          setCompany(res.data.data);
        })
        .catch(e => {
          setMessage(e.response?.data?.message);
        });
    }
  }, [stir, clock]);

  function onSelectDate(value) {
    if (value?.nativeEvent?.timestamp) {
      setDate(value.nativeEvent.timestamp);
    }
    setOpen(false);
  }

  function onChooseDate(value) {
    if (value?.nativeEvent?.timestamp) {
      setClock(value.nativeEvent.timestamp);
    }
    setShow(false);
  }

  const time = new Date(date);
  const time2 = new Date(clock);

  const handleSubmit = () => {
    // if (result.length === 0 && company.length === 0) {
    //   setMessage('Майдонларни тўғри тўлдирилганини текширинг !');
    //   setVisible(!visible);
    // } else if (message === '') {
    navigation.navigate('Manzil');
    // } else {
    //   setVisible(!visible);
    // }
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            <View>
              <View style={styles.label}></View>
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
          <View style={styles.ariza}>
            <Text style={styles.arizaHeading}>Ariza beruvchining turi</Text>
            {arizaType.map((ariza, i) => {
              return (
                <TouchableOpacity key={i} onPress={() => handler(ariza.key, i)}>
                  <View style={styles.arizaContent}>
                    <View
                      style={
                        id === i ? styles.arizaContentRow : styles.arizaLabel
                      }></View>
                    <Text style={{color: '#515151'}}>{ariza.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            {focusedKey === 2 ? (
              <View style={{width: '100%', alignItems: 'center'}}>
                <View style={styles.enter}>
                  <Text style={styles.enterText}>pasport yoki ID raqam:</Text>
                  <Input
                    inputKey="mask"
                    mask="[AA][0000000]"
                    placeholder="AA1234567"
                  />
                </View>
                <View style={styles.enter}>
                  <Text style={styles.enterText}>tug'ilgan sanasi:</Text>
                  <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={styles.enterDateInput}>
                      {date !== null
                        ? dayjs(date).format('DD.MM.YYYY')
                        : 'DD.MM.YYYY'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.enter}>
                  <Text style={styles.enterText}>F.I.Sh.</Text>
                  {result ? (
                    <Text style={[styles.showResult]}>{result.full_name}</Text>
                  ) : (
                    ''
                  )}
                </View>
              </View>
            ) : (
              <View style={{width: '100%', alignItems: 'center'}}>
                <View style={styles.enter}>
                  <Text style={styles.enterText}>STIR:</Text>
                  <TextInput
                    style={styles.enterInput}
                    placeholder="123456789"
                    placeholderTextColor={'#56678f'}
                    onChangeText={value => setStir(value)}
                    value={stir}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.enter}>
                  <Text style={styles.enterText}>guvohnoma sanasi:</Text>
                  <TouchableOpacity onPress={() => setShow(true)}>
                    <Text style={styles.enterDateInput}>
                      {clock !== null
                        ? dayjs(clock).format('DD.MM.YYYY')
                        : 'DD.MM.YYYY'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.enter}>
                  <Text style={styles.enterText}>корхона номи:</Text>
                  {company ? (
                    <Text style={[styles.showResult]}>{company.full_name}</Text>
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.enter}>
                  <Text style={styles.enterText}>manzili:</Text>
                  {company ? (
                    <Text style={[styles.showResult]}>{company.address}</Text>
                  ) : (
                    ''
                  )}
                </View>
              </View>
            )}
            {open && (
              <DateTimePicker
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={value => onSelectDate(value)}
                value={time}
                maximumDate={new Date()}
              />
            )}
            {show && (
              <DateTimePicker
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={value => onChooseDate(value)}
                value={time2}
                maximumDate={new Date()}
              />
            )}
            <View style={styles.switcher}>
              <Text style={styles.switchText}>
                Qonun talablari doirasida shaxsga doir ma'lumotlarimdan
                foydalanishga rozilik bildiraman.
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL('https://lex.uz/docs/-4396419')
                  }>
                  <Text style={styles.link}>
                    (https://lex.uz/docs/-4396419)
                  </Text>
                </TouchableOpacity>
              </Text>
              <View style={styles.switcherLabel}>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color="#00C695"
                />
              </View>
            </View>
            {focusedKey === 2 ? (
              <Image
                source={require('../../assets/images/pasport.png')}
                style={{
                  width: '90%',
                  height: 218,
                  marginBottom: 20,
                }}
              />
            ) : (
              <Image
                source={require('../../assets/images/Document.png')}
                style={{
                  width: '90%',
                  height: 450,
                  marginBottom: 20,
                }}
              />
            )}
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={
                isSwitchOn === false
                  ? styles.footerButtonDisable
                  : styles.footerButton
              }
              disabled={isSwitchOn === false ? true : false}
              onPress={handleSubmit}>
              <Text style={styles.footerButtonText}>Davom etish</Text>
              <View
                style={
                  isSwitchOn === false
                    ? styles.footerButtonArrowDisable
                    : styles.footerButtonArrow
                }>
                <AntDesign name="arrowright" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {message ? (
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={5000}
          action={{
            label: 'Yopish',
          }}>
          {message}
        </Snackbar>
      ) : (
        ''
      )}
    </>
  );
};

export default Arizachi;

const styles = StyleSheet.create({
  label: {
    height: 15,
    backgroundColor: '#00C695',
    borderRadius: 60,
  },
  labelText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#324352',
  },
  focusedLabel: {
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
  container: {
    alignItems: 'center',
    height: '100%',
  },
  ariza: {
    width: '98%',
    alignItems: 'center',
  },
  arizaHeading: {
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  arizaContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    width: '80%',
    height: 40,
    justifyContent: 'space-evenly',
  },
  arizaText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#515151',
  },
  arizaContentRow: {
    width: 17,
    height: 17,
    backgroundColor: '#00C695',
    borderRadius: 50,
  },
  arizaLabel: {
    width: 17,
    height: 17,
    backgroundColor: '#E6EAED',
    borderRadius: 50,
  },
  enterInput: {
    height: 38,
    borderWidth: 1,
    borderColor: '#E6EAED',
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#56678f',
  },
  enterDateInput: {
    height: 38,
    borderWidth: 1,
    borderColor: '#E6EAED',
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#fff',
    textAlign: 'center',
    paddingTop: 8,
    color: '#56678F',
  },
  enter: {
    width: '80%',
    marginTop: 15,
  },
  enterText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
  },
  showResult: {
    height: 38,
    borderWidth: 1,
    borderColor: '#E6EAED',
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#f2f4f8',
    textAlign: 'center',
    paddingTop: 8,
    color: '#56678f',
  },
  switcher: {
    marginTop: 15,
    alignItems: 'center',
  },
  switchText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    marginBottom: 10,
  },
  link: {
    fontFamily: 'Montserrat-Regular',
    color: '#002CC9',
    textAlign: 'center',
  },

  switcherLabel: {
    backgroundColor: '#cecece',
    borderRadius: 50,
    marginBottom: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00C695',
    height: 50,
    justifyContent: 'space-between',
    width: '50%',
    borderRadius: 5,
    paddingLeft: 25,
    paddingRight: 0,
  },
  footerButtonDisable: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#999999',
    height: 50,
    justifyContent: 'space-between',
    width: '50%',
    borderRadius: 5,
    paddingLeft: 25,
    paddingRight: 0,
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  footerButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#FFFFFF',
    fontSize: 16,
  },
  footerButtonArrow: {
    backgroundColor: '#00AB81',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  textInput: {
    width: '80%',
    alignItems: 'center',
  },
  footerButtonArrowDisable: {
    backgroundColor: '#999',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
