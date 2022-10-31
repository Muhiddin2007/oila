import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getSelects, getBanks, getList, getType} from '../../data/axios';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {setParentId, setMonth} from '../../../features/counterSlice';
import {years, months} from './moths';

const LegalEntity = ({
  setDavroy,
  davroy,
  fermer,
  setSelectedBank,
  setFarm,
  setSelectedItem,
  selectedItem,
}) => {
  const [currentId, setCurrentId] = useState([]);
  const [data, setData] = useState();
  const [currentNum, setCurrentNum] = useState();
  const [bankId, setBankId] = useState();
  const [bankName, setBankName] = useState();
  const [bankField, setBankField] = useState();
  const [key, setKey] = useState();
  const [target, setTarget] = useState();
  const [maxSum, setMaxSum] = useState();
  const [preveligiousMonth, setPreveligiousMonth] = useState();

  const dispatch = useDispatch();

  function moneyFormatter(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  }

  const bankType = [
    {id: 4, type: 'Агробанк'},
    {id: 5, type: 'Микрокредит банк'},
    {id: 6, type: 'Халқ Банки'},
  ];

  useEffect(() => {
    getSelects()
      .then(res => {
        setData(res.data.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    getBanks(bankId, regionId)
      .then(res => {
        setBankName(res.data.data);
      })
      .catch(error => console.log(error));
  }, [bankId, regionId]);

  useEffect(() => {
    getList(currentId)
      .then(res => {
        setBankField(res.data.data);
      })
      .catch(error => console.log(error));
  }, [currentId]);

  useEffect(() => {
    getType(key)
      .then(res => {
        setTarget(res.data.data);
      })
      .catch(error => console.log(error));
  }, [key]);

  function addCountMonths(count, arr) {
    for (let i = 0; i < count; i++) {
      arr.push(i + 1);
    }
  }
  function checkMonths(davroy, preveligiousMonth) {
    let arr = ['йўқ'];
    if (preveligiousMonth == '1.5-yillik' || preveligiousMonth == '2-yillik') {
      addCountMonths(6, arr);
      return arr;
    } else if (
      preveligiousMonth == '3-yillik' ||
      preveligiousMonth == '4-yillik'
    ) {
      davroy > 12 ? addCountMonths(12, arr) : addCountMonths(davroy, arr);
      return arr;
    } else if (
      preveligiousMonth == '5-yillik' ||
      preveligiousMonth == '6-yillik'
    ) {
      davroy > 18 ? addCountMonths(18, arr) : addCountMonths(davroy, arr);
      return arr;
    } else if (preveligiousMonth == '7-yillik') {
      davroy > 36 ? addCountMonths(36, arr) : addCountMonths(davroy, arr);
      return arr;
    }
  }

  const regionId = useSelector(state => state.credit.regionId);

  return (
    <View style={{alignItems: 'center', width: '100%'}}>
      <Text style={styles.naming}>moliyalashtiruvchi bank:</Text>
      <View style={styles.container}>
        <SelectDropdown
          data={bankType}
          onSelect={selectedItem => {
            setBankId(selectedItem.id);
            return selectedItem;
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem.type;
          }}
          rowTextForSelection={item => item.type}
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
      <Text style={styles.naming}>bank filiali:</Text>
      <View style={styles.container}>
        <SelectDropdown
          data={bankName}
          onSelect={selectedItem => {
            setSelectedBank(selectedItem);
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
      <Text style={styles.naming}>faoliyat yo'nalishi:</Text>
      <View style={styles.container}>
        <SelectDropdown
          data={data}
          onSelect={selectedItem => {
            setCurrentId(selectedItem.id);
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
      <Text style={styles.naming}>maqsadi:</Text>
      <View style={styles.container}>
        <SelectDropdown
          data={bankField}
          onSelect={selectedItem => {
            setKey(selectedItem.val01);
            setCurrentNum(selectedItem.num02);
            setDavroy(selectedItem.num03);
            dispatch(setParentId(selectedItem.id));
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
          dropdownStyle={{height: 300}}
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
      <Text style={styles.naming}>dastur:</Text>
      <View style={styles.container}>
        <SelectDropdown
          data={target}
          onSelect={selectedItem => {
            setMaxSum(selectedItem.max_sum);
            setSelectedItem(selectedItem.name);
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
          dropdownStyle={{height: 300}}
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
      {selectedItem ==
      'Фермер, деҳқон хўжаликлари ва томорқа ер эгаларини қўллаб-қувватлаш жамғармаси' ? (
        <>
          <Text style={styles.naming}>manbasi:</Text>
          <View style={styles.container}>
            <SelectDropdown
              data={fermer}
              onSelect={selectedItem => {
                setFarm(selectedItem);
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
              dropdownStyle={{height: 300}}
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
        </>
      ) : (
        ''
      )}
      <Text style={styles.enterText}>maksimal kredit summasi, so'm:</Text>
      {maxSum ? (
        <>
          <View style={styles.show}>
            <Text style={styles.showResult}>{moneyFormatter(maxSum)}</Text>
          </View>
          <Text style={styles.naming}>qaytarish muddati, yill:</Text>
          <View style={styles.container}>
            {currentNum === 36 ? (
              <SelectDropdown
                data={months}
                onSelect={selectedItem => {
                  setPreveligiousMonth(selectedItem.year);
                  dispatch(setMonth(selectedItem.month));
                  return selectedItem;
                }}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem.year;
                }}
                rowTextForSelection={item => item.year}
                defaultButtonText={'Tanlash'}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  width: '95%',
                }}
                buttonTextStyle={{fontFamily: 'Montserrat-Medium'}}
                selectedRowStyle={{backgroundColor: '#999'}}
                dropdownStyle={{height: 300}}
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
            ) : (
              <SelectDropdown
                data={years}
                onSelect={selectedItem => {
                  setPreveligiousMonth(selectedItem.year);
                  dispatch(setMonth(selectedItem.month));
                  return selectedItem;
                }}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem.year;
                }}
                rowTextForSelection={item => item.year}
                defaultButtonText={'Tanlash'}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  width: '95%',
                }}
                buttonTextStyle={{fontFamily: 'Montserrat-Medium'}}
                selectedRowStyle={{backgroundColor: '#999'}}
                dropdownStyle={{height: 300}}
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
            )}
          </View>
        </>
      ) : (
        ''
      )}
      {preveligiousMonth !== undefined ? (
        <>
          <Text style={styles.naming}>imtiyoz davri, oy:</Text>
          <View style={styles.container}>
            <SelectDropdown
              data={checkMonths(davroy, preveligiousMonth)}
              onSelect={selectedItem => {
                return selectedItem;
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem;
              }}
              rowTextForSelection={item => item}
              defaultButtonText={'Tanlash'}
              buttonStyle={{
                backgroundColor: 'transparent',
                width: '95%',
              }}
              buttonTextStyle={{fontFamily: 'Montserrat-Medium'}}
              selectedRowStyle={{backgroundColor: '#999'}}
              dropdownStyle={{height: 300}}
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
        </>
      ) : (
        ''
      )}
    </View>
  );
};

export default LegalEntity;

const styles = StyleSheet.create({
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
    textAlign: 'center',
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
  },
  textInput: {
    width: '90%',
    alignItems: 'center',
  },
  showResult: {
    fontFamily: 'Montserrat-Regular',
    color: '#56678f',
    fontSize: 16,
  },
  show: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f4f8',
    borderColor: '#E6EAED',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
});
