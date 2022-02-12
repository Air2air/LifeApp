import { StyleSheet } from 'react-native';
import './../constants';

const screenStyles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flex: 1,
    // alignItems: 'center',
    // backgroundColor: Colors.WHITE,
    // padding: 0,
  },

  title: {
    fontFamily: Fonts.FONT_FACE_TITLE,
        fontSize: Fonts.FONT_SIZE_TITLE,
    color: Colors.NAVY,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontFamily: Fonts.FONT_FACE_DESCRIPTION,
    fontSize: Fonts.FONT_SIZE_CAPTION,
    color: Colors.NAVY,
    textAlign: 'center',
    lineHeight: 30,
  },
  info: {
    fontFamily: Fonts.FONT_FACE_DESCRIPTION,
    fontSize: Fonts.FONT_SIZE_DESCRIPTION,
    color: Colors.NAVY,
    marginBottom: 20,
    lineHeight: 24,
  },
});

export default screenStyles;
