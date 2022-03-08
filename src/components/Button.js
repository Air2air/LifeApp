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
        styles.buttonWrapper,
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

const buttonSize = 64;

const styles = StyleSheet.create({
  buttonWrapper: {
    height: buttonSize,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
});
