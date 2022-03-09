import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ListItem } from '../components/ListItem';

function Screen3({ navigation }) {
  const nextScreen = 'Screen1';
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
      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            members={item.members.toLocaleString()}
            linkTo={nextScreen}
            navigation={navigation}
          />
        )}s
        keyExtractor={(item, index) => index}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flatlist: {
    marginTop: '15%',
  },
});

export default Screen3;
