import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE } from '../Services/Api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await BASE.get('/contacts');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async newContact => {
  const response = await BASE.post('/contacts', newContact);
  return response.data;
});

export const deleteContact = createAsyncThunk('deleteContact', async id => {
  const response = await BASE.delete(`/contacts/${id}`);
  return response.data;
});
