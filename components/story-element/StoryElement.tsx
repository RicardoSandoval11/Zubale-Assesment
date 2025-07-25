import { Story } from '@/types';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type StoryProps = {
  story: Story;
};

export const StoryElement: React.FC<StoryProps> = ({ story }) => {
  const { image, username } = story;

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        contentFit="cover"
      />
      <Text style={styles.text}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#ccc',
  },
  text: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
});
