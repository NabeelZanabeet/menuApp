import * as React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './MenuItemsView.styles';
import { backIcon, loader } from '../../../assets/images';

const MenuItemsView = ({ isProcessing, items, onPressBackButton }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backTouchable}
        onPress={onPressBackButton}>
        <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.title}>Items</Text>
      {items && !isProcessing && (
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {items.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Text style={styles.name}>{`Name: ${item.name}`}</Text>
              <Text style={styles.price}>{`Price: ${item.price}`}</Text>
            </View>
          ))}
        </ScrollView>
      )}
      {!items && isProcessing && (
        <Image style={styles.loader} source={loader} resizeMode="contain" />
      )}
    </View>
  );
};

export default MenuItemsView;
