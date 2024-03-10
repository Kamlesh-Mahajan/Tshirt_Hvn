import { combineReducers, applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  products: productReducer,
});

let initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
