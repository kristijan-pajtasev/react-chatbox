class Users {
    constructor() {
        this.users = [];
    }

    getUserWithSession(sessionKey) {
        return this.users.filter(user => user.value == sessionKey)[0];
    }

    login(username, value) {
        this.users.push({username, value});
    }

    isLoggedIn(sessionKey) {
        return this.users
            .filter(user => user.value == sessionKey).length === 1;
    }
}

module.exports = Users;