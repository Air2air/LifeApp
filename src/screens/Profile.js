import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
// import { View } from 'react-native-animatable';
import { ListItem } from '../components/ListItem';

function Profile(props) {
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
      <FlatList
        data={userData}
        renderItem={({ item }) => <Text>{item.profile.handle}</Text>}
        keyExtractor={item => item.profile.id}
      />

      <FlatList
        data={userData}
        renderItem={({ item }) => (
          <ListItem
            navigation={props.navigation}
            linkTo="Profile"
            name={item.profile.handle}
            members={item.profile.nameFirst}
            interests={item.profile.interests}
            bgColor={'#F5F5F5'}
          />
        )}
        keyExtractor={item => item.profile.id}
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
