import { ADD_MESSAGES } from "../constants"
import store from "../store";

class MessagesService {
    constructor() {
        this.url = "";
    }

    fetchMessages() {

    }

    sendMessage(msg) {
        const message = {
            message: msg,
            from: "Me"
        };

        store.dispatch({
            type: ADD_MESSAGES,
            message: message
        });
    }
}

export default new MessagesService();