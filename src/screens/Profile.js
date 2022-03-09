import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { ListItem } from '../components/ListItem';

function Profile({ navigation }) {
  const userData = [
    {
      profile: {
        id: 35245,
        handle: 'DoodlePants',
        nameFirst: 'Camille',
        nameLast: 'Dunning',
        interests: [
          {
            id: 4523,
            name: 'Surfing',
            members: 453,
          },
          {
            id: 845,
            name: 'Volkswagen Beetle',
            members: 9355,
          },
          {
            id: 98658,
            name: 'Modernism',
            members: 2414,
          },
          {
            id: 6533,
            name: 'Data Science',
            members: 3297,
          },
          {
            id: 4,
            name: 'Alfa Romeo',
            members: 7845,
          },
          {
            id: 5,
            name: 'Hamburgers',
            members: 54252,
          },
        ],
      },
    },
  ];

  return (
    <>
    <Text>Profile</Text>
      <FlatList
        style={styles.flatlist}
        data={userData.interests}
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

export default Profile;
