import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from './ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
  {
    id: 1,
    title: 'T1',
    des: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    des: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

export default function Messages() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.des}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
