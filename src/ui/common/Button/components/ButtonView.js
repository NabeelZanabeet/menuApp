import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './ButtonView.styles';

const ButtonView = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touchable, style]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

ButtonView.defaultProps = {
  style: {},
  onPress: () => {},
  text: '',
};

export default ButtonView;
