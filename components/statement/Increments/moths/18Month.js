import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const Month18 = ({id, selects, callback}) => {
  const [quantity, setQuantity] = useState(0);

  const maxCredit = 100000;

  const creditChange = (id, val) => {
    setQuantity(val);
    if (val > maxCredit) {
      setQuantity(maxCredit + '');
    }
    selects[id].firstHalfQuantity = val;
    callback(selects.firstHalfQuantity, val);
  };

  const setFieldState = (index, value) => {
    if (Number.isNaN(value)) {
      value = 0;
    }
    selects[index].firstMonth = value;
    callback(selects.firstMonth, value);
  };
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableShowHeading}>13-18 oylarda</Text>
      <Text style={styles.tableHeading}>miqdori</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => creditChange(id, Number(text))}
        value={quantity}
      />
      <Text style={styles.tableHeading}>summasi, so'm, dollar</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => setFieldState(id, parseInt(val))}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default Month18;

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
  tableContainer: {
    borderWidth: 2,
    borderColor: '#adbccb',
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    margin: 10,
  },
});
