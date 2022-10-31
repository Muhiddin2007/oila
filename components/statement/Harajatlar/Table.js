import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {
  setSpends,
  setDimensions,
  setAmount,
} from '../../../features/counterSlice';
import {getSpends, getDimensions} from '../../data/axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Table = ({
  selectedName,
  setSelectedName,
  setSelectedDimension,
  setOverAll,
  setAnotherTypes,
  setInputFields,
  inputFields,
}) => {
  const dispatch = useDispatch();
  const spends = useSelector(state => state.credit.spends);
  const parentId = useSelector(state => state.credit.parentId);
  const dimensions = useSelector(state => state.credit.dimensions);
  const amount = useSelector(state => state.credit.amount);

  const umnojenie = (text, index, type) => {
    if (type == 'quantity') {
      inputFields[index].quantity = text;
    } else if (type == 'price') {
      inputFields[index].price = text;
    }
    inputFields[index].value =
      inputFields[index].quantity * inputFields[index].price;
    setOverAll(inputFields[index].value);
  };

  let total_sum = 0;

  let modifiedArr = inputFields.map(function (element) {
    total_sum = element.value;
    return total_sum;
  });

  const initialValue = 0;

  const sumWithInitial = modifiedArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue,
  );
  useEffect(() => {
    dispatch(setAmount(sumWithInitial));
  }, [sumWithInitial]);

  const addInputField = () => {
    setInputFields([...inputFields, {quantity: '', price: '', value: ''}]);
  };

  const removeInputFields = () => {
    const rows = [...inputFields];
    rows.splice(rows.length - 1, 1);
    setInputFields(rows);
  };

  useEffect(() => {
    if (parentId) {
      getSpends(parentId)
        .then(res => {
          dispatch(setSpends(res?.data?.data));
        })
        .catch(error => console.log(error));
    }
  }, [parentId]);

  useEffect(() => {
    getDimensions()
      .then(res => {
        dispatch(setDimensions(res.data.data));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {inputFields.map((data, index) => {
        return (
          <View style={styles.container} key={index}>
            <Text style={styles.tableHeading}>
              Kredit mablag'i hisobidan qilinadigan xarajatlar
            </Text>
            <Text style={styles.tableHeading}>№</Text>
            <Text style={styles.tableRowText}>{index + 1}</Text>
            <Text style={styles.tableHeading}>Xarajat turi</Text>
            <View style={styles.tableContainer}>
              <SelectDropdown
                data={spends}
                onSelect={selectedItem => {
                  setSelectedName(selectedItem.name);
                  inputFields[index].spend = selectedItem.name;
                  return selectedItem;
                }}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem.name;
                }}
                rowTextForSelection={item => item.name}
                defaultButtonText={'Tanlash'}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  width: '100%',
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
            {selectedName === 'Бошқа' ||
            selectedName === 'Нақд пул(5 000 000)' ? (
              <TextInput
                style={styles.input}
                placeholder="харажат турини киритинг..."
                placeholderTextColor="#56678f"
                onChangeText={text => setAnotherTypes(text)}
              />
            ) : (
              ''
            )}
            <Text style={styles.tableHeading}>o'lchov birligi</Text>
            <View style={styles.tableContainer}>
              <SelectDropdown
                data={dimensions}
                onSelect={selectedItem => {
                  setSelectedDimension(selectedItem.name);
                  inputFields[index].view = selectedItem.name;
                  return selectedItem;
                }}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem.name;
                }}
                rowTextForSelection={item => item.name}
                defaultButtonText={'Tanlash'}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  width: '100%',
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
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => umnojenie(text, index, 'quantity')}
            />
            <Text style={styles.tableHeading}>bahosi, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => umnojenie(text, index, 'price')}
              keyboardType="number-pad"
            />
            <Text style={styles.tableHeading}>summa, so'm</Text>
            <Text style={styles.tableHeading}>{inputFields[index].value}</Text>
          </View>
        );
      })}
      <View style={styles.tableView}>
        <TouchableOpacity onPress={addInputField}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        {inputFields.length > 1 ? (
          <TouchableOpacity onPress={removeInputFields}>
            <Text style={styles.closeIcon}>x</Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      <Text style={styles.tableHeading}>{amount}</Text>
    </>
  );
};

export default Table;

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 2,
    borderColor: '#adbccb',
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  table: {
    alignItems: 'center',
    width: '100%',
  },
  tableHeading: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    fontSize: 16,
    textAlign: 'center',
    margin: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#c5cfe2',
    width: '90%',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'center',
  },
  tableText: {
    color: '#56678f',
    fontFamily: 'Montserrat-Regular',
    height: 40,
    fontSize: 16,
    paddingTop: 8,
  },
  tableRowText: {
    color: '#56678f',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: 16,
  },
  tableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    fontFamily: 'Montserrat-Medium',
    color: '#56678f',
    fontSize: 30,
  },
  closeIcon: {
    fontSize: 25,
    fontFamily: 'Montserrat-Medium',
    color: '#56678f',
  },
  container: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#adbccb',
    margin: 10,
    alignSelf: 'center',
  },
});
