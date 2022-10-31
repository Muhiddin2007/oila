import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getSelects, Target, Dastur} from '../../data/axios';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {
  setParentId,
  setMonth,
  setPreveligious,
} from '../../../features/counterSlice';
import {years, months} from './moths';

const PhysicalPerson = ({
  davr,
  setDavr,
  setPrev,
  dastur,
  setDastur,
  fermer,
  setFarm,
}) => {
  const [currentId, setCurrentId] = useState([]);
  const [data, setData] = useState();
  const [currentNum, setCurrentNum] = useState();
  const [maxCredit, setMaxCredit] = useState();
  const [name, setName] = useState();
  const [field, setField] = useState();
  const [dasturName, setDasturName] = useState();

  function moneyFormatter(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  }

  const dispatch = useDispatch();

  useEffect(() => {
    getSelects()
      .then(res => {
        setData(res.data.data);
      })
      .catch(error => console.log(error));
  }, []);
  useEffect(() => {
    Target(currentId)
      .then(res => {
        setName(res.data.data);
      })
      .catch(error => console.log(error));
  }, [currentId]);
  useEffect(() => {
    Dastur(currentNum)
      .then(res => {
        setField(res.data.data);
      })
      .catch(error => console.log(error));
  }, [currentNum]);
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

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
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
          data={name}
          onSelect={selectedItem => {
            setCurrentNum(selectedItem.num02);
            setDasturName(selectedItem.num03);
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
          data={field}
          onSelect={selectedItem => {
            setMaxCredit(selectedItem.max_credit);
            setDastur(selectedItem.name);
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
      {dastur ==
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
      {maxCredit ? (
        <>
          <Text style={styles.enterText}>maksimal kredit summasi, so'm:</Text>
          <View style={styles.show}>
            <Text style={styles.showResult}>{moneyFormatter(maxCredit)}</Text>
          </View>
          <Text style={styles.naming}>qaytarish muddati, yill:</Text>
          <View style={styles.container}>
            {currentNum === 36 ? (
              <SelectDropdown
                data={months}
                onSelect={selectedItem => {
                  setDavr(selectedItem.year);
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
                  setDavr(selectedItem.year);
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

      {davr !== undefined ? (
        <>
          <Text style={styles.naming}>imtiyoz davri, oy:</Text>
          <View style={styles.container}>
            <SelectDropdown
              data={checkMonths(dasturName, davr)}
              onSelect={selectedItem => {
                dispatch(setPreveligious(selectedItem));
                setPrev(selectedItem);
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

export default PhysicalPerson;

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
    alignItems: 'center',
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
