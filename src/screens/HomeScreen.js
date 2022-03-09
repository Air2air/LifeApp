import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  SectionList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ListItem } from '../components/ListItem';

const HomeScreen = () => {
  const data = [
    {
      id: 0,
      name: 'Modernism',
      members: 1452,
    },
    {
      id: 1,
      name: 'Surfing',
      members: 31453,
    },
    {
      id: 2,
      name: 'Data Science',
      members: 3297,
    },
    {
      id: 3,
      name: 'Alfa Romeo',
      members: 7845,
    },
    {
      id: 4,
      name: 'Volkswagen Beetle',
      members: 54252,
    },
    {
      id: 5,
      name: 'French Bulldogs',
      members: 19538,
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem name={item.name} members={item.members} />
          )}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f9c2ff',
  },
});

export default HomeScreen;
