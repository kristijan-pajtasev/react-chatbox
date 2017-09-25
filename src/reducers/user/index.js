import { SET_USERNAME } from "../../constants/user"

export default (state = {}, action) => {
    switch(action.type) {
        case SET_USERNAME:
            return { username: action.username };
        default:
            return state;
    }
};