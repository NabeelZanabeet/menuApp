import * as React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './MenuItemsView.styles';
import { backIcon } from '../../../assets/images';

const MenuItemsView = ({ onPressBackButton }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backTouchable}
        onPress={onPressBackButton}>
        <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
      </TouchableOpacity>
      <Text>Items screen</Text>
    </View>
  );
};

export default MenuItemsView;
