import React, { useEffect, useState, createContext, useContext } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const ListItem = ({ navigation, linkTo, name, members, bgColor }) => {
  const clickHandler = () => {
    navigation.navigate(linkTo);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.container, { backgroundColor: bgColor }]}
        onPress={() => clickHandler()}
      >
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.members}>{members}</Text>
      </TouchableOpacity>
    </>
  );
};

const numListItems = 9;
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
    fontFamily: 'Inter_300Light',
    color: '#FFFFFF',
    fontSize: 28,
  },
  members: {
    width: 'auto',
    height: pillHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    lineHeight: pillHeight,
    fontFamily: 'Inter_500Medium',
    color: '#FFF',
    backgroundColor: '#0002',
    borderRadius: pillHeight / 2,
    overflow: 'hidden',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
