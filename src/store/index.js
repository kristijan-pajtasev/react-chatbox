import { createStore } from "redux";
import { ADD_MESSAGES } from "../actions"

const store = createStore((state = [], action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            let messages = [];
            state.push(action.message);
            [].push.apply(messages, state);;
            return messages;
        default:
            return state;
    }
});

export default store;