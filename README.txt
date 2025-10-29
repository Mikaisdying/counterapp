// actions.js
import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

// counterReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './actions';

const initialState = { count: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => { state.count += 1; })
    .addCase(decrement, (state) => { state.count -= 1; });
});

export default counterReducer;

// gộp actions.js và counterReducer.js thành counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
