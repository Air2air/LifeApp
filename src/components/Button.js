import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export const Button = props => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  const clickHandler = () => {
    setTimesPressed(current => current + 1);
  };

  return (
    <Pressable
      onPress={() => {
        clickHandler();
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.wrapper,
      ]}
    >
      {({ pressed }) => (
        <Text style={styles.text}>
          {pressed ? 'Pressed!' : 'Press Me'} {textLog}
        </Text>
      )}
    </Pressable>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const listItemHeight = windowHeight / 5.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'stretch',
    // justifyContent: 'space-evenly',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f9c2ff',
  },
  listitem: {
    height: listItemHeight,
    margin: 5,
    backgroundColor: 'gold',
  },
  member: {
    fontSize: 32,
  },
});