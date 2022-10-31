import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  Linking,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import {checkCredit} from '../data/axios';

const ENTRIES1 = [
  {
    img: require('../../assets/images/oila.png'),
    text: '6 ойгача имтиёз давр',
    heading: 'Ўз оилавий бизнесингизни бошланг',
    paragraph:
      'Оилавий тадбиркорлик, даромад топишга қаратилган муайян меҳнат фаолияти билан шуғулланиш ва фаолият турини кенгайтириш учун имтиёзли кредитлар.',
  },
  {
    img: require('../../assets/images/baliq.png'),
    text: '1 йилгача имтиёз давр',
    heading: 'Балиқчилик учун имтиёзли кредитлар',
    paragraph:
      'Чорвачилик, балиқчилик ва паррандачиликни йўналиши учун имтиёзли кредит олинг ва даромад манбаингизни кенгайтиринг.',
  },
  {
    img: require('../../assets/images/klubnika.png'),
    text: '3 йилгача имтиёз давр',
    heading: 'Деҳқон хўжаликларини ривожлантириш',
    paragraph:
      'Деҳқон хўжалигини ривожлантириш ва янги иш ўринларини яратишда имтиёзли кредитлардан фойдаланинг',
  },

  {
    img: require('../../assets/images/pichoq.png'),
    text: '3 йилгача имтиёз давр',
    heading: 'Ҳунармандларга кенг имкониятлар яратилди',
    paragraph:
      'Ҳунармандларга ишлаб чиқариш эҳтиёжлари учун асбоб-ускуна, эҳтиёт қисмлар ва хомашё материалларини харид қилиш учун имтиёзли кредитлар.',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState({});
  const [credit, setCredit] = useState();

  const checkCreditStatus = () => {
    checkCredit(credit, date)
      .then(res => {
        setStatus(res.data.data);
      })
      .catch(error => console.log(error));
  };

  function onSelectDate(value) {
    if (value?.nativeEvent?.timestamp) {
      setDate(value.nativeEvent.timestamp);
    }
    setOpen(false);
  }
  const time = new Date(date);
  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.img}
          containerStyle={styles.imageContainer}
          {...parallaxProps}
        />
        <Text style={styles.mainHeading}>{item.heading}</Text>
        <Text style={styles.mainText}>{item.text}</Text>
        <Text style={styles.mainParagraph}>{item.paragraph}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/header.png')}
          style={{width: 150, height: 35}}
        />
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Octicons
            name={'three-bars'}
            size={34}
            color="#324352"
            style={styles.menu}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={entries}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.ariza}
            onPress={() => navigation.navigate('Ariza')}>
            <Text style={styles.arizaBtn}>Ariza Yuborish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ariza}
            onPress={() => navigation.navigate('Stack')}>
            <Text style={styles.arizaBtn}>Kreditni hisoblash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ariza}
            onPress={() => setOpenModal(true)}>
            <Text style={styles.arizaBtn}>Ariza holatini tekshirish</Text>
          </TouchableOpacity>
        </View>
        {openModal && (
          <View
            style={{
              alignItems: 'center',
              position: 'absolute',
              zIndex: 1,
              height: '100%',
              backgroundColor: ' rgba(50, 67, 82, 0.74)',
              width: '100%',
              justifyContent: 'center',
            }}>
            <View style={styles.modal}>
              <Text style={styles.modalHeading}>Ariza holatini tekshirish</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Ariza raqami</Text>
                <TextInput
                  style={styles.input}
                  placeholder="№"
                  placeholderTextColor="#5D6677"
                  keyboardType="numeric"
                  onChangeText={text => setCredit(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Ariza berilgan sana</Text>
                <TouchableOpacity
                  onPress={() => setOpen(true)}
                  style={{
                    height: 50,
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#E6EAED',
                    marginTop: 3,
                    borderRadius: 5,
                  }}>
                  <Text style={styles.showDate}>
                    {date !== null
                      ? dayjs(date).format('DD.MM.YYYY')
                      : 'DD.MM.YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              {status.doc_status === 'ACCEPTED' ? (
                <Text style={styles.statusText}>
                  Ariza holati: Tavsiyanoma berilgan
                </Text>
              ) : (
                ''
              )}
              {status.doc_status === 'SCORE_REJECTED' ? (
                <Text style={styles.rejected}>
                  Ariza holati: Rad etilgan (skoring)
                </Text>
              ) : (
                ''
              )}
              {status.doc_status === 'HOKIM_REJECTED' ? (
                <Text style={styles.rejectedHokim}>
                  Ariza holati: Arizangiz hokim yordamchisi tomonidan rad
                  etilgan
                </Text>
              ) : (
                ''
              )}
              {status.doc_status === 'CANCELED' ? (
                <Text style={styles.rejectedHokim}>
                  Ariza holati: Arizangiz bekor qilingan
                </Text>
              ) : (
                ''
              )}
              {status.doc_status === 'SYS_CANCELED' ? (
                <Text style={styles.rejectedHokim}>
                  Ariza holati: Tizim tomonidan bekor qilindi
                </Text>
              ) : (
                ''
              )}
              {status.doc_status === 'BANK_REJECTED' ? (
                <Text style={styles.rejected}>
                  Ariza holati: ma'lumot topilmadi
                </Text>
              ) : (
                ''
              )}
              {Object.keys(status).length !== 0 ? (
                <Pressable
                  onPress={() => Linking.openURL(status.doc_url)}
                  style={{alignItems: 'center', width: '100%'}}>
                  <Text style={styles.statusText}>
                    Hujjat: {status.doc_url}
                  </Text>
                </Pressable>
              ) : (
                ''
              )}
              {Object.keys(status).length !== 0 && (
                <>
                  <Text style={styles.looker}>
                    Hokim yordamchisi:
                    <Text style={styles.lookerText}> {status.hokim_name}</Text>
                  </Text>
                  <Text style={styles.looker}>
                    Telefon raqami:
                    <Text style={styles.lookerText}>
                      {' '}
                      +{status.hokim_phone}
                    </Text>
                  </Text>
                  <Text style={styles.looker}>
                    Ko'rib chiqish muddati:
                    <Text style={styles.lookerText}> {status.term_date}</Text>
                  </Text>
                </>
              )}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setOpenModal(false)}>
                <Text style={styles.btnText}>Yopish</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkBtn}
                onPress={checkCreditStatus}>
                <Text style={styles.checkText}>Tekshirish</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {open && (
          <DateTimePicker
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={value => onSelectDate(value)}
            value={time}
            maximumDate={new Date()}
            minimumDate={new Date(2000, 0, 1)}
          />
        )}
      </ScrollView>
    </>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth + 150,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 10,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  mainHeading: {
    color: '#324352',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
  },
  mainParagraph: {
    color: '#5d6677',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
  },
  mainText: {
    color: '#56678f',
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  arizaBtn: {
    color: '#00C695',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  ariza: {
    width: '40%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00C695',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
  },
  modal: {
    backgroundColor: '#fff',
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
  },
  modalHeading: {
    color: '#324352',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
  },
  inputContainer: {
    width: '90%',
    marginTop: 20,
  },
  inputText: {
    color: '#5D6677',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E6EAED',
    marginTop: 3,
    borderRadius: 5,
    color: '#5D6677',
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  showDate: {
    color: '#5D6677',
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  btn: {
    width: ' 90%',
    height: 50,
    backgroundColor: '#E8EEF3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#324352',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  checkBtn: {
    width: ' 90%',
    height: 50,
    backgroundColor: '#00C695',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  checkText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  statusText: {
    color: '#00529B',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#BDE5F8',
    width: '90%',
    padding: 17,
    borderRadius: 5,
  },
  rejected: {
    color: '#9F6000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#FEEFB3',
    width: '90%',
    padding: 17,
    borderRadius: 5,
  },
  looker: {
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    width: '90%',
    fontSize: 15,
    marginTop: 5,
  },
  lookerText: {
    color: '#5d6677',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  rejectedHokim: {
    color: '#D8000C',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#FFD2D2',
    width: '90%',
    padding: 17,
    borderRadius: 5,
  },
});
