import { View, StyleSheet } from 'react-native';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { Avatar } from '../components/Avatar';
import { FontAwesome } from '@expo/vector-icons';
import LogoTrio from '../../assets/images/js/logo_trio';
import '../constants';

export const Header = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <>
      <View
        style={[styles.container, { backgroundColor: colors.headerFooter }]}
      >
        <PressableOpacity
          accessible={true}
          accessibilityLabel="Go Back"
          accessibilityHint="Click to go to the previous screen"
          activeOpacity={0.5}
          style={styles.backButtonWrapper}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome
            size={30}
            name="chevron-left"
            style={[styles.backButton, { color: Colors.LOGO_BLUE }]}
          />
        </PressableOpacity>
        <PressableOpacity
          accessible={true}
          accessibilityLabel="Home"
          accessibilityHint="Click to go to the Home screen"
          activeOpacity={0.5}
          style={styles.logoTrio}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <LogoTrio style={styles.logoImage} />
        </PressableOpacity>
        <PressableOpacity
          accessible={true}
          accessibilityLabel="My Profile"
          accessibilityHint="Click to go to my user profile"
          activeOpacity={0.5}
          style={styles.avatarWrapper}
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Avatar />
        </PressableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.HEADER_HEIGHT,
    width: '100%',
    padding: 0,
  },
  backButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //height: Dimensions.HEADER_HEIGHT,
    width: 100,
    //backgroundColor: '#ffcc00',
  },
  logoTrio: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    height: Dimensions.HEADER_HEIGHT,
    width: 80,
    //backgroundColor: 'gold',
  },
  avatarWrapper: {
    //display: 'flex',
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //height: Dimensions.HEADER_HEIGHT,
    width: 100,
    //backgroundColor: '#ffcc00',
  },
});
