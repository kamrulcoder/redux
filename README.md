# simple Todo  List 



### `counterSlice.js ` 
```javascript
   import { createSlice } from "@reduxjs/toolkit";

// state: count:0
// increment, decrement, reset

// const incrementCounter = () => {
//   return { type: "INCREMENT" };
// };

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increaseByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

// export reducer and action createor
// Action creators are generated for each case reducer function
export const { increment, decrement, reset, increaseByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
```


### `store.js ` 
```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
```


### `provide store in index.js` 

```javascript
 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
            <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

```


### `Counter.js `
```javascript
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
  reset,
} from "./redux/slices/counterSlice.js";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(increaseByAmount(5));
        }}
      >
        IncrementBy5
      </button>
    </div>
  );
};

export default Counter;
```

