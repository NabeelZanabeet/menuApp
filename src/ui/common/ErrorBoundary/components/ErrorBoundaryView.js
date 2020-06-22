import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ErrorBoundaryView.styles';

const ErrorBoundaryView = ({ onResetPressed }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onResetPressed}>
        <Text style={styles.message}>Something went wrong</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorBoundaryView;
