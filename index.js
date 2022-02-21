import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './src/app/Routes';
import LoginScreen from './src/app/pages/LoginScreen';
import theme from './src/assets/theme';
import configureStore from './src/app/shared/redux/store/configureStore';

const Stack = createNativeStackNavigator();
const store = configureStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Root"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Root"
              options={{title: 'Home'}}
              component={Routes}
            />
            <Stack.Screen
              name="Login"
              options={{title: 'Login'}}
              component={LoginScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
