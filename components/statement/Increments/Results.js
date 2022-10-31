import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPayment} from '../../data/axios';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';

const Results = ({
  price,
  price1,
  price2,
  price3,
  price4,
  price5,
  price6,
  price7,
  value,
  total,
  setTotal,
  totalDebt1,
  setTotalDebt1,
  totalDebt15,
  setTotalDebt15,
  totalDebt2,
  setTotalDebt2,
  totalDebt3,
  setTotalDebt3,
  totalDebt4,
  setTotalDebt4,
  totalDebt5,
  setTotalDebt5,
  totalDebt6,
  setTotalDebt6,
}) => {
  const [result, setResult] = useState([]);

  const [overAll, setOverAll] = useState(0);
  useEffect(() => {
    setOverAll(
      total +
        totalDebt1 +
        totalDebt15 +
        totalDebt2 +
        totalDebt3 +
        totalDebt4 +
        totalDebt5 +
        totalDebt6,
    );
  }, [
    total,
    totalDebt1,
    totalDebt15,
    totalDebt2,
    totalDebt3,
    totalDebt4,
    totalDebt5,
    totalDebt6,
  ]);

  const [totalBenfit, setTotalBenfit] = useState(0);
  const [totalBenfit1, setTotalBenfit1] = useState(0);
  const [totalBenfit2, setTotalBenfit2] = useState(0);
  const [totalBenfit3, setTotalBenfit3] = useState(0);
  const [totalBenfit4, setTotalBenfit4] = useState(0);
  const [totalBenfit5, setTotalBenfit5] = useState(0);
  const [totalBenfit6, setTotalBenfit6] = useState(0);
  const [totalBenfit7, setTotalBenfit7] = useState(0);

  useEffect(() => {
    setTotalBenfit(price - (total1 + total));
    setTotalBenfit1(price1 - (total15 + totalDebt1));
    setTotalBenfit2(price2 - (total2 + totalDebt15));
    setTotalBenfit3(price3 - (total3 + totalDebt2));
    setTotalBenfit4(price4 - (total4 + totalDebt3));
    setTotalBenfit5(price5 - (total5 + totalDebt4));
    setTotalBenfit6(price6 - (total6 + totalDebt5));
    setTotalBenfit7(price7 - (total7 + totalDebt6));
  }, [
    total1,
    total2,
    total3,
    total4,
    total5,
    total6,
    total7,
    price,
    price1,
    price2,
    price3,
    price4,
    price5,
    price6,
    price7,
    totalDebt1,
    totalDebt15,
    totalDebt2,
    totalDebt3,
    totalDebt4,
    totalDebt5,
    totalDebt6,
  ]);
  const amount = useSelector(state => state.credit.amount);
  const monthValue = useSelector(state => state.credit.month);
  const davrValue = useSelector(state => state.credit.preveligious);

  const time = new Date();
  const date = dayjs(time).format('YYYY-MM-DD');

  useEffect(() => {
    getPayment(amount, monthValue, davrValue, date)
      .then(res => setResult(res.data.data))
      .catch(err => console.log(err));
  }, []);

  let modifiedArr = result.map(element => element.payment_total);

  let total1 = 0;
  let total15 = 0;
  let total2 = 0;
  let total3 = 0;
  let total4 = 0;
  let total5 = 0;
  let total6 = 0;
  let total7 = 0;

  if (modifiedArr.length / 12 == 1) {
    for (let i = 0; i < 12; i++) {
      total1 = modifiedArr[i] + total1;
    }
  } else if (modifiedArr.length / 12 == 1.5) {
    for (let i = 0; i < 12; i++) {
      total1 = modifiedArr[i] + total1;
    }
    for (let i = 12; i < 18; i++) {
      total15 = modifiedArr[i] + total15;
    }
  } else if (modifiedArr.length / 12 == 2) {
    for (let i = 0; i < 12; i++) {
      total1 = modifiedArr[i] + total1;
    }
    for (let i = 12; i < 24; i++) {
      total2 = modifiedArr[i] + total2;
    }
  } else if (modifiedArr.length / 12 == 3) {
    for (let i = 0; i < 12; i++) {
      total1 = modifiedArr[i] + total1;
    }
    for (let i = 12; i < 24; i++) {
      total2 = modifiedArr[i] + total2;
    }
    for (let i = 24; i < 36; i++) {
      total3 = modifiedArr[i] + total3;
    }
  } else if (modifiedArr.length / 12 == 4) {
    for (let i = 0; i < 12; i++) {
      total1 = modifiedArr[i] + total1;
    }
    for (let i = 12; i < 24; i++) {
      total2 = modifiedArr[i] + total2;
    }
    for (let i = 24; i < 36; i++) {
      total3 = modifiedArr[i] + total3;
    }
    for (let i = 36; i < 48; i++) {
      total4 = modifiedArr[i] + total4;
    }
  } else if (modifiedArr.length / 12 == 5) {
    for (let i = 0; i < 12; i++) {
      total1 = modifiedArr[i] + total1;
    }
    for (let i = 12; i < 24; i++) {
      total2 = modifiedArr[i] + total2;
    }
    for (let i = 24; i < 36; i++) {
      total3 = modifiedArr[i] + total3;
    }
    for (let i = 36; i < 48; i++) {
      total4 = modifiedArr[i] + total4;
    }
    for (let i = 48; i < 60; i++) {
      total5 = modifiedArr[i] + total5;
    }
  } else if (modifiedArr.length / 12 == 6) {
    for (let i = 0; i < 12; i++) {
      total1 = modifiedArr[i] + total1;
    }
    for (let i = 12; i < 24; i++) {
      total2 = modifiedArr[i] + total2;
    }
    for (let i = 24; i < 36; i++) {
      total3 = modifiedArr[i] + total3;
    }
    for (let i = 36; i < 48; i++) {
      total4 = modifiedArr[i] + total4;
    }
    for (let i = 48; i < 60; i++) {
      total5 = modifiedArr[i] + total5;
    }
    for (let i = 60; i < 72; i++) {
      total6 = modifiedArr[i] + total6;
    }
  } else {
    for (let i = 0; i < 12; i++) {
      total1 = modifiedArr[i] + total1;
    }
    for (let i = 12; i < 24; i++) {
      total2 = modifiedArr[i] + total2;
    }
    for (let i = 24; i < 36; i++) {
      total3 = modifiedArr[i] + total3;
    }
    for (let i = 36; i < 48; i++) {
      total4 = modifiedArr[i] + total4;
    }
    for (let i = 48; i < 60; i++) {
      total5 = modifiedArr[i] + total5;
    }
    for (let i = 60; i < 72; i++) {
      total6 = modifiedArr[i] + total6;
    }
    for (let i = 72; i < 84; i++) {
      total7 = modifiedArr[i] + total7;
    }
  }

  function checkIsNaN() {
    if (Number.isNaN(total1)) {
      total1 = 0;
    }
    if (Number.isNaN(total15)) {
      total15 = 0;
    }
    if (Number.isNaN(total2)) {
      total2 = 0;
    }
    if (Number.isNaN(total3)) {
      total3 = 0;
    }
    if (Number.isNaN(total4)) {
      total4 = 0;
    }
    if (Number.isNaN(total5)) {
      total5 = 0;
    }
    if (Number.isNaN(total6)) {
      total6 = 0;
    }
    if (Number.isNaN(total7)) {
      total7 = 0;
    }
  }
  checkIsNaN();
  let totalAmount =
    total1 + total15 + total2 + total3 + total4 + total5 + total6 + total7;
  return (
    <View>
      <View style={styles.tableContainer}>
        <Text style={styles.tableHeading}>Moliyaviy ko'rsatkichlar</Text>
        <View style={styles.tableContainer}>
          <Text style={styles.tableRowHeading}>turi</Text>
          <View style={styles.tableContainer}>
            <Text style={styles.tableRowHeading}>kutiladigan daromad</Text>
            <Text style={styles.tableRowHeading}>1-12 oylarda, so'm</Text>
            <Text style={styles.tableText}>{price}</Text>
            <Text style={total15 ? styles.tableRowHeading : {display: 'none'}}>
              13-18 oylarda, so'm
            </Text>
            <Text style={total15 ? styles.tableText : {display: 'none'}}>
              {price1}
            </Text>
            <Text style={total2 ? styles.tableRowHeading : {display: 'none'}}>
              13-24 oylarda, so'm
            </Text>
            <Text style={total2 ? styles.tableText : {display: 'none'}}>
              {price2}
            </Text>
            <Text style={total3 ? styles.tableRowHeading : {display: 'none'}}>
              25-36 oylarda, so'm
            </Text>
            <Text style={total3 ? styles.tableText : {display: 'none'}}>
              {price3}
            </Text>
            <Text style={total4 ? styles.tableRowHeading : {display: 'none'}}>
              37-48 oylarda, so'm
            </Text>
            <Text style={total4 ? styles.tableText : {display: 'none'}}>
              {price4}
            </Text>
            <Text style={total5 ? styles.tableRowHeading : {display: 'none'}}>
              49-60 oylarda, so'm
            </Text>
            <Text style={total5 ? styles.tableText : {display: 'none'}}>
              {price5}
            </Text>
            <Text style={total6 ? styles.tableRowHeading : {display: 'none'}}>
              61-72 oylarda, so'm
            </Text>
            <Text style={total6 ? styles.tableText : {display: 'none'}}>
              {price6}
            </Text>
            <Text style={total7 ? styles.tableRowHeading : {display: 'none'}}>
              73-84 oylarda, so'm
            </Text>
            <Text style={total7 ? styles.tableText : {display: 'none'}}>
              {price7}
            </Text>
            <Text style={styles.tableRowHeading}>jami</Text>
            <Text style={styles.tableText}>{value}</Text>
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableRowHeading}>kreditni qaytarishga</Text>
            <Text style={styles.tableRowHeading}>1-12 oylarda, so'm</Text>
            <Text style={styles.tableText}>
              {total1 ? Math.round(total1) : ''}
            </Text>
            <Text style={total15 ? styles.tableRowHeading : {display: 'none'}}>
              13-18 oylarda, so'm
            </Text>
            <Text style={total15 ? styles.tableText : {display: 'none'}}>
              {total15 ? Math.round(total15) : ''}
            </Text>
            <Text style={total2 ? styles.tableRowHeading : {display: 'none'}}>
              13-24 oylarda, so'm
            </Text>
            <Text style={total2 ? styles.tableText : {display: 'none'}}>
              {total2 ? Math.round(total2) : ''}
            </Text>
            <Text style={total3 ? styles.tableRowHeading : {display: 'none'}}>
              25-36 oylarda, so'm
            </Text>
            <Text style={total3 ? styles.tableText : {display: 'none'}}>
              {total3 ? Math.round(total3) : ''}
            </Text>
            <Text style={total4 ? styles.tableRowHeading : {display: 'none'}}>
              37-48 oylarda, so'm
            </Text>
            <Text style={total4 ? styles.tableText : {display: 'none'}}>
              {total4 ? Math.round(total4) : ''}
            </Text>
            <Text style={total5 ? styles.tableRowHeading : {display: 'none'}}>
              49-60 oylarda, so'm
            </Text>
            <Text style={total5 ? styles.tableText : {display: 'none'}}>
              {total5 ? Math.round(total5) : ''}
            </Text>
            <Text style={total6 ? styles.tableRowHeading : {display: 'none'}}>
              61-72 oylarda, so'm
            </Text>
            <Text style={total6 ? styles.tableText : {display: 'none'}}>
              {total6 ? Math.round(total6) : ''}
            </Text>
            <Text style={total7 ? styles.tableRowHeading : {display: 'none'}}>
              73-84 oylarda, so'm
            </Text>
            <Text style={total7 ? styles.tableText : {display: 'none'}}>
              {total7 ? Math.round(total7) : ''}
            </Text>
            <Text style={styles.tableRowHeading}>jami</Text>
            <Text style={styles.tableText}>{Math.round(totalAmount)}</Text>
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableRowHeading}>boshqa xarajat</Text>
            <Text style={styles.tableRowHeading}>1-12 oylarda, so'm</Text>
            <TextInput
              style={styles.tableInput}
              keyboardType="number-pad"
              onChangeText={value => setTotal(+value)}
            />
            <Text style={total15 ? styles.tableRowHeading : {display: 'none'}}>
              13-18 oylarda, so'm
            </Text>
            <TextInput
              style={total15 ? styles.tableInput : {display: 'none'}}
              keyboardType="number-pad"
              onChangeText={value => setTotalDebt1(+value)}
            />
            <Text style={total2 ? styles.tableRowHeading : {display: 'none'}}>
              13-24 oylarda, so'm
            </Text>
            <TextInput
              style={total2 ? styles.tableInput : {display: 'none'}}
              keyboardType="number-pad"
              onChangeText={value => setTotalDebt15(+value)}
            />
            <Text style={total3 ? styles.tableRowHeading : {display: 'none'}}>
              25-36 oylarda, so'm
            </Text>
            <TextInput
              style={total3 ? styles.tableInput : {display: 'none'}}
              keyboardType="number-pad"
              onChangeText={value => setTotalDebt2(+value)}
            />
            <Text style={total4 ? styles.tableRowHeading : {display: 'none'}}>
              37-48 oylarda, so'm
            </Text>
            <TextInput
              style={total4 ? styles.tableInput : {display: 'none'}}
              keyboardType="number-pad"
              onChangeText={value => setTotalDebt3(+value)}
            />
            <Text style={total5 ? styles.tableRowHeading : {display: 'none'}}>
              49-60 oylarda, so'm
            </Text>
            <TextInput
              style={total5 ? styles.tableInput : {display: 'none'}}
              keyboardType="number-pad"
              onChangeText={value => setTotalDebt4(+value)}
            />
            <Text style={total6 ? styles.tableRowHeading : {display: 'none'}}>
              61-72 oylarda, so'm
            </Text>
            <TextInput
              style={total6 ? styles.tableInput : {display: 'none'}}
              keyboardType="number-pad"
              onChangeText={value => setTotalDebt5(+value)}
            />
            <Text style={total7 ? styles.tableRowHeading : {display: 'none'}}>
              73-84 oylarda, so'm
            </Text>
            <TextInput
              style={total7 ? styles.tableInput : {display: 'none'}}
              keyboardType="number-pad"
              onChangeText={value => setTotalDebt6(+value)}
            />
            <Text style={styles.tableRowHeading}>jami</Text>
            <Text style={styles.tableText}>{overAll}</Text>
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableRowHeading}>sof foyda</Text>
            <Text style={styles.tableRowHeading}>1-12 oylarda, so'm</Text>
            <Text style={styles.tableText}>{Math.round(totalBenfit)}</Text>
            <Text style={total15 ? styles.tableRowHeading : {display: 'none'}}>
              13-18 oylarda, so'm
            </Text>
            <Text style={total15 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit1)}
            </Text>
            <Text style={total2 ? styles.tableRowHeading : {display: 'none'}}>
              13-24 oylarda, so'm
            </Text>
            <Text style={total2 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit2)}
            </Text>
            <Text style={total3 ? styles.tableRowHeading : {display: 'none'}}>
              25-36 oylarda, so'm
            </Text>
            <Text style={total3 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit3)}
            </Text>
            <Text style={total4 ? styles.tableRowHeading : {display: 'none'}}>
              37-48 oylarda, so'm
            </Text>
            <Text style={total4 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit4)}
            </Text>
            <Text style={total5 ? styles.tableRowHeading : {display: 'none'}}>
              49-60 oylarda, so'm
            </Text>
            <Text style={total5 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit5)}
            </Text>
            <Text style={total6 ? styles.tableRowHeading : {display: 'none'}}>
              61-72 oylarda, so'm
            </Text>
            <Text style={total6 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit6)}
            </Text>
            <Text style={total7 ? styles.tableRowHeading : {display: 'none'}}>
              73-84 oylarda, so'm
            </Text>
            <Text style={total7 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit7)}
            </Text>
            <Text style={styles.tableRowHeading}>jami</Text>
            <Text style={styles.tableText}>{Math.round(totalAmount)}</Text>
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.tableRowHeading}>rentabellik, %</Text>
            <Text style={styles.tableRowHeading}>1-12 oylarda, so'm</Text>
            <Text style={styles.tableText}>{Math.round(totalBenfit)}</Text>
            <Text style={total15 ? styles.tableRowHeading : {display: 'none'}}>
              13-18 oylarda, so'm
            </Text>
            <Text style={total15 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit1)}
            </Text>
            <Text style={total2 ? styles.tableRowHeading : {display: 'none'}}>
              13-24 oylarda, so'm
            </Text>
            <Text style={total2 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit2)}
            </Text>
            <Text style={total3 ? styles.tableRowHeading : {display: 'none'}}>
              25-36 oylarda, so'm
            </Text>
            <Text style={total3 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit3)}
            </Text>
            <Text style={total4 ? styles.tableRowHeading : {display: 'none'}}>
              37-48 oylarda, so'm
            </Text>
            <Text style={total4 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit4)}
            </Text>
            <Text style={total5 ? styles.tableRowHeading : {display: 'none'}}>
              49-60 oylarda, so'm
            </Text>
            <Text style={total5 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit5)}
            </Text>
            <Text style={total6 ? styles.tableRowHeading : {display: 'none'}}>
              61-72 oylarda, so'm
            </Text>
            <Text style={total6 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit6)}
            </Text>
            <Text style={total7 ? styles.tableRowHeading : {display: 'none'}}>
              73-84 oylarda, so'm
            </Text>
            <Text style={total7 ? styles.tableText : {display: 'none'}}>
              {Math.round(totalBenfit7)}
            </Text>
            <Text style={styles.tableRowHeading}>jami</Text>
            <Text style={styles.tableText}>{Math.round(totalAmount)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.tableRowHeading}>
          loyihani amalga oshirish bo'yicha qo'shimcha ma'lumotlar:
        </Text>
        <TextInput style={styles.bottomInput} multiline={true} />
      </View>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  tableHeading: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    fontSize: 18,
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
  tableRowHeading: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
  },
  tableInput: {
    borderWidth: 1,
    borderColor: '#c5cfe2',
    borderRadius: 5,
    textAlign: 'center',
    color: '#56678f',
    fontSize: 18,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  bottomInput: {
    borderWidth: 1,
    borderColor: '#c5cfe2',
    borderRadius: 5,
    textAlign: 'center',
    color: '#56678f',
    fontSize: 18,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  tableContainer: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#adbccb',
    margin: 10,
    alignSelf: 'center',
  },
});
