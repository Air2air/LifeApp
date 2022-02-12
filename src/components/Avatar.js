import { View, Text, Image, StyleSheet } from 'react-native';

const imageVinay =
  'https://pbs.twimg.com/profile_images/902058190296068096/P3zK1t31_400x400.jpg';

const imagePooja =
  'https://resident360files.nejm.org/image/upload/s--jRwIHJHi--/c_thumb,f_auto,g_face,h_200,q_jpegmini,w_200/v1481210670/user_avatars/83766.jpg';

const userImage = imagePooja;

const userName = 'Pooja Rajguru';
const userInitials = '';

const getInitials = userName => {
  if (userName) {
    const userNames = userName.split(' ');
    return `${userNames[0].charAt(0).toUpperCase()}${userNames[
      userNames.length - 1
    ]
      .charAt(0)
      .toUpperCase()}`;
  }
  return userInitials;
};

export const Avatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarInitials}>
        <Text style={styles.avatarText}>{userInitials}</Text>
      </View>
      <Image source={{ uri: userImage }} style={styles.avatarImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.AVATAR_SIZE,
    width: Dimensions.AVATAR_SIZE,
    borderRadius: Dimensions.AVATAR_SIZE,
    overflow: 'hidden',
    position: 'relative',
   //backgroundColor: 'darkblue',
  },
  avatarInitials: {
    height: Dimensions.AVATAR_SIZE,
    width: Dimensions.AVATAR_SIZE,
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    //backgroundColor: 'green',
  },
  userInitials: {
    fontFamily: Fonts.FONT_FACE_CAPTION,
    fontSize: Fonts.FONT_SIZE_CAPTION,
    position: 'absolute',
    color: Colors.NAVY,
    lineHeight: Fonts.FONT_SIZE_CAPTION * 1.5,
    //backgroundColor: 'red',
  },
  imageWrapper: {
    height: Dimensions.AVATAR_SIZE,
    width: Dimensions.AVATAR_SIZE,
    position: 'absolute',
    //backgroundColor: '#ffcc00',
  },
  avatarImage: {
    height: Dimensions.AVATAR_SIZE,
    width: Dimensions.AVATAR_SIZE,
    //backgroundColor: '#ffcc00',
  },
});
