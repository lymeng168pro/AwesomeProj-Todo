import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { STORY_DATA } from '../../../dummy/slide.data';
import StoryItem from './StoryItem';
import modules from '../../../modules';
import CreateStory from './CreateStory';
import { _styles } from '../../../_styles';

interface Props {}

const StoryListing = ({}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);

  const openModal = (item: any) => {
    setSelected(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelected(null);
  };

  return (
    <View style={styles.BGcolor}>
      <FlatList
        data={STORY_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key.toString()}
        style={styles.container}
        ListHeaderComponent={<CreateStory />}
        ListHeaderComponentStyle={{ marginRight: 10 }}
        ItemSeparatorComponent={() => <View style={styles.separtor} />}
        renderItem={({ item }) => (
          <StoryItem item={item} onPress={() => openModal(item)} />
        )}
      />
      <View style={styles.divider} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalClose} onPress={closeModal}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          {selected?.storyURL ? (
            <Image
              source={{ uri: selected.storyURL }}
              style={styles.modalImage}
              resizeMode="contain"
            />
          ) : null}
        </View>
      </Modal>
    </View>
  );
};

export default StoryListing;

const styles = StyleSheet.create({
  separtor: {
    width: 8,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 11,
  },
  BGcolor: {
    backgroundColor: modules.WHITE,
  },
  divider: {
    height: 6,
    backgroundColor: '#e9e9e9ff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  modalClose: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  closeText: {
    color: modules.WHITE,
    fontWeight: '600',
  },
});
