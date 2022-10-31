import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const Select = ({
  inputFields,
  id,
  setPrice,
  setPrice1,
  setPrice2,
  setPrice3,
  setPrice4,
  setPrice5,
  setPrice6,
  setPrice7,
  setValue,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);
  const [quantity5, setQuantity5] = useState(0);
  const [quantity6, setQuantity6] = useState(0);
  const [quantity7, setQuantity7] = useState(0);

  const [total, setTotal] = useState(0);

  const maxCredit = 100000;

  const creditChange = val => {
    setQuantity(val);
    if (val > maxCredit) {
      setQuantity(maxCredit + '');
    }
  };
  const creditChange1 = val => {
    setQuantity1(val);
    if (val > maxCredit) {
      setQuantity1(maxCredit + '');
    }
  };
  const creditChange2 = val => {
    setQuantity2(val);
    if (val > maxCredit) {
      setQuantity2(maxCredit + '');
    }
  };
  const creditChange3 = val => {
    setQuantity3(val);
    if (val > maxCredit) {
      setQuantity3(maxCredit + '');
    }
  };
  const creditChange4 = val => {
    setQuantity4(val);
    if (val > maxCredit) {
      setQuantity4(maxCredit + '');
    }
  };
  const creditChange5 = val => {
    setQuantity5(val);
    if (val > maxCredit) {
      setQuantity5(maxCredit + '');
    }
  };
  const creditChange6 = val => {
    setQuantity6(val);
    if (val > maxCredit) {
      setQuantity6(maxCredit + '');
    }
  };
  const creditChange7 = val => {
    setQuantity7(val);
    if (val > maxCredit) {
      setQuantity7(maxCredit + '');
    }
  };

  const month = useSelector(state => state.credit.month);

  function moneyFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  }

  const setFieldState = (index, value, type) => {
    if (type == 'firstPrice') {
      inputFields[index].firstPrice = value;
    } else if (type == 'oneHulfPrice') {
      inputFields[index].oneHulfPrice = value;
    } else if (type == 'secondPrice') {
      inputFields[index].secondPrice = value;
    } else if (type == 'thirdPrice') {
      inputFields[index].thirdPrice = value;
    } else if (type == 'fourthPrice') {
      inputFields[index].fourthPrice = value;
    } else if (type == 'fifthPrice') {
      inputFields[index].fifthPrice = value;
    } else if (type == 'sixthPrice') {
      inputFields[index].sixthPrice = value;
    } else {
      inputFields[index].seventhPrice = value;
    }
    if (Number.isNaN(inputFields[index].firstPrice)) {
      inputFields[index].firstPrice = 0;
    }
    if (Number.isNaN(inputFields[index].oneHulfPrice)) {
      inputFields[index].oneHulfPrice = 0;
    }
    if (Number.isNaN(inputFields[index].secondPrice)) {
      inputFields[index].secondPrice = 0;
    }
    if (Number.isNaN(inputFields[index].thirdPrice)) {
      inputFields[index].thirdPrice = 0;
    }
    if (Number.isNaN(inputFields[index].fourthPrice)) {
      inputFields[index].fourthPrice = 0;
    }
    if (Number.isNaN(inputFields[index].fifthPrice)) {
      inputFields[index].fifthPrice = 0;
    }
    if (Number.isNaN(inputFields[index].sixthPrice)) {
      inputFields[index].sixthPrice = 0;
    }
    if (Number.isNaN(inputFields[index].seventhPrice)) {
      inputFields[index].seventhPrice = 0;
    }
    inputFields[index].totalAmount =
      inputFields[index].firstPrice +
      inputFields[index].oneHulfPrice +
      inputFields[index].secondPrice +
      inputFields[index].thirdPrice +
      inputFields[index].fourthPrice +
      inputFields[index].fifthPrice +
      inputFields[index].sixthPrice +
      inputFields[index].seventhPrice;
    setTotal(inputFields[index].totalAmount);
  };

  let total_sum = 0;

  let modifiedArr = inputFields.map(
    element => (total_sum = element.totalAmount),
  );

  const sumWithInitial = modifiedArr.reduce((prev, curr) => prev + curr, 0);

  let total_sum1 = 0;

  let modifiedArr1 = inputFields.map(
    element => (total_sum1 = element.firstPrice),
  );

  const sumWithInitial1 = modifiedArr1.reduce((prev, curr) => prev + curr, 0);

  let total_sum15 = 0;

  let modifiedArr15 = inputFields.map(
    element => (total_sum15 = element.oneHulfPrice),
  );

  const sumWithInitial15 = modifiedArr15.reduce((prev, curr) => prev + curr, 0);

  let total_sum2 = 0;

  let modifiedArr2 = inputFields.map(
    element => (total_sum2 = element.secondPrice),
  );

  const sumWithInitial2 = modifiedArr2.reduce((prev, curr) => prev + curr, 0);

  let total_sum3 = 0;

  let modifiedArr3 = inputFields.map(
    element => (total_sum3 = element.thirdPrice),
  );

  const sumWithInitial3 = modifiedArr3.reduce((prev, curr) => prev + curr, 0);

  let total_sum4 = 0;

  let modifiedArr4 = inputFields.map(
    element => (total_sum4 = element.fourthPrice),
  );

  const sumWithInitial4 = modifiedArr4.reduce((prev, curr) => prev + curr, 0);

  let total_sum5 = 0;

  let modifiedArr5 = inputFields.map(
    element => (total_sum5 = element.fifthPrice),
  );

  const sumWithInitial5 = modifiedArr5.reduce((prev, curr) => prev + curr, 0);

  let total_sum6 = 0;

  let modifiedArr6 = inputFields.map(
    element => (total_sum6 = element.sixthPrice),
  );

  const sumWithInitial6 = modifiedArr6.reduce((prev, curr) => prev + curr, 0);

  let total_sum7 = 0;

  let modifiedArr7 = inputFields.map(
    element => (total_sum7 = element.seventhPrice),
  );

  const sumWithInitial7 = modifiedArr7.reduce((prev, curr) => prev + curr, 0);

  React.useEffect(() => {
    setValue(sumWithInitial);
    setPrice(sumWithInitial1);
    setPrice1(sumWithInitial15);
    setPrice2(sumWithInitial2);
    setPrice3(sumWithInitial3);
    setPrice4(sumWithInitial4);
    setPrice5(sumWithInitial5);
    setPrice6(sumWithInitial6);
    setPrice7(sumWithInitial7);
  }, [
    sumWithInitial,
    sumWithInitial1,
    sumWithInitial15,
    sumWithInitial2,
    sumWithInitial3,
    sumWithInitial4,
    sumWithInitial5,
    sumWithInitial6,
    sumWithInitial7,
  ]);

  return (
    <View style={{width: '100%'}}>
      <View style={styles.tableContainer}>
        <Text style={styles.tableShowHeading}>1-12 oylarda</Text>
        <Text style={styles.tableHeading}>miqdori</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => creditChange(text)}
          keyboardType="number-pad"
          value={quantity}
        />
        <Text style={styles.tableText}>
          {quantity < 100000 ? moneyFormat(quantity) : moneyFormat(100000)}
        </Text>
        <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
        <TextInput
          style={styles.input}
          onChangeText={val => setFieldState(id, parseInt(val), 'firstPrice')}
          keyboardType="number-pad"
        />
      </View>
      {month == 18 ? (
        <View style={styles.tableContainer}>
          <Text style={styles.tableShowHeading}>13-18 oylarda</Text>
          <Text style={styles.tableHeading}>miqdori</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={text => creditChange1(text)}
            value={quantity1}
          />
          <Text style={styles.tableText}>
            {quantity < 100000 ? moneyFormat(quantity) : moneyFormat(100000)}
          </Text>
          <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
          <TextInput
            style={styles.input}
            onChangeText={val =>
              setFieldState(id, parseInt(val), 'oneHulfPrice')
            }
            keyboardType="number-pad"
          />
        </View>
      ) : (
        ''
      )}
      {month == 24 ? (
        <View style={styles.tableContainer}>
          <Text style={styles.tableShowHeading}>13-24 oylarda</Text>
          <Text style={styles.tableHeading}>miqdori</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={text => creditChange2(text)}
            value={quantity2}
          />
          <Text style={styles.tableText}>
            {quantity2 < 100000 ? moneyFormat(quantity2) : moneyFormat(100000)}
          </Text>
          <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
          <TextInput
            style={styles.input}
            onChangeText={val =>
              setFieldState(id, parseInt(val), 'secondPrice')
            }
            keyboardType="number-pad"
          />
        </View>
      ) : (
        ''
      )}
      {month == 36 ? (
        <>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>13-24 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange2(text)}
              value={quantity2}
            />
            <Text style={styles.tableText}>
              {quantity2 < 100000
                ? moneyFormat(quantity2)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'secondPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>25-36 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange3(text)}
              value={quantity3}
            />
            <Text style={styles.tableText}>
              {quantity3 < 100000
                ? moneyFormat(quantity3)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'thirdPrice')
              }
              keyboardType="number-pad"
            />
          </View>
        </>
      ) : (
        ''
      )}
      {month == 48 ? (
        <>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>13-24 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange2(text)}
              value={quantity2}
            />
            <Text style={styles.tableText}>
              {quantity2 < 100000
                ? moneyFormat(quantity2)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'secondPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>25-36 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange3(text)}
              value={quantity3}
            />
            <Text style={styles.tableText}>
              {quantity3 < 100000
                ? moneyFormat(quantity3)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'thirdPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>37-48 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange4(text)}
              value={quantity4}
            />
            <Text style={styles.tableText}>
              {quantity4 < 100000
                ? moneyFormat(quantity4)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'fourthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
        </>
      ) : (
        ''
      )}
      {month == 60 ? (
        <>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>13-24 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange2(text)}
              value={quantity2}
            />
            <Text style={styles.tableText}>
              {quantity2 < 100000
                ? moneyFormat(quantity2)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'secondPrice')
              }
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>25-36 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange3(text)}
              value={quantity3}
            />
            <Text style={styles.tableText}>
              {quantity3 < 100000
                ? moneyFormat(quantity3)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'thirdPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>37-48 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange4(text)}
              value={quantity4}
            />
            <Text style={styles.tableText}>
              {quantity4 < 100000
                ? moneyFormat(quantity4)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'fourthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>49-60 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange5(text)}
              value={quantity5}
            />
            <Text style={styles.tableText}>
              {quantity5 < 100000
                ? moneyFormat(quantity5)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'fifthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
        </>
      ) : (
        ''
      )}
      {month == 72 ? (
        <>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>13-24 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange2(text)}
              value={quantity2}
            />
            <Text style={styles.tableText}>
              {quantity2 < 100000
                ? moneyFormat(quantity2)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'secondPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>25-36 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange3(text)}
              value={quantity3}
            />
            <Text style={styles.tableText}>
              {quantity3 < 100000
                ? moneyFormat(quantity3)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'thirdPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>37-48 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange4(text)}
              value={quantity4}
            />
            <Text style={styles.tableText}>
              {quantity4 < 100000
                ? moneyFormat(quantity4)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'fourthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>49-60 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange5(text)}
              value={quantity5}
            />
            <Text style={styles.tableText}>
              {quantity5 < 100000
                ? moneyFormat(quantity5)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'fifthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>61-72 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange6(text)}
              value={quantity6}
            />
            <Text style={styles.tableText}>
              {quantity6 < 100000
                ? moneyFormat(quantity6)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'sixthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
        </>
      ) : (
        ''
      )}
      {month == 84 ? (
        <>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>13-24 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange2(text)}
              value={quantity2}
            />
            <Text style={styles.tableText}>
              {quantity2 < 100000
                ? moneyFormat(quantity2)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'secondPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>25-36 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange3(text)}
              value={quantity3}
            />
            <Text style={styles.tableText}>
              {quantity3 < 100000
                ? moneyFormat(quantity3)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'thirdPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>37-48 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange4(text)}
              value={quantity4}
            />
            <Text style={styles.tableText}>
              {quantity4 < 100000
                ? moneyFormat(quantity4)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'fourthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>49-60 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange5(text)}
              value={quantity5}
            />
            <Text style={styles.tableText}>
              {quantity5 < 100000
                ? moneyFormat(quantity5)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'fifthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>61-72 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange6(text)}
              value={quantity6}
            />
            <Text style={styles.tableText}>
              {quantity6 < 100000
                ? moneyFormat(quantity6)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'sixthPrice')
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableShowHeading}>73-84 oylarda</Text>
            <Text style={styles.tableHeading}>miqdori</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => creditChange7(text)}
              value={quantity7}
            />
            <Text style={styles.tableText}>
              {quantity7 < 100000
                ? moneyFormat(quantity7)
                : moneyFormat(100000)}
            </Text>
            <Text style={styles.tableHeading}>summasi, so'm, so'm</Text>
            <TextInput
              style={styles.input}
              onChangeText={val =>
                setFieldState(id, parseInt(val), 'seventhPrice')
              }
              keyboardType="number-pad"
            />
          </View>
        </>
      ) : (
        ''
      )}
    </View>
  );
};

export default Select;

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
    height: 40,
    fontSize: 16,
    paddingTop: 8,
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
    margin: 5,
  },
});
