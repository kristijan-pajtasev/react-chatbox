import { ADD_MESSAGES } from "../constants"
import store from "../store";

class MessagesService {
    constructor() {
        this.url = "";
    }

    fetchMessages() {

    }

    addMessage(message) {
        store.dispatch({
            type: ADD_MESSAGES,
            message: message
        });
    }

    sendMessage(msg) {
        const message = {
            message: msg,
            from: "Me"
        };
        fetch('http://127.0.0.1:8080/message',
            { method: 'POST' ,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })
            .then(() => { console.log('response') });

        store.dispatch({
            type: ADD_MESSAGES,
            message: message
        });
    }
}

export default new MessagesService();