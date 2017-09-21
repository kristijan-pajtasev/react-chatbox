import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import messages from '../reducers/messages';
import user from '../reducers/user';

const store = createStore(combineReducers({ messages, user }), applyMiddleware(thunk));

export default store;