import * as React from 'react';
import MenuItemsView from '../components/MenuItemsView';
import apiClient from '../../../client/apiClient';
import { showMessage } from 'react-native-flash-message';

const MenuItemsContainer = ({ navigation }) => {
  const [items, setItems] = React.useState(null);
  const [isProcessing, setIsProcessing] = React.useState(true);

  const getCategories = async () => {
    const { data } = await apiClient.getItems();
    if (data) {
      setItems(data.DATA);
    } else {
      showMessage({
        message: "Couldn't load data",
        type: 'danger',
        animated: true,
        animationDuration: 400,
      });
    }
  };

  React.useEffect(() => {
    getCategories().then(() => setIsProcessing(false));
  }, []);

  const onPressBackButton = () => {
    navigation.goBack();
  };

  return (
    <MenuItemsView
      isProcessing={isProcessing}
      items={items}
      onPressBackButton={onPressBackButton}
    />
  );
};

export default MenuItemsContainer;
