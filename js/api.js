import { showStatus } from './status.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

export const fetchData = async ({ url = '/', body = null, method = 'GET' } = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, { body, method });
  if (!response.ok) {
    throw new Error('');
  }
  const data = await response.json();
  return data;
};

export const getData = async (url) => {
  try {
    return await fetchData({ url });
  } catch {
    showStatus('dataError');
  }
};

export const postData = async (body, handleSuccess, url) => {
  try {
    await fetchData({ body, url, method: 'POST' });
    handleSuccess();
    showStatus('success');
  } catch (error) {
    showStatus('error');
  }
};
