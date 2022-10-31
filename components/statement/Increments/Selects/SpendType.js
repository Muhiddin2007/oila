import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SpendType = ({incomeType, setIncome, income, selects, index}) => {
  return (
    <View style={styles.tableContainer}>
      <SelectDropdown
        data={incomeType}
        onSelect={selectedItem => {
          setIncome(selectedItem.name);
          selects[index].income = selectedItem.name;
          return selectedItem;
        }}
        buttonTextAfterSelection={selectedItem => {
          (income === null || income === 'Tanlash') && selectedItem.name;
          return income;
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

export default SpendType;

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
