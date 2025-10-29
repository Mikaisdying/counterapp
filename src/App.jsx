import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './app/store';
import { increment, decrement } from './feature/actions';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}