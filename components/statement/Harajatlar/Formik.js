import {StyleSheet, Text, TextInput, Button} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';

const Form = () => {
  const loginValidationSchema = yup.object().shape({
    password: yup.number().min(1).required('Пароль обязателен'),
  });

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{password: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <>
          <TextInput
            style={styles.textInput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            keyboardType="numeric"
          />
          {errors.password && (
            <Text style={{fontSize: 16, color: 'red'}}>{errors.password}</Text>
          )}
          <Button
            onPress={handleSubmit}
            title="Tasdiqlash"
            disabled={!isValid}
          />
        </>
      )}
    </Formik>
  );
};

export default Form;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '90%',
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
  },
});
