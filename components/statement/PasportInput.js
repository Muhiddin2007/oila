import React from 'react';
import {StyleSheet} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import {useDispatch, useSelector} from 'react-redux';
import {setPasport, setSeries, setNumber} from '../../features/counterSlice';

export const Input = props => {
  const dispatch = useDispatch();
  const handleChange = passport => {
    const passport_series = passport.substring(0, 2).toUpperCase();
    const passport_number = passport.substring(2);
    dispatch(setPasport(passport_series + passport_number));
    dispatch(setSeries(passport_series));
    dispatch(setNumber(passport_number));
  };
  const pasport = useSelector(state => state.credit.pasport);

  return (
    <>
      <TextInputMask
        {...props}
        returnKeyType="done"
        mask={!props?.mask ? '' : props.mask}
        style={styles.input}
        placeholderTextColor="#9a9a9a"
        onChangeText={passport => handleChange(passport)}
        value={pasport}
      />
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 38,
    borderWidth: 1,
    borderColor: '#E6EAED',
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#56678f',
    width: '100%',
  },
});
