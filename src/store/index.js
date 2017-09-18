import { createStore } from "redux";
import { ADD_MESSAGES, SAVE_MESSAGE } from "../constants"
import MessagesService from '../services/MessagesService';

const store = createStore((state = [], action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            return [...state, action.message];
        case SAVE_MESSAGE:
            MessagesService.sendMessage(action.message);
            return state;
        default:
            return state;
    }
});

export default store;