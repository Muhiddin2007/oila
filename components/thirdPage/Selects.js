import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getSelects, getChildren, getField} from '../data/axios';

import SelectDropdown from 'react-native-select-dropdown';

export const Dropdown2 = ({thisKey, typeId, setMonth, setDavr, setCredit}) => {
  const [currentId, setCurrentId] = useState([]);
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [field, setField] = useState();

  useEffect(() => {
    let newData = [];
    getSelects()
      .then(res =>
        res.data.data.map(item => {
          newData.push(item);
          setData(newData);
        }),
      )
      .catch(error => console.log(error));
  }, []);
  useEffect(() => {
    let newChild = [];
    getChildren(currentId, thisKey)
      .then(res =>
        res.data.data.map(item => {
          newChild.push(item);
          setName(newChild);
        }),
      )
      .catch(error => console.log(error));
  }, [currentId]);
  useEffect(() => {
    let newField = [];
    getField(typeId, currentId)
      .then(res => {
        res.data.data.map(item => {
          newField.push(item);
          setField(newField);
        });
      })
      .catch(error => console.log(error));
  }, [currentId]);
  const handleSelect = select => {
    setMonth(select.num02);
    setDavr(select.num03);
  };

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Text style={styles.naming}>Yo'nalishi</Text>
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
      <Text style={styles.naming}>Maqsadi</Text>
      <View style={styles.container}>
        <SelectDropdown
          data={name}
          onSelect={selectedItem => {
            handleSelect(selectedItem);
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
      <Text style={styles.naming}>Dastur</Text>
      <View style={styles.container}>
        <SelectDropdown
          data={field}
          onSelect={selectedItem => {
            setCredit(selectedItem.max_credit);
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
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#E6EAED',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  naming: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#AFB1B5',
    marginTop: 15,
    textAlign: 'center',
  },
});
