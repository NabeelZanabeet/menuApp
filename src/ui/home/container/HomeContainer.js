import * as React from 'react';
import HomeView from '../components/HomeView';

const HomeContainer = ({ navigation }) => {
  const onPressItems = () => {
    navigation.navigate('menuItems');
  };

  const onPressCategories = () => {
    navigation.navigate('menuCategories');
  };
  return (
    <HomeView
      onPressItems={onPressItems}
      onPressCategories={onPressCategories}
    />
  );
};

export default HomeContainer;
