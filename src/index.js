import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware,combineReducers  } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { reducer } from "./21-ReduxSagaClassComp/SagaReducer";
import { FnSagaReducer } from "./22-ReduxSagaFunctionComp/FnSagaReducer";
import { watcherSaga } from "./21-ReduxSagaClassComp/Saga";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// 
// create a redux store with our reducer above and middleware
let store = createStore(
  combineReducers({reducer,FnSagaReducer}),
  applyMiddleware(sagaMiddleware)
);
// run the saga
sagaMiddleware.run(watcherSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);