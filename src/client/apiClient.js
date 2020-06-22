import makeAPICall from './makeApiCall';

const apiClient = {
  getCategories: async () => {
    const { data, error } = await makeAPICall({
      method: 'GET',
      url:
        'https://www.foodkonnekt.com/admin/getAllItems?merchantUId=c4656bc2-cc41-4486-8d1e-1b4665c57fa7',
    });

    return { data, error };
  },
};

export default apiClient;
