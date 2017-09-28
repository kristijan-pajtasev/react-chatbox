import { ADD_MESSAGES } from "../constants"
import store from "../store";

class MessagesService {
    constructor() {
        this.url = "";
    }

    fetchMessages() {
        return fetch(`${this.url}/message`)
            .then(res => res.json())
            .then(
                data => {
                    data.messages.forEach(
                        message => this.addMessage(message)
                    )
                }
            );

    }

    addMessage(message, username) {
        store.dispatch({
            type: ADD_MESSAGES,
            message,
            username
        });
    }

    sendMessage(msg) {
        const message = {
            message: msg,
            from: "Me"
        };

        return fetch(`${this.url}/message`,
            { method: 'POST' ,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(message)
            })
            .then(() => { /* */ });
    }

    setApiHost(host) {
        this.url = host;
    }
}
const messagesService = new MessagesService();

export default messagesService;