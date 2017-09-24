import LoginService from '../../services/LoginService';

export const login = (username) => {
    return dispatch => {
        LoginService.login(username).then(() => {
            return {type: 'LOGIN', username: username};
        })
    }
}
