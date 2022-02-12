import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Button } from './Button';
import { useNavigation } from '@react-navigation/native';

export const NextPrevious = props => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.nextPreviousWrapper}>
      <Button
        arrowDirection="left"
        buttonText={props.buttonPreviousText}
        onPress={() => navigation.navigate(props.buttonPreviousLink)}
        type={props.type}
      />
      <Button
        arrowDirection="right"
        buttonText={props.buttonNextText}
        onPress={() => navigation.navigate(props.buttonNextLink)}
        type={props.type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nextPreviousWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.BUTTON_HEIGHT,
    width: '100%',
    paddingHorizontal: 15,
    //backgroundColor: Colors.SKY,
  },
});
