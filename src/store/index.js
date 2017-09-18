import { createStore } from "redux";
import MessagesStore from './MessagesStore';

const store = createStore(MessagesStore);

export default store;