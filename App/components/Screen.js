import {
  StatusBar,
  SafeAreaView,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    height: '100%',

    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
