import * as React from 'react';
import { View, Image } from 'react-native';
import styles from './HomeView.styles';
import { mkonnektLogo } from '../../../assets/images';
import { Button } from '../../common';

const HomeView = ({ onPressItems, onPressCategories }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={mkonnektLogo} resizeMode="contain" />
      <Button text="Items" onPress={onPressItems} style={styles.button} />
      <Button
        text="Categories"
        onPress={onPressCategories}
        style={styles.button}
      />
    </View>
  );
};

export default HomeView;
