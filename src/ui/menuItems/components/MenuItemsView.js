import * as React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './MenuItemsView.styles';
import { backIcon } from '../../../assets/images';

const MenuItemsView = ({ items, onPressBackButton }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backTouchable}
        onPress={onPressBackButton}>
        <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
      </TouchableOpacity>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {items &&
          items.map((item) => (
            <View style={styles.itemCard}>
              <Text style={styles.name}>{`Name: ${item.name}`}</Text>
              <Text style={styles.price}>{`Price: ${item.price}`}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default MenuItemsView;
