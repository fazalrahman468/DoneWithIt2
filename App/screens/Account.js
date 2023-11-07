import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import ListItem from './ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menyItems = [
  {
    title: 'My Listings',
    image: require('../assets/list.png'),
    backgroundColor: colors.primary,
  },
  {
    title: 'My Messages',
    image: require('../assets/mail.png'),
    backgroundColor: colors.secondary,
  },
];

export default function Account() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.cont}>
        <ListItem
          title="Mosh"
          subTitle="test@test.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.cont}>
        <FlatList
          data={menyItems}
          keyExtractor={menyItem => menyItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  source={item.image}
                  backgroundColor={item.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        ImageComponent={
          <Icon
            source={require('../assets/logout.png')}
            backgroundColor="#ffe66d"
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  cont: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
