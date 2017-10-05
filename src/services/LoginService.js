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
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(user)
            })
            .then(() => { /* */ });
    }

    isLoggedIn() {
        return fetch(`${this.url}/logged`,
            { method: 'POST' ,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                credentials: 'include'
            })
            .then((res) => {
                if(res.status === 200) {
                    return res.json();
                }
                throw new Error('User not logged in');
            });
    }

    setApiHost(host) {
        this.url = host;
    }
}
const loginService = new LoginService();

export default loginService;