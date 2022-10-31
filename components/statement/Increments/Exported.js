import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getIncomeTypes, getDimensions, getCountries} from '../../data/axios';
import Unit from './Selects/Unit';
import SelectDrop from './Selects/SelectDrop';
import SpendType from './Selects/SpendType';
import Months from './moths/index';
import App from './UploadFiles';

const Exported = ({setSelects, selects}) => {
  const parentId = useSelector(state => state.credit.parentId);
  const [incomeType, setIncomeType] = useState();
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState(null);
  const [income, setIncome] = useState(null);
  const [dimension, setDimension] = useState(null);

  const [dimensions, setDimensions] = useState();

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
        setDimensions(res.data.data);
      })
      .catch(error => console.log(error));
  }, []);
  useEffect(() => {
    getCountries()
      .then(res => {
        setCountries(res.data.data);
      })
      .catch(error => console.log(error));
  }, []);

  const clearSelects = () => {
    setCountry('Tanlash');
    setIncome('Tanlash');
    setDimension('Tanlash');
    selects[0].country = 'Tanlash';
    selects[0].income = 'Tanlash';
    selects[0].dimension = 'Tanlash';
  };

  const addSelects = () => {
    setSelects([
      ...selects,
      {
        country: 'Tanlash',
        income: 'Tanlash',
        dimension: 'Tanlash',
        month: 0,
        firstMonth: 0,
        secondMonth: 0,
        thirdMonth: 0,
        fourthMonth: 0,
        fifthMonth: 0,
        sixthMonth: 0,
        seventhMonth: 0,
        firstQuantity: 0,
        firstHalfQuantity: 0,
        secondQuantity: 0,
        thirdQuantity: 0,
        fourthQuantity: 0,
        fifthQuantity: 0,
        sixthQuantity: 0,
        seventhQuantity: 0,
      },
    ]);
  };

  const _ = require('lodash');

  const callback = (month, value) => {
    const newValue = _.cloneDeep(selects);
    newValue[month] = value;
    setSelects(newValue);
  };

  const removeSelects = () => {
    const rows = [...selects];
    rows.splice(rows.length - 1, 1);
    setSelects(rows);
  };

  return (
    <View>
      {selects.map((data, index) => {
        return (
          <View style={styles.tableContainer} key={index}>
            <Text style={styles.tableHeading}>
              Faoliyat davomida kutiladigan eksport hajimlari (agarda mavjud
              bo'lsa)
            </Text>
            <Text style={styles.tableHeading}>№</Text>
            <Text style={styles.tableRowText}>{index + 1}</Text>

            <Text style={styles.tableHeading}>Davlat</Text>
            <SelectDrop
              countries={countries}
              setCountry={setCountry}
              country={country}
              index={index}
              selects={selects}
            />

            <Text style={styles.tableHeading}>Xarajat turi</Text>
            <SpendType
              incomeType={incomeType}
              setIncome={setIncome}
              income={income}
              index={index}
              selects={selects}
            />

            <Text style={styles.tableHeading}>o'lchov birligi</Text>
            <Unit
              dimensions={dimensions}
              setDimension={setDimension}
              dimension={dimension}
              index={index}
              selects={selects}
              setSelects={setSelects}
            />

            <Months id={index} selects={selects} callback={callback} />
          </View>
        );
      })}

      <View style={styles.tableView}>
        <TouchableOpacity onPress={addSelects}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        {selects.length > 1 ? (
          <TouchableOpacity onPress={removeSelects}>
            <Text style={styles.closeIcon}>x</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={clearSelects}>
            <Text style={styles.closeIcon}>x</Text>
          </TouchableOpacity>
        )}
      </View>
      <App />
    </View>
  );
};

export default Exported;

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 2,
    borderColor: '#adbccb',
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    margin: 10,
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
});
