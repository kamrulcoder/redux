# simple Todo  List 

### `Constants.js ` 
```javascript
    export const INCREMENT = "INCREMENT";
    export const RESET = "RESET";
    export const DECREMENT = "DECREMENT";
```



### `counterActions.js ` 
```javascript
   import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

    export const incrementCounter = () => {
      return {
        type: INCREMENT,
      };
    };

    export const resetCounter = () => {
      return {
        type: RESET,
      };
    };

    export const decrementCounter = () => {
      return {
        type: DECREMENT,
      };
    };
```



### `counterActions.js ` 
```javascript
    import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

      const initialState = { count: 0 };

      const counterReducer = (state = initialState, action) => {
        switch (action.type) {
          case INCREMENT:
            return {
              ...state,
              count: state.count + 1,
            };
          case RESET:
            return {
              ...state,
              count: 0,
            };
          case DECREMENT:
            return {
              ...state,
              count: state.count - 1,
            };

          default:
            return state;
        }
      };

      export default counterReducer;
```



### `store.js ` 
```javascript
    import { createStore } from "redux";
        import counterReducer from "./services/reducers/counterReducer";
        const store = createStore(counterReducer);
        export default store;
```


### `provide store in index.js` 

```javascript
 import React from "react";
        import { createRoot } from "react-dom/client";
        import { Provider } from "react-redux";

        import App from "./App";
        import store from "./store";

        const container = document.getElementById("root");
        const root = createRoot(container);

        root.render(
          <Provider store={store}>
            <App />
          </Provider>
        );
```


### `Counter.js `
```javascript

 import React from "react";
      import { useDispatch, useSelector } from "react-redux";
      import {
        incrementCounter,
        decrementCounter,
        resetCounter,
      } from "./services/actions/counterAction";

      const Counter = () => {
        const count = useSelector((state) => state.count);
        const dispatch = useDispatch();

        const handleIncrement = () => {
          dispatch(incrementCounter());
        };

        const handleReset = () => {
          dispatch(resetCounter());
        };

        const handleDecrement = () => {
          dispatch(decrementCounter());
        };

        return (
          <div>
            <h1>React Redux Example</h1>
            <h2>Count : {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
          </div>
        );
      };

      export default Counter;
```

