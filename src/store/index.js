import { createStore } from "redux";
import { ADD_MESSAGES } from "../constants"

const store = createStore((state = [], action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            return [...state, action.message];
        default:
            return state;
    }
});

export default store;