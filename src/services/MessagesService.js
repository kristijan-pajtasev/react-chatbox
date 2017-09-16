import { ADD_MESSAGES } from "../constants"
import store from "../store";

class MessagesService {
    constructor() {
        this.url = "";
    }

    fetchMessages() {
        fetch(`${this.url}/message`)
            .then(res => {
                return res.json();
            })
            .then(
                data => {
                    data.messages.forEach(
                        message => this.addMessage(message)
                    )
                }
            );

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

        fetch(`${this.url}/message`,
            { method: 'POST' ,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })
            .then(() => { console.log('response') });
    }

    setApiHost(host) {
        this.url = host;
    }
}

export default new MessagesService();