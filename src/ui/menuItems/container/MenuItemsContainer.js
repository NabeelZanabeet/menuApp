import * as React from 'react';
import MenuItemsView from '../components/MenuItemsView';
import apiClient from '../../../client/apiClient';

const MenuItemsContainer = ({ navigation }) => {
  const [items, setItems] = React.useState(null);

  const getCategories = async () => {
    const { data } = await apiClient.getItems();
    if (data) {
      setItems(data.DATA);
    } else {
      // show notification request failed or fallback ui
    }
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  const onPressBackButton = () => {
    navigation.goBack();
  };

  return <MenuItemsView items={items} onPressBackButton={onPressBackButton} />;
};

export default MenuItemsContainer;
