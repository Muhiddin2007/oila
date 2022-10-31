import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Input} from './Input';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {banks} from '../data/mainData';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="+998 78 777 84 84"
        onPress={() => Linking.openURL('tel:+998 78 777 84 84')}
        icon={() => <Image source={require('../../assets/images/call.png')} />}
      />
      <DrawerItem
        label="Telegram"
        onPress={() => Linking.openURL('https://t.me/rsspone')}
        icon={() => (
          <Image source={require('../../assets/images/TelegramIcon.png')} />
        )}
      />
    </DrawerContentScrollView>
  );
}

const Contact = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [theme, setTheme] = React.useState('');
  const [report, setReport] = React.useState('');
  const [isOpened, setIsOpened] = React.useState(false);

  const isBigDevice = Dimensions.get('window').width > 768;

  const checkTextInput = () => {
    if (name === '') {
      Alert.alert('Xatolik', 'Ismingizni kiriting');
      return;
    }
    if (message == 'Email is Not Correct') {
      Alert.alert('Xatolik', 'Emailingiz noto‘g‘ri kiritilgan');
      return;
    }
    if (phoneNumber.length < 19) {
      Alert.alert('Xatolik', 'Raqamingizni noto‘g‘ri kiritilgan');
      return;
    }
    if (theme === '') {
      Alert.alert('Xatolik', 'Mavzu kiritilmagan');
      return;
    }
    if (report === '') {
      Alert.alert('Xatolik', 'Xabar matni kiritilmagan');
      return;
    }
    Alert.alert(
      'Arizangiz muvaffaqiyatli jo’natildi',
      'Tez orada bizning xodimlarimiz siz bilan bog’lanishadi',
    );
  };

  const validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setMessage('Email is Not Correct');
      setEmail({email: text});
      return false;
    } else {
      setEmail({email: text});
      setMessage('Emailingzi noto’g’ri');
    }
  };
  const themes = [
    '"Har bir oila - tadbirkor" dasturi',
    "Xotin-qizlar tadbirkorligini qo'llab-quvatlash",
    'Hunarmadchilikni rivojlantirish dasturi',
    "Yoshlar tadbirkoligini qo'llab-quvatlash",
    'Boshqa masala',
  ];

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('OilaKredit')}>
          <Image
            source={require('../../assets/images/header.png')}
            style={{width: 150, height: 35}}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Octicons
              name={'three-bars'}
              size={34}
              color="#324352"
              style={styles.menu}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center', backgroundColor: '#324352'}}>
          <View style={styles.you}>
            <Text style={styles.youHeading}>
              Sizni qiziqtirgan savollaringiz bormi?
            </Text>
            <Text style={styles.youText}>
              Biz sizga tezkor javob berishga harakat qilamiz
            </Text>
          </View>
          <View style={styles.social}>
            <View style={styles.form}>
              <Image
                source={require('../../assets/images/telegram.png')}
                style={styles.img}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:+998 (99) 151-84-84`)}>
                <Text style={styles.formHeading}>+998 (99) 151-84-84</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.social}>
            <View style={styles.form}>
              <Image
                source={require('../../assets/images/email.png')}
                style={styles.img}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'mailto:info@oilakredit.uz?subject=SendMail&body=Description',
                )
              }>
              <Text style={styles.formHeading}>info@oilakredit.uz</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textInput}>
            <Text style={styles.inputName}>Ismingiz</Text>
            <TextInput
              style={styles.input}
              placeholder="Ismingiz"
              placeholderTextColor={'rgba(255, 255, 255, 0.24)'}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.inputName}>Emailingiz</Text>
            <TextInput
              placeholder="example@gmail.com"
              onChangeText={text => validate(text)}
              style={styles.input}
              placeholderTextColor={'rgba(255, 255, 255, 0.24)'}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.inputName}>Raqamingiz</Text>
            <Input
              headerPlaceholder="Raqamingizni kiriting"
              handleChange={value => setPhoneNumber(value)}
              inputKey="mask"
              mask="+998 ([00]) [000] [00] [00]"
              placeholder="+998 (00) 000 00 00"
              maxLength={20}
              defaultValue={phoneNumber ? phoneNumber?.toString() : ''}
            />
          </View>
          <Text style={styles.inputName}>Mavzu</Text>
          <View style={styles.select}>
            <SelectDropdown
              data={themes}
              onSelect={selectedItem => {
                setTheme(selectedItem);
                return selectedItem;
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem;
              }}
              rowTextForSelection={item => item}
              defaultButtonText={'Tanlash'}
              buttonStyle={{
                backgroundColor: 'transparent',
                width: '99%',
                color: '#fff',
              }}
              buttonTextStyle={{
                fontFamily: 'Montserrat-Medium',
                color: '#fff',
              }}
              selectedRowStyle={{backgroundColor: 'rgba(255, 255, 255, 0.24)'}}
              rowTextStyle={{
                fontFamily: 'Montserrat-Medium',
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#999'}
                    size={18}
                  />
                );
              }}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.inputName}>Xabar Matni</Text>
            <TextInput
              placeholder="Kiriting"
              style={styles.message}
              placeholderTextColor={'rgba(255, 255, 255, 0.24)'}
              multiline
              onChangeText={text => setReport(text)}
            />
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={checkTextInput}>
            <Text style={styles.sendText}>Xabarni jo'natish</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dastur}>
          <Text style={styles.dasturHeading}>
            Dasturda qatnashuvchi tijorat banklari
          </Text>
          <View style={styles.dasturList}>
            <View style={styles.dasturFirstItem}>
              <Text style={styles.dasturFirstText}>BANK NOMI</Text>
              <Text style={styles.dasturFirstText}>Telefon</Text>
              <Text style={styles.dasturFirstText}>EMAIL</Text>
              <Text style={styles.dasturFirstText}>WEB SAYT</Text>
            </View>
            <View style={styles.dasturItem}>
              <Text style={styles.dasturText}>Xalq banki </Text>
              <Text style={styles.dasturText}>998 71 210 20 02</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL(`mailto:info@xb.uz`)}>
                <Text style={styles.dasturText}>info@xb.uz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://oilakredit.uz/public/pages/www.xb.uz`,
                  )
                }>
                <Text style={styles.dasturText}>www.xb.uz</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dasturSecondItem}>
            <Text style={styles.dasturText}>Mikrokreditbank</Text>
            <Text style={styles.dasturText}>998 71 207 46 52</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`mailto:info@mikrokreditbank.uz`)}>
              <Text style={styles.dasturText}>info@mikrokreditbank.uz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`https://oilakredit.uz/public/pages/www.xb.uz`)
              }>
              <Text style={styles.dasturText}>www.mikrokreditbank.uz</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dasturItem}>
            <Text style={styles.dasturText}>Agrobank</Text>
            <Text style={styles.dasturText}>998 71 203 88 88</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`mailto:info@agrobank.uz`)}>
              <Text style={styles.dasturText}>info@agrobank.uz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`https://oilakredit.uz/public/pages/www.xb.uz`)
              }>
              <Text style={styles.dasturText}>www.agrobank.uz</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.dasturHeading}>
          Hududlardagi hokimlik va tijorat banklarining Call markaz raqamlari
        </Text>
        <View style={[styles.sm, isBigDevice && styles.md]}>
          {banks.map((bank, index) => (
            <Collapse
              key={index}
              onToggle={() => {
                isOpened === index ? setIsOpened(null) : setIsOpened(index);
              }}
              style={{alignItems: 'center'}}>
              <CollapseHeader>
                <View style={[styles.container, isBigDevice && styles.cardmd]}>
                  <Text style={styles.name}>{bank.name}</Text>
                  <FontAwesome
                    name={isOpened === index ? 'chevron-up' : 'chevron-down'}
                    color={'#00C695'}
                    size={18}
                  />
                </View>
              </CollapseHeader>
              {isOpened != index ? (
                ''
              ) : (
                <CollapseBody>
                  <View style={styles.dasturList}>
                    <View style={styles.dasturName}>
                      <Text style={styles.dasturNameText}>{bank.name}</Text>
                      <Text style={styles.dasturNameText}>{bank.phone}</Text>
                      <Text style={styles.dasturNameText}>{bank.email}</Text>
                      <Text style={styles.dasturNameText}>{bank.web}</Text>
                    </View>
                    <View style={styles.dasturSecondItem}>
                      <Text style={styles.dasturText}>Xalq banki </Text>
                      <Text style={styles.dasturText}>998 71 210 20 02</Text>
                      <TouchableOpacity
                        onPress={() => Linking.openURL(`mailto:info@xb.uz`)}>
                        <Text style={styles.dasturText}>info@xb.uz</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            `https://oilakredit.uz/public/pages/www.xb.uz`,
                          )
                        }>
                        <Text style={styles.dasturText}>www.xb.uz</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.dasturSecondItem}>
                    <Text style={styles.dasturText}>Mikrokreditbank</Text>
                    <Text style={styles.dasturText}>998 71 207 46 52</Text>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(`mailto:info@mikrokreditbank.uz`)
                      }>
                      <Text style={styles.dasturText}>
                        info@mikrokreditbank.uz
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          `https://oilakredit.uz/public/pages/www.xb.uz`,
                        )
                      }>
                      <Text style={styles.dasturText}>
                        www.mikrokreditbank.uz
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.dasturSecondItem}>
                    <Text style={styles.dasturText}>Agrobank</Text>
                    <Text style={styles.dasturText}>998 71 203 88 88</Text>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(`mailto:info@agrobank.uz`)
                      }>
                      <Text style={styles.dasturText}>info@agrobank.uz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          `https://oilakredit.uz/public/pages/www.xb.uz`,
                        )
                      }>
                      <Text style={styles.dasturText}>www.agrobank.uz</Text>
                    </TouchableOpacity>
                  </View>
                </CollapseBody>
              )}
            </Collapse>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 25,
    backgroundColor: 'transparent',
    marginTop: 12,
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.23)',
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    margin: 10,
    marginTop: 15,
  },
  youHeading: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  youText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formHeading: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: 22,
  },
  inputName: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    width: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },
  textInput: {
    width: '80%',
    alignItems: 'center',
  },
  select: {
    width: '75%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  message: {
    fontFamily: 'Montserrat-Regular',
    width: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },
  sendButton: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#00C695',
    borderRadius: 10,
    marginTop: 20,
    height: 46,
    justifyContent: 'center',
    marginBottom: 20,
  },
  sendText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
  dastur: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  dasturHeading: {
    fontFamily: 'Montserrat-Bold',
    color: '#324352',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 22,
  },
  dasturList: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  dasturFirstItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 10,
    paddingStart: 10,
    width: '100%',
    backgroundColor: '#324352',
    height: 45,
    alignItems: 'center',
  },
  dasturFirstText: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dasturItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 45,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  dasturText: {
    fontFamily: 'Montserrat-Medium',
    color: '#000',
    textAlign: 'center',
  },
  dasturSecondItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '90%',
    height: 45,
  },
  dasturName: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '100%',
    height: 45,
    backgroundColor: '#EBEBEB',
    marginBottom: 20,
    marginTop: 10,
  },
  dasturNameText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
  },
  sm: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    color: '#324352',
    fontSize: hp('4%'),
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  cardmd: {
    width: '25%',
  },
  container: {
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  collapse: {
    width: wp('90%'),
    backgroundColor: '#fff',
    padding: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
  },
  md: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#5D6677',
    fontFamily: 'Montserrat-Medium',
    width: '80%',
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
});
