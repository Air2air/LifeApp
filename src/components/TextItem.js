import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const TextItem = props => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{props.label}:</Text>
        <Text style={styles.value}>{props.value}</Text>
      </View>
    </>
  );
};

const numTextItems = 9;
const marginX = 10;
const marginY = 5;
const textItemHeight = 40;
const textItemWidth = 'auto';

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: textItemHeight,
    width: textItemWidth,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: marginX,
    marginRight: marginX,
    marginTop: marginY,
    color: '#fff',
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
    height: textItemHeight,
    fontFamily: 'Inter_500Medium',
    textTransform: 'uppercase',
    lineHeight: textItemHeight,
    textAlign: 'right',
    width: 100,
    fontSize: 14,
    color: '#fff',
    // backgroundColor: 'red',
  },
  value: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: textItemHeight,
    fontFamily: 'Inter_300Light',
    lineHeight: textItemHeight,
    minWidth: 100,
    fontSize: 24,
    color: '#fff',
    // backgroundColor: 'red',
  },
});
