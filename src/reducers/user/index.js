import { SET_USERNAME } from "../../constants/user"

export default (state = {}, action) => {
    console.log('action triggered' + action.type)
    switch(action.type) {
        case SET_USERNAME:
            console.log('set username');
            return { username: action.username };
        default:
            return state;
    }
};