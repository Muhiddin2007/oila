import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  getLocation,
  getCity,
  getDistrict,
  getNeighborhood,
} from '../data/axios';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Input} from './Input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {setRegionId} from '../../features/counterSlice';
import {Snackbar} from 'react-native-paper';

const Manzil = ({navigation}) => {
  const [location, setLocation] = useState();
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [currentId, setCurrentId] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [districtId, setDistrictId] = useState();
  const [another, setAnother] = useState();
  const [typeId, setTypeId] = useState();
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [success, setSuccess] = useState();
  const [place, setPlace] = useState();
  const [districtName, setDistrictName] = useState();
  const [neighborhoodName, setNeighborhoodName] = useState();
  const [streetName, setStreetName] = useState();
  const [home, setHome] = useState();
  const [unknown, setUnknown] = useState();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const regionId = useSelector(state => state.credit.regionId);

  useEffect(() => {
    getCity()
      .then(res => {
        setCity(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    getDistrict(regionId)
      .then(res => {
        setDistrict(res.data.data.list_by_parent);
      })
      .catch(err => {
        console.log(err);
      });
  }, [regionId]);
  useEffect(() => {
    if (districtId !== undefined) {
      getLocation(districtId)
        .then(res => {
          setLocation(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [districtId]);
  useEffect(() => {
    if (currentId !== undefined) {
      getNeighborhood(currentId)
        .then(res => {
          setNeighborhood(res.data.data.data);
          setMessage('');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [currentId]);

  useEffect(() => {
    setSuccess(
      (place !== undefined ? place + ',' : '') +
        (districtName !== undefined ? districtName + ',' : '') +
        (neighborhoodName !== undefined ? neighborhoodName + ',' : '') +
        (streetName !== undefined ? streetName + ',' : '') +
        (unknown !== undefined ? unknown + ',' : '') +
        (home !== undefined ? home : ''),
    );
  }, [place, districtName, neighborhoodName, streetName, unknown, home]);
  const handleSubmit = () => {
    // if (
    //   !neighborhoodName ||
    //   !home ||
    //   phoneNumber.length <= 18 ||
    //   (!unknown && another === 0)
    // ) {
    //   setMessage('Майдонларни тўғри тўлдирилганини текширинг !');
    //   setVisible(!visible);
    // } else {
    navigation.navigate('Spends');
    // }
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={{alignItems: 'center', flex: 1}}>
          <View style={styles.wrapper}>
            <View>
              <View style={styles.focusedLabel}></View>
              <Text style={styles.labelText}>Arizachi</Text>
            </View>
            <View>
              <View style={styles.focusedLabel}></View>
              <Text style={styles.labelText}>Manzil</Text>
            </View>
            <View>
              <View style={styles.label}></View>
              <Text style={styles.labelText}>Harajatlar</Text>
            </View>
            <View>
              <View style={styles.label}></View>
              <Text style={styles.labelText}>Daromadlar</Text>
            </View>
            <View>
              <View style={styles.label}></View>
              <Text style={styles.labelText}>Natija</Text>
            </View>
          </View>
          <Text style={styles.naming}>viloyat:</Text>
          <View style={styles.container}>
            <SelectDropdown
              data={city}
              onSelect={selectedItem => {
                dispatch(setRegionId(selectedItem.id));
                setPlace(selectedItem.val01);
                return selectedItem;
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.val01;
              }}
              rowTextForSelection={item => item.val01}
              defaultButtonText={'Tanlash'}
              buttonStyle={{backgroundColor: 'transparent', width: '95%'}}
              buttonTextStyle={{fontFamily: 'Montserrat-Medium'}}
              selectedRowStyle={{backgroundColor: '#999'}}
              dropdownStyle={{height: '40%'}}
              rowTextStyle={{fontFamily: 'Montserrat-Medium'}}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={18}
                  />
                );
              }}
            />
          </View>
          <Text style={styles.naming}>tuman:</Text>
          <View style={styles.container}>
            <SelectDropdown
              data={district}
              onSelect={selectedItem => {
                setDistrictId(selectedItem.id);
                setDistrictName(selectedItem.name);
                return selectedItem;
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.name;
              }}
              rowTextForSelection={item => item.name}
              defaultButtonText={'Tanlash'}
              buttonStyle={{backgroundColor: 'transparent', width: '95%'}}
              buttonTextStyle={{fontFamily: 'Montserrat-Medium'}}
              selectedRowStyle={{backgroundColor: '#999'}}
              dropdownStyle={{height: '40%'}}
              rowTextStyle={{fontFamily: 'Montserrat-Medium'}}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={18}
                  />
                );
              }}
            />
          </View>
          <Text style={styles.naming}>mahalla:</Text>
          <View style={styles.container}>
            <SelectDropdown
              data={location}
              onSelect={selectedItem => {
                setCurrentId(selectedItem.id);
                setNeighborhoodName(selectedItem.name);
                return selectedItem;
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.name;
              }}
              rowTextForSelection={item => item.name}
              defaultButtonText={'Tanlash'}
              buttonStyle={{backgroundColor: 'transparent', width: '95%'}}
              buttonTextStyle={{fontFamily: 'Montserrat-Medium'}}
              selectedRowStyle={{backgroundColor: '#999'}}
              dropdownStyle={{height: '40%'}}
              rowTextStyle={{fontFamily: 'Montserrat-Medium'}}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={18}
                  />
                );
              }}
            />
          </View>
          <Text style={styles.naming}>ko'cha/ko'p qavatli uy:</Text>
          <View style={styles.container}>
            <SelectDropdown
              data={neighborhood}
              onSelect={selectedItem => {
                setAnother(selectedItem.id);
                setTypeId(selectedItem.type_id);
                setStreetName(selectedItem.name);
                return selectedItem;
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.name;
              }}
              rowTextForSelection={item => item.name}
              defaultButtonText={'Tanlash'}
              buttonStyle={{backgroundColor: 'transparent', width: '95%'}}
              buttonTextStyle={{fontFamily: 'Montserrat-Medium'}}
              selectedRowStyle={{backgroundColor: '#999'}}
              dropdownStyle={{height: '40%'}}
              rowTextStyle={{fontFamily: 'Montserrat-Medium'}}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={18}
                  />
                );
              }}
            />
          </View>
          {another === 0 ? (
            <View style={styles.enter}>
              <Text style={styles.enterText}>ko'cha nomi:</Text>
              <TextInput
                style={styles.enterInput}
                placeholder="ko'cha nomini kiriting..."
                placeholderTextColor={'#56678f'}
                onChangeText={text => setUnknown(text)}
              />
            </View>
          ) : (
            ''
          )}
          {typeId === 90 ? (
            <View style={styles.enter}>
              <Text style={styles.enterText}>хонадон:</Text>
              <TextInput
                style={styles.enterInput}
                placeholderTextColor={'#56678f'}
                onChangeText={text => setHome(text)}
              />
            </View>
          ) : (
            <View style={styles.enter}>
              <Text style={styles.enterText}>уй:</Text>
              <TextInput
                style={styles.enterInput}
                placeholderTextColor={'#56678f'}
                onChangeText={text => setHome(text)}
              />
            </View>
          )}
          <View style={styles.textInput}>
            <Text style={styles.enterText}>Raqamingiz:</Text>
            <Input
              headerPlaceholder="Raqamingizni kiriting"
              handleChange={value => setPhoneNumber(value)}
              inputKey="mask"
              mask="+998 ([00]) [000] [00] [00]"
              placeholder="+998 (00) 000 00 00"
              maxLength={20}
              defaultValue={phoneNumber ? phoneNumber?.toString() : ''}
            />
          </View>
          <View style={styles.enter}>
            <Text style={styles.enterText}>to'liq manzili:</Text>
            {success ? <Text style={styles.showResult}>{success}</Text> : ''}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerLeftBtn}
            onPress={() => navigation.goBack()}>
            <View style={styles.footerLeftArrow}>
              <AntDesign name="arrowleft" size={20} color="#fff" />
            </View>
            <Text style={styles.footerButtonText}>Orqaga</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={handleSubmit}>
            <Text style={styles.footerButtonText}>Davom etish</Text>
            <View style={styles.footerButtonArrow}>
              <AntDesign name="arrowright" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

export default Manzil;

const styles = StyleSheet.create({
  focusedLabel: {
    height: 15,
    backgroundColor: '#00C695',
    borderRadius: 60,
  },
  labelText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#324352',
  },
  label: {
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
    borderWidth: 2,
    borderColor: '#E6EAED',
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    margin: 5,
  },
  naming: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    marginBottom: 4,
  },
  enter: {
    width: '90%',
    marginTop: 5,
  },
  enterText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  enterInput: {
    height: 50,
    borderWidth: 2,
    borderColor: '#E6EAED',
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
    color: '#56678f',
    paddingLeft: 10,
    fontSize: 16,
  },
  textInput: {
    width: '90%',
    alignItems: 'center',
  },
  showResult: {
    borderWidth: 1,
    borderColor: '#E6EAED',
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#f2f4f8',
    textAlign: 'center',
    paddingTop: 8,
    color: '#56678f',
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00C695',
    height: 50,
    justifyContent: 'space-between',
    width: '45%',
    borderRadius: 5,
    paddingLeft: 25,
    paddingRight: 0,
  },
  footerLeftArrow: {
    alignItems: 'center',
    backgroundColor: '#566789',
    height: 50,
    justifyContent: 'center',
    width: '45%',
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  footerLeftBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#324352',
    height: 50,
    justifyContent: 'space-between',
    width: '45%',
    borderRadius: 5,
    paddingRight: 60,
  },
});
