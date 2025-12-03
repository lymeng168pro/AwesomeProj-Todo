import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import modules from '../../../modules';
import { _styles } from '../../../_styles';
import { IStory } from '../../../interfaces/story.interface';
import { LinearGradient } from 'react-native-linear-gradient';

type Props = {
  item?: IStory;
  onPress?: () => void;
};

const StoryItem = ({ item, onPress }: Props) => {
  return (
    <View style={_styles.BG_WHITE}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          style={styles.image}
          imageStyle={styles.imageStyle}
          source={{ uri: item?.storyURL }}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={[
              StyleSheet.absoluteFill,
              {
                width: '100%',
              },
            ]}
          />
          <Image style={styles.pfLeft} source={item?.created_by?.photoURL} />
          <View style={{ flex: 1 }} />
          <Text style={styles.text}>{item?.created_by?.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  text: {
    color: modules.WHITE,
    fontWeight: '600',
    fontSize: 11,
    margin: 8,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  storyShape: {
    width: 140,
    height: 210,
    borderRadius: 18,
  },
  image: {
    width: 140,
    height: 210,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: 1,
  },
  pfLeft: {
    top: 7,
    left: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#1B74E4', // 👈 the ring color (like Facebook blue)
    borderWidth: 3,
  },
});
