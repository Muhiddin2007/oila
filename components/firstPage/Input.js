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
        placeholderTextColor="rgba(255, 255, 255, 0.24)"
      />
    </>
  );
};
const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    width: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
});
