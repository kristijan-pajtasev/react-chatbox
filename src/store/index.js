import { createStore } from "redux";
import { ADD_MESSAGES } from "../actions"

const store = createStore((state = [], action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            console.log("ADD_MESSAGES store")
            console.log(ADD_MESSAGES)
            return state;
    }
});

export default store;