import { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { BgColorContext } from '..';
import { TextItem } from '../components/TextItem';
import { ListItem } from '../components/ListItem';

function Profile(props) {
  const bgColor = useContext(BgColorContext);

  const userData = [
    {
      profile: {
        id: 35245,
        handle: 'DoodlePants',
        nameFirst: 'Camille',
        nameLast: 'Dunning',
        email: 'silly@silly.com',
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
        renderItem={({ item }) => (
          <>
            <TextItem label="Handle" value={item.profile.handle} />
            <TextItem label="First" value={item.profile.nameFirst} />
            <TextItem label="Last" value={item.profile.nameLast} />
            <TextItem label="Email" value={item.profile.email} />
          </>
        )}
        contentContainerstyle={styles.container}
        style={{ backgroundColor: bgColor }}
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
    color: '#fff',
  },
});

export default Profile;
