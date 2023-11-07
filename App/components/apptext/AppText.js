import {View, Text} from 'react-native';
import React from 'react';
import defaultStyles from '../../config/styles';
import styles from './styles';

export default function AppText({children, style}) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
