import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { MySLice } from './MyValue/slice';
import { itemsSlice } from './itemsSlice/slice';
import { userSlice } from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    myValue: MySLice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
