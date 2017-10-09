class Users {
    constructor() {
        this.users = [];
    }

    getUserWithSession(sessionKey) {
        return this.users.filter(user => user.value == sessionKey)[0];
    }

    logInUser(username, value) {
        this.users.push({username, value});
    }

    isLoggedInUser(sessionKey) {
        return this.users
            .filter(user => user.value == sessionKey).length === 1;
    }
}