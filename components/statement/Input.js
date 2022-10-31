import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

export const Input = props => {
  return (
    <>
      <TextInputMask
        {...props}
        keyboardType="number-pad"
        returnKeyType="done"
        mask={!props?.mask ? '' : props.mask}
        onChange={e => props.handleChange(e.nativeEvent.text)}
        value={props.value}
        style={styles.input}
        placeholderTextColor="#9a9a9a"
      />
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#E6EAED',
    borderRadius: 5,
    fontFamily: 'Montserrat-SemiBold',
    color: '#56678f',
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
  },
});
