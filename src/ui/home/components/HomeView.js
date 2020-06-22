import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './HomeView.styles';

const HomeView = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
    </View>
  );
};

export default HomeView;
