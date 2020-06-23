import * as React from 'react';
import MenuCategoriesView from '../components/MenuCategoriesView';
import apiClient from '../../../client/apiClient';
import { showMessage } from 'react-native-flash-message';

const MenuCategoriesContainer = ({ navigation }) => {
  const [categories, setCategories] = React.useState(null);
  const [isProcessing, setIsProcessing] = React.useState(true);

  const getCategories = async () => {
    const { data } = await apiClient.getCategories();
    if (data) {
      setCategories(data.DATA);
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
    <MenuCategoriesView
      isProcessing={isProcessing}
      categories={categories}
      onPressBackButton={onPressBackButton}
    />
  );
};

export default MenuCategoriesContainer;
