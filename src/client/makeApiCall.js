// @flow
import axios from 'axios';

const makeAPICall = async ({
  method = 'GET',
  url = '',
  params = {},
  headers = {},
  timeout = 120 * 10000,
  responseType = 'json',
}) => {
  let requestConfig;
  try {
    requestConfig = {
      method,
      url,
      params,
      timeout,
      headers,
      responseType,
    };

    const response = await axios(requestConfig);

    return { data: response.data };
  } catch (error) {
    if (error.response) {
      // response received with error
      const { data: errorData, status, headers: errorHeaders } = error.response;
      return {
        error: {
          type: 'error-response-received',
          detail: {
            data: errorData,
            status,
            headers: errorHeaders,
          },
          stack: error,
        },
      };
    }
    if (error.request) {
      // No response received
      // instanceof XMLHttpRequest
      return {
        error: {
          type: 'no-response-received',
          detail: error.request,
          stack: error,
        },
      };
    }
    // Error setting up the request
    return {
      error: {
        type: 'request-setup-failed',
        detail: {
          message: error.message,
        },
        stack: error,
      },
    };
  }
};

export default makeAPICall;
