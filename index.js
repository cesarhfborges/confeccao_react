import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './src/app/Routes';
import LoginScreen from './src/app/pages/LoginScreen';
import theme from './src/assets/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

AppRegistry.registerComponent(appName, () => App);
