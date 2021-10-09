import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {_AuthStore, AuthStore} from '../../shared/store/auth_store';
import {observer} from 'mobx-react';

export const HomePage = observer(() => {
  const {
    signOutUser,
    data: {user, isFetchError, isFetchLoading, messageError},
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
      <View>
        <Text
          style={{
            fontSize: 20,
          }}>
          {user.isNewUser
            ? `Welcome, You create a new profile ${user.email}`
            : `Hello - ${user.email}`}
        </Text>
        <Button title={'Logout'} onPress={() => signOutUser()} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
