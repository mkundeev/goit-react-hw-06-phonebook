import { configureStore } from '@reduxjs/toolkit';
import reducer from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts: reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
