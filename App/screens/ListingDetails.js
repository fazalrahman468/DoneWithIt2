import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../components/apptext/AppText';
import colors from '../config/colors';
import ListItem from './ListItem';

export default function ListingDetails() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailCont}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userCont}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailCont: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 500,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userCont: {
    marginVertical: 40,
  },
});
