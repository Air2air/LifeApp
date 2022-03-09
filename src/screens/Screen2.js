import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ListItem } from '../components/ListItem';

function Screen2({ navigation }) {
  const nextScreen = 'Screen3';
  const data = [
    {
      id: 2,
      name: 'Eichler Homes',
      members: 3297,
    },
    {
      id: 3,
      name: 'Case Study Houses',
      members: 7845,
    },
    {
      id: 0,
      name: 'Modernism',
      members: 1452,
    },
    {
      id: 1,
      name: 'Post-modernism',
      members: 31453,
    },

    {
      id: 4,
      name: 'Le Corbusier ',
      members: 54252,
    },
    {
      id: 5,
      name: 'Corgis',
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
        )}
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

export default Screen2;
