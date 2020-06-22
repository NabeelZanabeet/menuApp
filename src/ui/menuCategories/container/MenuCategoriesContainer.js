import * as React from 'react';
import MenuCategoriesView from '../components/MenuCategoriesView';
import apiClient from '../../../client/apiClient';

const MenuCategoriesContainer = ({ navigation }) => {
  const [categories, setCategories] = React.useState(null);

  const getCategories = async () => {
    const { data } = await apiClient.getCategories();
    if (data) {
      setCategories(data.DATA);
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

  return (
    <MenuCategoriesView
      categories={categories}
      onPressBackButton={onPressBackButton}
    />
  );
};

export default MenuCategoriesContainer;
