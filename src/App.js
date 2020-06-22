import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ErrorBoundary } from './ui/common';
import RootNavigationContainer from './ui/navigation/containers/RootNavigationContainer';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <ErrorBoundary>
          <RootNavigationContainer />
        </ErrorBoundary>
      </SafeAreaView>
    </>
  );
};

export default App;
