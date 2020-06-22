import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ErrorBoundary from './ui/common/ErrorBoundary/container/ErrorBoundary';

const App: () => React$Node = () => {
  return (
    <>
      <ErrorBoundary>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
      </ErrorBoundary>
    </>
  );
};

export default App;
