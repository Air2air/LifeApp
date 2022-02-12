import { ScrollView, StyleSheet, View, Text } from 'react-native';

export const HomeScreen = () => {
  const type = 'dark';
  const title = 'Welcome to LifeApp!';
  const description =
    "We'll work alongside you to get the best insights, support and guidance through your journey.";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Hero
        type={type}
        image={image}
        title={title}
        description={description}
      /> */}
      <View style={styles.content}>
        <Text>Text Here</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //width: '100%',
  },
  content: {
    paddingHorizontal: Dimensions.SCAFFOLD_PADDING,
    //width: '100%',
  },
});
