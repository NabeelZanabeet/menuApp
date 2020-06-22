import * as React from 'react';
import MenuCategoriesView from '../components/MenuCategoriesView';

const MenuCategoriesContainer = ({ navigation }) => {
  const onPressBackButton = () => {
    navigation.goBack();
  };

  return <MenuCategoriesView onPressBackButton={onPressBackButton} />;
};

export default MenuCategoriesContainer;
