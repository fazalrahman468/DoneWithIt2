import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Screen from './App/components/Screen';
import AppTextInput from './App/components/AppTextInput';
import Icon from './App/components/Icon';
import {Switch} from 'react-native';
import AppPicker from './App/components/AppPicker';
import colors from './App/config/colors';
import Login from './App/screens/Login';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Login />
    </GestureHandlerRootView>
  );
}
