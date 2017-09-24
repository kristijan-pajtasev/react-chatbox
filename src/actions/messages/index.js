import { SAVE_MESSAGE } from "../constants";
import MessagesService from '../../services/MessagesService';

export const sendMessage = (message) => {
    return dispatch => {
        MessagesService.sendMessage(message).then(() => {
            return {type: SAVE_MESSAGE, message: message};
        })
    }
}
