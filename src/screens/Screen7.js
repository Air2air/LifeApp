import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ListItem } from '../components/ListItem';

function Screen7({ navigation }) {
  const nextScreen = 'HomeScreen';
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
      <SafeAreaView
        style={[styles.container, { backgroundColor: generateColor() }]}
      >
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
          )}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    </>
  );
}

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

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

export default Screen7;
