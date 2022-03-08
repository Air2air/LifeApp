import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const HomeScreen = () => {
  const [dataSource, setDataSource] = useState(LEVEL_1);

  const renderItem = ({ item }) => <Item name={item.name} />;

  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f9c2ff',
  },
  item: {
    padding: 20,
  },
  name: {
    fontSize: 32,
  },
});

export default HomeScreen;

const LEVEL_1 = [
  {
    name: 'Modernism',
    members: 1452,
  },
  {
    name: 'Surfing',
    members: 51453,
  },
  {
    name: 'Data Science',
    members: 3297,
  },
  {
    name: 'Alfa Romeo',
    members: 7845,
  },
  {
    name: 'Hamburgers',
    members: 54252,
  },
];

const LEVEL_2 = [
  {
    name: 'Alfa Romeo',
    members: 7845,
  },
  {
    name: 'Hamburgers',
    members: 54252,
  },
  {
    name: 'Modernism',
    members: 1452,
  },
  {
    name: 'Surfing',
    members: 51453,
  },
  {
    name: 'Data Science',
    members: 3297,
  },
];
