import 'react-native';
import React from 'react';
import deepRenderer from 'react-test-renderer';
import HomeView from '../components/HomeView';

describe('HomeView component', () => {
  test('renders correctly', () => {
    const tree = deepRenderer.create(<HomeView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
