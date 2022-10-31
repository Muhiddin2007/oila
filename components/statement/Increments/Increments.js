import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Increment from './Increment';
import Exported from './Exported';
import Results from './Results';
import {useSelector, useDispatch} from 'react-redux';
import {Snackbar} from 'react-native-paper';

const Increments = ({navigation}) => {
  const [inputFields, setInputFields] = useState([
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

  const [selects, setSelects] = useState([
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

  const [price, setPrice] = useState(0);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [price3, setPrice3] = useState(0);
  const [price4, setPrice4] = useState(0);
  const [price5, setPrice5] = useState(0);
  const [price6, setPrice6] = useState(0);
  const [price7, setPrice7] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalDebt1, setTotalDebt1] = useState(0);
  const [totalDebt15, setTotalDebt15] = useState(0);
  const [totalDebt2, setTotalDebt2] = useState(0);
  const [totalDebt3, setTotalDebt3] = useState(0);
  const [totalDebt4, setTotalDebt4] = useState(0);
  const [totalDebt5, setTotalDebt5] = useState(0);
  const [totalDebt6, setTotalDebt6] = useState(0);

  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const [value, setValue] = useState(0);
  function checkIsNaN() {
    if (Number.isNaN(price)) {
      setPrice(0);
    }
    if (Number.isNaN(price1)) {
      setPrice1(0);
    }
    if (Number.isNaN(price2)) {
      setPrice2(0);
    }
    if (Number.isNaN(price3)) {
      setPrice3(0);
    }
    if (Number.isNaN(price4)) {
      setPrice4(0);
    }
    if (Number.isNaN(price5)) {
      setPrice5(0);
    }
    if (Number.isNaN(price6)) {
      setPrice6(0);
    }
    if (Number.isNaN(price7)) {
      setPrice7(0);
    }
  }
  checkIsNaN();

  const month = useSelector(state => state.credit.month);

  let checkIncrements = true;
  let checkExported = true;

  inputFields.map(item => {
    if (item.spendType === '' || item.spendDimension === '') {
      checkIncrements = false;
    }
    if (month === 12) {
      if (item.firstPrice === 0) {
        checkIncrements = false;
      }
    }
    if (month === 18) {
      if (item.firstPrice === 0 && item.oneHulfPrice === 0) {
        checkIncrements = false;
      }
    }
    if (month === 24) {
      if (item.firstPrice === 0 && item.secondPrice === 0) {
        checkIncrements = false;
      }
    }
    if (month === 36) {
      if (
        item.firstPrice === 0 &&
        item.secondPrice === 0 &&
        item.thirdPrice === 0
      ) {
        checkIncrements = false;
      }
    }
    if (month === 48) {
      if (
        item.firstPrice === 0 &&
        item.secondPrice === 0 &&
        item.thirdPrice === 0 &&
        item.fourthPrice === 0
      ) {
        checkIncrements = false;
      }
    }
    if (month === 60) {
      if (
        item.firstPrice === 0 &&
        item.secondPrice === 0 &&
        item.thirdPrice === 0 &&
        item.fourthPrice === 0 &&
        item.fifthPrice === 0
      ) {
        checkIncrements = false;
      }
    }
    if (month === 72) {
      if (
        item.firstPrice === 0 &&
        item.secondPrice === 0 &&
        item.thirdPrice === 0 &&
        item.fourthPrice === 0 &&
        item.fifthPrice === 0 &&
        item.sixthPrice === 0
      ) {
        checkIncrements = false;
      }
    }
    if (month === 84) {
      if (
        item.firstPrice === 0 &&
        item.secondPrice === 0 &&
        item.thirdPrice === 0 &&
        item.fourthPrice === 0 &&
        item.fifthPrice === 0 &&
        item.sixthPrice === 0 &&
        item.seventhPrice === 0
      ) {
        checkIncrements = false;
      }
    }
  });

  let check = false;

  check = selects.map(
    item =>
      item.country !== 'Tanlash' ||
      item.income !== 'Tanlash' ||
      item.dimension !== 'Tanlash' ||
      item.month !== 0 ||
      item.firstMonth !== 0 ||
      item.secondMonth !== 0 ||
      item.thirdMonth !== 0 ||
      item.fourthMonth !== 0 ||
      item.fifthMonth !== 0 ||
      item.sixthMonth !== 0 ||
      item.seventhMonth !== 0 ||
      item.firstQuantity !== 0 ||
      item.firstHalfQuantity !== 0 ||
      item.secondQuantity !== 0 ||
      item.thirdQuantity !== 0 ||
      item.fourthQuantity !== 0 ||
      item.fifthQuantity !== 0 ||
      item.sixthQuantity !== 0 ||
      item.seventhQuantity !== 0,
  );

  check = check.includes(true);

  const checkExportedWritten = () => {
    selects.map(item => {
      if (
        item.country === 'Tanlash' ||
        item.dimension === 'Tanlash' ||
        item.income === 'Tanlash'
      ) {
        checkExported = false;
      }
      if (item.month === 0 || item.firstQuantity === 0) {
        checkExported = false;
      }
      if (month === 18) {
        if (
          item.month === 0 ||
          item.firstMonth === 0 ||
          item.firstQuantity === 0 ||
          item.firstHalfQuantity === 0
        ) {
          checkExported = false;
        }
      }
      if (month === 24) {
        if (
          item.month === 0 ||
          item.secondMonth === 0 ||
          item.firstQuantity === 0 ||
          item.secondQuantity === 0
        ) {
          checkExported = false;
        }
      }
      if (month === 36) {
        if (
          item.month === 0 ||
          item.secondMonth === 0 ||
          item.thirdMonth === 0 ||
          item.firstQuantity === 0 ||
          item.secondQuantity === 0 ||
          item.thirdQuantity === 0
        ) {
          checkExported = false;
        }
      }
      if (month === 48) {
        if (
          item.month === 0 ||
          item.secondMonth === 0 ||
          item.thirdMonth === 0 ||
          item.fourthMonth === 0 ||
          item.firstQuantity === 0 ||
          item.secondQuantity === 0 ||
          item.thirdQuantity === 0 ||
          item.fourthQuantity === 0
        ) {
          checkExported = false;
        }
      }
      if (month === 60) {
        if (
          item.month === 0 ||
          item.secondMonth === 0 ||
          item.thirdMonth === 0 ||
          item.fourthMonth === 0 ||
          item.fifthMonth === 0 ||
          item.firstQuantity === 0 ||
          item.secondQuantity === 0 ||
          item.thirdQuantity === 0 ||
          item.fourthQuantity === 0 ||
          item.fifthQuantity === 0
        ) {
          checkExported = false;
        }
      }
      if (month === 72) {
        if (
          item.month === 0 ||
          item.secondMonth === 0 ||
          item.thirdMonth === 0 ||
          item.fourthMonth === 0 ||
          item.fifthMonth === 0 ||
          item.sixthMonth === 0 ||
          item.firstQuantity === 0 ||
          item.secondQuantity === 0 ||
          item.thirdQuantity === 0 ||
          item.fourthQuantity === 0 ||
          item.fifthQuantity === 0 ||
          item.sixthQuantity === 0
        ) {
          checkExported = false;
        }
      }
      if (month === 84) {
        if (
          item.month === 0 ||
          item.secondMonth === 0 ||
          item.thirdMonth === 0 ||
          item.fourthMonth === 0 ||
          item.fifthMonth === 0 ||
          item.sixthMonth === 0 ||
          item.seventhMonth === 0 ||
          item.firstQuantity === 0 ||
          item.secondQuantity === 0 ||
          item.thirdQuantity === 0 ||
          item.fourthQuantity === 0 ||
          item.fifthQuantity === 0 ||
          item.sixthQuantity === 0 ||
          item.seventhQuantity === 0
        ) {
          checkExported = false;
        }
      }
    });
  };

  if (check) {
    checkExportedWritten();
  } else {
    checkExported = true;
  }

  const handleSubmit = () => {
    if (!checkIncrements || !checkExported) {
      setVisible(true);
      setMessage('Кутиладиган даромад харажатлардан кам бўлиши мумкин эмас!');
    } else {
      navigation.navigate('Total');
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.wrapper}>
          <View>
            <View style={styles.focusedLabel}></View>
            <Text style={styles.labelText}>Arizachi</Text>
          </View>
          <View>
            <View style={styles.focusedLabel}></View>
            <Text style={styles.labelText}>Manzil</Text>
          </View>
          <View>
            <View style={styles.focusedLabel}></View>
            <Text style={styles.labelText}>Harajatlar</Text>
          </View>
          <View>
            <View style={styles.focusedLabel}></View>
            <Text style={styles.labelText}>Daromadlar</Text>
          </View>
          <View>
            <View style={styles.label}></View>
            <Text style={styles.labelText}>Natija</Text>
          </View>
        </View>
        <Increment
          inputFields={inputFields}
          setInputFields={setInputFields}
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
        <Exported
          checkExported={checkExported}
          selects={selects}
          setSelects={setSelects}
        />
        <Results
          price={price}
          price1={price1}
          price2={price2}
          price3={price3}
          price4={price4}
          price5={price5}
          price6={price6}
          price7={price7}
          value={value}
          total={total}
          setTotal={setTotal}
          totalDebt1={totalDebt1}
          setTotalDebt1={setTotalDebt1}
          totalDebt15={totalDebt15}
          setTotalDebt15={setTotalDebt15}
          totalDebt2={totalDebt2}
          setTotalDebt2={setTotalDebt2}
          totalDebt3={totalDebt3}
          setTotalDebt3={setTotalDebt3}
          totalDebt4={totalDebt4}
          setTotalDebt4={setTotalDebt4}
          totalDebt5={totalDebt5}
          setTotalDebt5={setTotalDebt5}
          totalDebt6={totalDebt6}
          setTotalDebt6={setTotalDebt6}
        />
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerLeftBtn}
            onPress={() => navigation.goBack()}>
            <View style={styles.footerLeftArrow}>
              <AntDesign name="arrowleft" size={20} color="#fff" />
            </View>
            <Text style={styles.footerButtonText}>Orqaga</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={handleSubmit}>
            <Text style={styles.footerButtonText}>Davom etish</Text>
            <View style={styles.footerButtonArrow}>
              <AntDesign name="arrowright" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {message && (
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={5000}
          action={{
            label: 'Yopish',
          }}>
          {message}
        </Snackbar>
      )}
    </>
  );
};

export default Increments;

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#FFFFFF',
    fontSize: 16,
  },
  footerButtonArrow: {
    backgroundColor: '#00AB81',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00C695',
    height: 50,
    justifyContent: 'space-between',
    width: '45%',
    borderRadius: 5,
    paddingLeft: 25,
    paddingRight: 0,
  },
  footerLeftArrow: {
    alignItems: 'center',
    backgroundColor: '#566789',
    height: 50,
    justifyContent: 'center',
    width: '45%',
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  footerLeftBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#324352',
    height: 50,
    justifyContent: 'space-between',
    width: '45%',
    borderRadius: 5,
    paddingRight: 50,
  },
  focusedLabel: {
    height: 15,
    backgroundColor: '#00C695',
    borderRadius: 60,
  },
  labelText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#324352',
  },
  label: {
    height: 15,
    backgroundColor: '#E6EAED',
    borderRadius: 60,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E6EAED',
    width: '98%',
    height: 80,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
});
