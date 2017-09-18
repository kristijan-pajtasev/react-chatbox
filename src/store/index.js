import { createStore, combineReducers } from "redux";
import messages from '../reducers/messages';

const store = createStore(combineReducers({ messages }));

export default store;