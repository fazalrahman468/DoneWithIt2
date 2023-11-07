import {View, Text, Image} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function Icon({size = 40, source, backgroundColor = '#fff'}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={source} style={{width: size * 0.5, height: size * 0.5}} />
    </View>
  );
}
