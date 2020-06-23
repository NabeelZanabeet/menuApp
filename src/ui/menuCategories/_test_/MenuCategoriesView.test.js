import 'react-native';
import React from 'react';
import deepRenderer from 'react-test-renderer';
import MenuCategoriesView from '../components/MenuCategoriesView';

describe('MenuCategoriesView component', () => {
  test('renders correctly', () => {
    const tree = deepRenderer.create(<MenuCategoriesView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
