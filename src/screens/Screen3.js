import { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { BgColorContext } from '..';
import { ListItem } from '../components/ListItem';

function Screen3({ navigation }) {
  const bgColor = useContext(BgColorContext);
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
        data={data}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            members={item.members.toLocaleString()}
            linkTo={nextScreen}
            navigation={navigation}
          />
        )}
        style={[styles.flatlist, { backgroundColor: bgColor }]}
        keyExtractor={(item, index) => index}
      />
    </>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    // marginTop: '15%',
  },
});
export default Screen3;
