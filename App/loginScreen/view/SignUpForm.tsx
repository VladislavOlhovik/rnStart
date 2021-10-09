import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import {AuthStore} from '../../shared/store';
import {_AuthStore} from '../../shared/store/auth_store';
import {observer} from 'mobx-react';
import {ETypeButton, IFormData} from '../../shared/store/auth_store/type';

export const SignUpForm = observer(() => {
  const {
    createNewUser,
    singInUser,
    data: {isFetchLoading, isFetchError, messageError},
  }: _AuthStore = AuthStore;
  if (isFetchError) {
    Alert.alert('Error', messageError);
  }
  if (isFetchLoading) {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text>My APP</Text>
      <Formik
        initialValues={{email: '', password: '', type: ETypeButton.undefined}}
        onSubmit={({email, password, type}: IFormData) => {
          switch (type) {
            case ETypeButton.SignUp: {
              createNewUser({email, password});
              return;
            }
            case ETypeButton.SignIn: {
              singInUser({email, password});
              return;
            }
          }
        }}>
        {({handleChange, setFieldValue, handleSubmit, values}) => (
          <View style={{width: 300}}>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
            />
            <Button
              onPress={() => {
                setFieldValue('type', ETypeButton.SignUp);
                handleSubmit();
              }}
              title="Sign Up"
            />
            <View style={{paddingTop: 10}}>
              <Button
                color={'green'}
                onPress={() => {
                  setFieldValue('type', ETypeButton.SignIn);
                  handleSubmit();
                }}
                title="Sign In"
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
