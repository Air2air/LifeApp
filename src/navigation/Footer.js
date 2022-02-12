import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Footer = () => {
  const { colors } = useTheme();

  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: colors.headerFooter }]}>
      <Pressable
        accessible={true}
        accessibilityLabel="Home"
        accessibilityHint="Click to go to the Home screen"
        onPress={() => [setSelected(1), navigation.navigate('HomeScreen')]}
        style={styles.iconButton}
      >
        {selected === 1 ? (
          <>
            <Text style={[styles.label, { color: colors.iconSelected }]}>
              myTrio
            </Text>
          </>
        ) : (
          <>
            <Text style={[styles.label, { color: colors.icon }]}>myTrio</Text>
          </>
        )}
      </Pressable>

      <Pressable
        accessible={true}
        accessibilityLabel="Insights"
        accessibilityHint="Click to go to the Insights screen"
        onPress={() => [setSelected(2), navigation.navigate('InsightsScreen')]}
        style={styles.iconButton}
      >
        {selected === 2 ? (
          <>
            <Text style={[styles.label, { color: colors.iconSelected }]}>
              Insights
            </Text>
          </>
        ) : (
          <>
            <Text style={[styles.label, { color: colors.icon }]}>Insights</Text>
          </>
        )}
      </Pressable>

      <Pressable
        accessible={true}
        accessibilityLabel="Support"
        accessibilityHint="Click to go to the Support screen"
        onPress={() => [setSelected(3), navigation.navigate('SupportScreen')]}
        style={styles.iconButton}
      >
        {selected === 3 ? (
          <>
            <Text style={[styles.label, { color: colors.iconSelected }]}>
              Support
            </Text>
          </>
        ) : (
          <>
            <Text style={[styles.label, { color: colors.icon }]}>Support</Text>
          </>
        )}
      </Pressable>

      <Pressable
        accessible={true}
        accessibilityLabel="Device"
        accessibilityHint="Click to go to the Device screen"
        onPress={() => [setSelected(4), navigation.navigate('DeviceScreen')]}
        style={styles.iconButton}
      >
        {selected === 4 ? (
          <>
            <Text style={[styles.label, { color: colors.iconSelected }]}>
              Device
            </Text>
          </>
        ) : (
          <>
            <Text style={[styles.label, { color: colors.icon }]}>Device</Text>
          </>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: Dimensions.FOOTER_HEIGHT,
    width: '100%',
    //backgroundColor: 'red',
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.FOOTER_HEIGHT,
    width: 100,
    //backgroundColor: 'gold',
  },
  icon: {
    height: 22,
    width: 24,
    //backgroundColor: 'lightblue',
  },
  label: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.FONT_FACE_BUTTON,
    fontSize: Fonts.FONT_SIZE_BUTTON * 0.9,
    //backgroundColor: 'green',
  },
});
