import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import ClientesLista from './pages/ClientesListaScreen';
import {IconButton} from 'react-native-paper';
import theme from '../assets/theme';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => (
  <>
    <StatusBar
      barStyle="light-content"
      hidden={false}
      backgroundColor={theme.colors.primary}
      translucent={false}
    />
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.disabled,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <IconButton color={theme.colors.primary} icon="home" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Clientes"
        component={ClientesLista}
        options={{
          tabBarIcon: () => <IconButton icon="home" size={20} />,
        }}
      />
    </Tab.Navigator>
  </>
);

export default Routes;
