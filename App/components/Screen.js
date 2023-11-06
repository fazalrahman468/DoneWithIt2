import {StatusBar, SafeAreaView, Platform, StyleSheet} from 'react-native';
import React from 'react';

export default function Screen({children}) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
