import 'react-native';
import React from 'react';
import deepRenderer from 'react-test-renderer';
import MenuItemsView from '../components/MenuItemsView';

describe('MenuItemsView component', () => {
  test('renders correctly', () => {
    const tree = deepRenderer.create(<MenuItemsView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
