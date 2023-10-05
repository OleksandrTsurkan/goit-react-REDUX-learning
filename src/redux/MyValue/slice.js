import { createSlice } from '@reduxjs/toolkit';

export const MySLice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = MySLice.actions;

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// console.log(increment.toString(100))

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });
