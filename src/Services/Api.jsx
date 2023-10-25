import axios from 'axios';

export const BASE = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  BASE.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete BASE.defaults.headers.common['Authorization'];
};

export async function onRegister(credentials) {
  const { data } = await BASE.post('/users/signup', credentials);
  setToken(data.token);
  return data;
}

export async function onGetCurrentUser() {
  const { data } = await BASE.get('/users/current');
  return data;
}

export async function onLogin(credentials) {
  const { data } = await BASE.post('/users/login', credentials);
  setToken(data.token);
  return data;
}

export async function onLogout() {
  const { data } = await BASE.post('/users/logout');
  deleteToken();
  return data;
}

export async function getContacts() {
  const { data } = await BASE.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
  const { data } = await BASE.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await BASE.delete(`/contacts/${id}`);
  return data;
}
