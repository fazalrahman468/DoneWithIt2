import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Image style={styles.close} source={require('../assets/close.png')} />
      </View>
      <View style={styles.deleteIcon}>
        <Image style={styles.delete} source={require('../assets/delete.png')} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  close: {
    height: 20,
    width: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  delete: {
    height: 20,
    width: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    height: '100%',
    width: '100',
  },
});
