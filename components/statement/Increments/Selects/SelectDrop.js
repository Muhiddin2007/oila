import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SelectDrop = ({countries, setCountry, country, selects, index}) => {
  return (
    <View style={styles.tableContainer}>
      <SelectDropdown
        data={countries}
        onSelect={selectedItem => {
          setCountry(selectedItem.name);
          selects[index].country = selectedItem.name;
          return selects[index].country;
        }}
        buttonTextAfterSelection={selectedItem => {
          country === 'Tanlash' && selectedItem.name;
          return country;
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
  );
};

export default SelectDrop;

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 2,
    borderColor: '#adbccb',
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
});
