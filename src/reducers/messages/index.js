import { ADD_MESSAGES, SAVE_MESSAGE } from "../../constants"
import MessagesService from '../../services/MessagesService';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            return [...state, action.message];
        case SAVE_MESSAGE:
            MessagesService.sendMessage(action.message);
            return state;
        default:
            return state;
    }
};