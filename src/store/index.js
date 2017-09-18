import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import messages from '../reducers/messages';

const store = createStore(combineReducers({ messages }), applyMiddleware(thunk));

export default store;