import React, {useState, useMemo} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const Months = ({selects, callback}) => {
  return (
    <>
      {Object.keys(selects)?.map(year => {
        return Object.keys(selects[year])?.map(month => {
          return <MonthInput year={year} month={month} callback={callback} />;
        });
      })}
    </>
  );
};

export const MonthInput = ({year, month, callback}) => {
  const [quantity, setQuantity] = useState(0);

  const maxCredit = 100000;

  const creditChange = val => {
    setQuantity(val);
    if (val > maxCredit) {
      setQuantity(maxCredit + '');
    }
  };

  function moneyFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  }

  const setFieldState = value => {
    callback(year, month, Number.isNaN(value) ? 0 : Number(value));
  };

  const quantityField = useMemo(() => {
    return quantity < 100000 ? moneyFormat(quantity) : moneyFormat(100000);
  }, [quantity]);

  return (
    <>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => creditChange(text)}
        value={quantity}
      />
      <Text>{quantityField}</Text>
      summasi, so'm, so'm
      <TextInput
        style={styles.input}
        onChangeText={val => setFieldState(val)}
        keyboardType="number-pad"
      />
    </>
  );
};

export default Months;
const styles = StyleSheet.create({
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
    width: 250,
    borderRadius: 5,
    textAlign: 'center',
    color: '#56678f',
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
  },
  tableText: {
    color: '#56678f',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    padding: 8,
    textAlign: 'center',
  },
  tableShowHeading: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
});
