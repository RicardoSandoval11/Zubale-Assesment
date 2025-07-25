import { Story } from '@/types';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StoryElement } from '../story-element/StoryElement';

type StoriesBarProps = {
  stories: Story[];
  isLoading: boolean;
};

export const StoriesBar: React.FC<StoriesBarProps> = ({ stories, isLoading }) => {
  return (
      <View style={styles.wrapper}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
          >
            {stories.map((story, index) => (
              <StoryElement key={index} story={story} />
            ))}
          </ScrollView>
        )}
      <View style={styles.afterLine} />
      </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 98,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  afterLine: {
    height: 1,
    backgroundColor: '#F2F2F2',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
