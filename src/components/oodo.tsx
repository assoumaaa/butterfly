import axios from 'axios';

const odooApiBaseUrl = 'http://194.163.164.92:8069/';
const username = 'Account@butterflytex.com';
const password = '12345';

const odooApi = axios.create({
  baseURL: odooApiBaseUrl,
  auth: {
    username: username,
    password: password,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchOdooData = async () => {
  try {
    const response = await odooApi.get('/resource');
    return response.data;
  } catch (error) {
    console.error('Error fetching Odoo data:', error);
  }
};
