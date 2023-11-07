import {View, Text, TextInput, StyleSheet, Image, Platform} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import Icon from './Icon';

export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.cont}>
      {icon && icon}
      <TextInput
        style={defaultStyles.text}
        {...otherProps}
        placeholderTextColor="#0c0c0c"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cont: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
});
