import * as React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './MenuCategoriesView.styles';
import { backIcon, loader } from '../../../assets/images';

const MenuCategoriesView = ({
  isProcessing,
  categories,
  onPressBackButton,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backTouchable}
        onPress={onPressBackButton}>
        <Image style={styles.backIcon} source={backIcon} resizeMode="contain" />
      </TouchableOpacity>
      {categories && !isProcessing && (
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {categories &&
            categories.map((category) => (
              <View key={category.id} style={styles.categoryCard}>
                <Text style={styles.name}>{`Name: ${category.name}`}</Text>
              </View>
            ))}
        </ScrollView>
      )}
      {!categories && isProcessing && (
        <Image style={styles.loader} source={loader} resizeMode="contain" />
      )}
    </View>
  );
};

export default MenuCategoriesView;
