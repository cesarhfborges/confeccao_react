/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry, View} from 'react-native';
import * as React from 'react';
import {name as appName} from './app.json';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
  Text,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/app/pages/HomeScreen';
import Header from './src/app/components/Header';
import ClientesLista from './src/app/pages/ClientesListaScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    customColor: '#BADA55',
  },
  fonts: {
    ...DefaultTheme.fonts,
    superLight: {...DefaultTheme.fonts.light},
  },
  userDefinedThemeProperty: '',
  animation: {
    ...DefaultTheme.animation,
    customProperty: 1,
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{header: Header}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{header: Header}}
            name="Clientes"
            component={ClientesLista}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
