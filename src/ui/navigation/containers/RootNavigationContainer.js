// @flow
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../../home/container/HomeContainer';
import MenuItemsContainer from '../../menuItems/container/MenuItemsContainer';
import MenuCategoriesContainer from '../../menuCategories/container/MenuCategoriesContainer';

const Stack = createStackNavigator();

const RootNavigationContainer = () => (
  <NavigationContainer>
    <Stack.Navigator
      mode="card"
      headerMode="none"
      initialRouteName="Home"
      screenOptions={() => ({
        gestureEnabled: true,
      })}>
      <Stack.Screen name="Home" component={HomeContainer} />
      <Stack.Screen name="menuItems" component={MenuItemsContainer} />
      <Stack.Screen name="menuCategories" component={MenuCategoriesContainer} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigationContainer;
