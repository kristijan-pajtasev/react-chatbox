import { createStore } from "redux";
import MessagesStore from '../reducers/messages';

const store = createStore(MessagesStore);

export default store;