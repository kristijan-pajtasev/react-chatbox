import LoginService from '../../services/LoginService';
import { SET_USERNAME } from '../../constants/user';

export const login = (username) => {
    return dispatch => {
        LoginService.login(username).then(() => {
            dispatch({type: SET_USERNAME, username: username});
        })
    }
};
