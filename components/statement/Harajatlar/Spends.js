import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import Table from './Table';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PhysicalPerson from './PhysicalPerson';
import LegalEntity from './LegalEntity';
import {Snackbar} from 'react-native-paper';

const Spends = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [typeId, setTypeId] = useState();
  const [davr, setDavr] = useState();
  const [davroy, setDavroy] = useState();
  const [previligios, setPreviligios] = useState();
  const [selectedName, setSelectedName] = useState();
  const [selectedDimension, setSelectedDimension] = useState();
  const [dastur, setDastur] = useState();
  const [farm, setFarm] = useState();
  const [farmer, setFarmer] = useState();
  const [overAll, setOverAll] = useState();
  const [anotherTypes, setAnotherTypes] = useState();
  const [inputFields, setInputFields] = useState([
    {quantity: '', price: '', value: '', spend: '', view: ''},
  ]);
  const [dasturName, setDasturName] = useState();
  const [selectedBank, setSelectedBank] = useState();
  const [selectedItem, setSelectedItem] = useState();

  const workType = [
    {id: 1, type: 'jismoniy shaxs sifatida'},
    {id: 2, type: 'YATT tashkil qilgan holda'},
  ];

  const fermer = [{name: 'ПҚ-54'}, {name: 'ПҚ-55'}];

  const onDismissSnackBar = () => setVisible(false);

  let inputFieldsCheck = true;

  inputFields.map(element => {
    if (
      element.quantity == '' ||
      element.price == '' ||
      element.spend == '' ||
      element.view == ''
    ) {
      inputFieldsCheck = false;
    }
  });

  const handleSubmit = () => {
    // if (
    //   !inputFieldsCheck ||
    //   (selectedName === 'Бошқа' && !anotherTypes) ||
    //   (selectedName === 'Нақд пул(5 000 000)' && !anotherTypes) ||
    //   (typeId === 1 &&
    //     (!previligios ||
    //       !selectedDimension ||
    //       (dastur ===
    //         'Фермер, деҳқон хўжаликлари ва томорқа ер эгаларини қўллаб-қувватлаш жамғармаси' &&
    //         !farm)) &&
    //     typeId === 2 &&
    //     (!davroy ||
    //       !selectedBank ||
    //       !dasturName ||
    //       (selectedItem ===
    //         'Фермер, деҳқон хўжаликлари ва томорқа ер эгаларини қўллаб-қувватлаш жамғармаси' &&
    //         !farmer)))
    // ) {
    //   setMessage('Майдонларни тўғри тўлдирилганини текширинг !');
    //   setVisible(true);
    // } else {
    navigation.navigate('Increments');
    // }
  };

  return (
    <>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
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
              <View style={styles.label}></View>
              <Text style={styles.labelText}>Daromadlar</Text>
            </View>
            <View>
              <View style={styles.label}></View>
              <Text style={styles.labelText}>Natija</Text>
            </View>
          </View>
          <Text style={styles.naming}>faoliyat yo'nalishi:</Text>
          {/* <Form /> */}
          <View style={styles.container}>
            <SelectDropdown
              data={workType}
              onSelect={selectedItem => {
                setTypeId(selectedItem.id);
                return selectedItem;
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.type;
              }}
              rowTextForSelection={item => item.type}
              defaultButtonText={'Tanlash'}
              buttonStyle={{backgroundColor: 'transparent', width: '95%'}}
              buttonTextStyle={{fontFamily: 'Montserrat-Medium'}}
              selectedRowStyle={{backgroundColor: '#999'}}
              dropdownStyle={{height: '40%'}}
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
          {typeId === 1 ? (
            <PhysicalPerson
              setPrev={setPreviligios}
              setDavr={setDavr}
              davr={davr}
              setDastur={setDastur}
              dastur={dastur}
              fermer={fermer}
              setFarm={setFarm}
            />
          ) : (
            ''
          )}
          {typeId === 2 ? (
            <LegalEntity
              setDavroy={setDavroy}
              davroy={davroy}
              setDastur={setDastur}
              dastur={dastur}
              fermer={fermer}
              setFarm={setFarmer}
              setDasturName={setDasturName}
              dasturName={dasturName}
              setSelectedBank={setSelectedBank}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ) : (
            ''
          )}
        </View>
        {davroy !== undefined || davr !== undefined ? (
          <Table
            setSelectedName={setSelectedName}
            selectedName={selectedName}
            setSelectedDimension={setSelectedDimension}
            setOverAll={setOverAll}
            setAnotherTypes={setAnotherTypes}
            setInputFields={setInputFields}
            inputFields={inputFields}
          />
        ) : (
          ''
        )}
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
      {message ? (
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={5000}
          action={{
            label: 'Yopish',
          }}>
          {message}
        </Snackbar>
      ) : (
        ''
      )}
    </>
  );
};

export default Spends;

const styles = StyleSheet.create({
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
  },
  container: {
    borderWidth: 2,
    borderColor: '#E6EAED',
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    margin: 5,
  },
  naming: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    marginBottom: 4,
  },
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
});
