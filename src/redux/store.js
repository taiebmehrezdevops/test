
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import rootReducer from "./Reducer/index"

import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware))
);
export default store;