import React from 'react';
import {SignUpForm} from './App/loginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from './App/HomeScreen';
import {_AuthStore, AuthStore} from './App/shared/store/auth_store';
import {observer} from 'mobx-react';

const Stack = createNativeStackNavigator();

const App = observer(() => {
  const {
    data: {isLogin},
  }: _AuthStore = AuthStore;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Screen
            name={'Main'}
            options={{headerShown: false}}
            component={HomePage}
          />
        ) : (
          <Stack.Screen
            name={'Auth'}
            options={{headerShown: false}}
            component={SignUpForm}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
