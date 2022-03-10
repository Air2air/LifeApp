import { View, StyleSheet, Text } from 'react-native';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const Header = ({ route }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <PressableOpacity
          accessible={true}
          accessibilityLabel="Go Back"
          activeOpacity={0.5}
          style={styles.backButtonWrapper}
          onPress={() => {
            handleBack;
          }}
        >
         <Text>{route} Route </Text>
          <FontAwesome
            size={30}
            name="chevron-left"
            style={styles.backButton}
          />
        </PressableOpacity>
      </View>
    </>
  );
};

const headerHeight = 60;

const styles = StyleSheet.create({
  container: {
    height: headerHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 0,
  },
  backButtonWrapper: {
    height: headerHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    //backgroundColor: '#ffcc00',
  },
  logo: {
    height: headerHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    //backgroundColor: 'gold',
  },
});
