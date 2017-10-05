import LoginService from '../../services/LoginService';
import { SET_USERNAME } from '../../constants/user';

export const login = (username) => {
    return dispatch => {
        LoginService.login(username).then(() => {
            dispatch({type: SET_USERNAME, username: username});
        })
    }
};

export const isLoggedIn = () => {
    return dispatch => {
        LoginService.isLoggedIn().then(
            (response) => dispatch({type: SET_USERNAME, username: response.username}),
            (error) => dispatch({type: 'LOG_OUT'})
        )
    }
};
