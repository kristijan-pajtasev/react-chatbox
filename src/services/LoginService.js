import { ADD_MESSAGES } from "../constants"
import store from "../store";

class LoginService {
    constructor() {
        this.url = "";
    }

    login(username) {
        const user = {
            username: username
        };

        return fetch(`${this.url}/login`,
            { method: 'POST' ,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(() => { /* */ });
    }

    setApiHost(host) {
        this.url = host;
    }
}
const loginService = new LoginService();

export default loginService;