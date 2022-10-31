import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Unit = ({dimensions, setDimension, dimension, index, selects}) => {
  return (
    <View style={styles.tableContainer}>
      <SelectDropdown
        data={dimensions}
        onSelect={selectedItem => {
          setDimension(selectedItem.name);
          selects[index].dimension = selectedItem.name;
          return selectedItem;
        }}
        buttonTextAfterSelection={selectedItem => {
          (dimension === null || dimension === 'Tanlash') && selectedItem.name;
          return dimension;
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

export default Unit;

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
