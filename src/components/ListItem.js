import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  SectionList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const ListItem = props => {
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
          backgroundColor: pressed ? 'rgba(255, 255, 255, 0.2)' : 'none',
        },
        styles.container,
      ]}
    >
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.members}>{props.members}</Text>
    </Pressable>
  );
};

const numListItems = 6.8;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const marginX = windowWidth / 40;
const marginY = windowHeight / 60;
const singleItemHeight = windowHeight - marginY * 2;
const singleItemWidth = windowWidth - marginX * 2;
const listItemHeight = singleItemHeight / numListItems;
const listItemWidth = singleItemWidth;

const pillHeight = 30;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: listItemHeight,
    width: listItemWidth,
    padding: 20,
    marginLeft: marginX,
    marginRight: marginX,
    marginTop: marginY,
  },
  name: {
    fontSize: 24,
  },
  members: {
    width: 'auto',
    height: pillHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    lineHeight: pillHeight,
    color: '#FFF',
    backgroundColor: '#00000055',
    borderRadius: pillHeight / 2,
    overflow: 'hidden',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
