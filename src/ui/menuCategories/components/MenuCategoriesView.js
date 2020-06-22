import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './MenuCategoriesView.styles';
import { backIcon } from '../../../assets/images';

const MenuCategoriesView = ({ onPressBackButton }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backTouchable}
        onPress={onPressBackButton}>
        <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
      </TouchableOpacity>
      <Text>Categories screen</Text>
    </View>
  );
};

export default MenuCategoriesView;
