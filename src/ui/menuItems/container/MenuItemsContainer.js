import * as React from 'react';
import MenuItemsView from '../components/MenuItemsView';

const MenuItemsContainer = ({ navigation }) => {
  const onPressBackButton = () => {
    navigation.goBack();
  };

  return <MenuItemsView onPressBackButton={onPressBackButton} />;
};

export default MenuItemsContainer;
