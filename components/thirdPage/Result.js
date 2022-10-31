import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPayment} from '../data/axios';
import dayjs from 'dayjs';

const Result = () => {
  const creditValue = useSelector(state => state.credit.creditValue);
  const monthValue = useSelector(state => state.credit.monthValue);
  const davrValue = useSelector(state => state.credit.davrValue);
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    getPayment(creditValue, monthValue, davrValue, date)
      .then(res => setPayment(res.data.data))
      .catch(err => console.log(err));
  }, []);
  const time = new Date();
  const date = dayjs(time).format('YYYY-MM-DD');
  return (
    <View>
      <ScrollView>
        <ScrollView horizontal>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Oy</Text>
            </View>
            {payment.map((item, i) => (
              <Text key={i} style={styles.rowNum}>
                {item.num}
              </Text>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Asosiy qarz</Text>
            </View>
            {payment.map((item, i) => (
              <Text key={i} style={styles.rowNum}>
                {item.end_residue}
              </Text>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Hisoblangan foizlar</Text>
            </View>
            {payment.map((item, i) => (
              <Text key={i} style={styles.rowNum}>
                {item.repayable_sum}
              </Text>
            ))}
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.row}>
              <Text style={styles.rowText}>To'lovning umumiy miqdori</Text>
            </View>
            {payment.map((item, i) => (
              <Text key={i} style={styles.rowNum}>
                {item.percent_sum}
              </Text>
            ))}
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.row}>
              <Text style={styles.rowText}>To'lovdan so'ng qolgan qoldiq</Text>
            </View>
            {payment.map((item, i) => (
              <Text key={i} style={styles.rowNum}>
                {item.payment_total}
              </Text>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#5D6677',
    flexDirection: 'row',
  },
  rowText: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    padding: 10,
    fontSize: 16,
  },
  rowNum: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
});
