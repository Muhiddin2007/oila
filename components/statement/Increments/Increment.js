import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {setDimensions} from '../../../features/counterSlice';
import {getIncomeTypes, getDimensions} from '../../data/axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Select from './Select';

const Increment = ({
  inputFields,
  setInputFields,
  price,
  setPrice,
  price1,
  setPrice1,
  price2,
  setPrice2,
  price3,
  setPrice3,
  price4,
  setPrice4,
  price5,
  setPrice5,
  price6,
  setPrice6,
  price7,
  setPrice7,
  value,
  setValue,
}) => {
  const dispatch = useDispatch();
  const parentId = useSelector(state => state.credit.parentId);
  const dimensions = useSelector(state => state.credit.dimensions);
  const [incomeType, setIncomeType] = useState();

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        firstPrice: 0,
        oneHulfPrice: 0,
        secondPrice: 0,
        thirdPrice: 0,
        fourthPrice: 0,
        fifthPrice: 0,
        sixthPrice: 0,
        seventhPrice: 0,
        totalAmount: 0,
        spendType: '',
        spendDimension: '',
      },
    ]);
  };

  const removeInputFields = () => {
    const rows = [...inputFields];
    rows.splice(rows.length - 1, 1);
    setInputFields(rows);
  };

  useEffect(() => {
    getIncomeTypes(parentId)
      .then(res => {
        setIncomeType(res?.data?.data?.list_by_parent);
      })
      .catch(error => console.log(error));
  }, [parentId]);

  useEffect(() => {
    getDimensions()
      .then(res => {
        dispatch(setDimensions(res.data.data));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View>
      {inputFields.map((data, index) => {
        return (
          <View style={styles.tableContainer} key={index}>
            <Text style={styles.tableHeading}>
              Faoliyat davomida kutiladigan daromadlar
            </Text>
            <Text style={styles.tableHeading}>№</Text>
            <Text style={styles.tableRowText}>{index + 1}</Text>
            <Text style={styles.tableHeading}>Daromad turi</Text>
            <View style={styles.tableContainer}>
              <SelectDropdown
                data={incomeType}
                onSelect={selectedItem => {
                  inputFields[index].spendType = selectedItem;
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
            <Text style={styles.tableHeading}>o'lchov birligi</Text>
            <View style={styles.tableContainer}>
              <SelectDropdown
                data={dimensions}
                onSelect={selectedItem => {
                  inputFields[index].spendDimension = selectedItem;
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
            <Select
              setInputFields={setInputFields}
              inputFields={inputFields}
              id={index}
              price={price}
              setPrice={setPrice}
              price1={price1}
              setPrice1={setPrice1}
              price2={price2}
              setPrice2={setPrice2}
              price3={price3}
              setPrice3={setPrice3}
              price4={price4}
              setPrice4={setPrice4}
              price5={price5}
              setPrice5={setPrice5}
              price6={price6}
              setPrice6={setPrice6}
              price7={price7}
              setPrice7={setPrice7}
              value={value}
              setValue={setValue}
            />
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
    </View>
  );
};

export default Increment;

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 2,
    borderColor: '#adbccb',
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    margin: 5,
  },
  tableHeading: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    fontSize: 16,
    textAlign: 'center',
    margin: 5,
  },
  tableRowText: {
    color: '#56678f',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  tableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
