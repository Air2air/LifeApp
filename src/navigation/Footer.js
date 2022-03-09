import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

const footerNavigation = [
  { id: 0, name: 'Home', linkTo: 'Screen1', icon: 'home' },
  { id: 1, name: 'Profile', linkTo: 'Profile', icon: 'user' },
  { id: 2, name: 'Settings', linkTo: 'Settings', icon: 'settings' },
];

export const Footer = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      {footerNavigation.map(item => (
        <Pressable
          key={item.id}
          accessible={true}
          accessibilityLabel={item.name}
          onPress={() => [
            setSelected(item.id),
            navigation.navigate(item.linkTo),
          ]}
          style={styles.iconButton}
        >
          {selected === item.id ? (
            <Feather name={item.icon} size={34} color={iconColorSelected} />
          ) : (
            <Feather name={item.icon} size={34} color={iconColorDefault} />
          )}
        </Pressable>
      ))}
    </View>
  );
};

const FOOTER_HEIGHT = 60;
const iconColorDefault = '#fff7';
const iconColorSelected = '#fff';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: FOOTER_HEIGHT,
    width: '100%',
    //backgroundColor: 'red',
  },
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: FOOTER_HEIGHT,
    width: 100,
    //backgroundColor: 'gold',
  },

  label: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',

    //backgroundColor: 'green',
  },
});
