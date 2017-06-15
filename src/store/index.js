import { createStore } from "redux";

const store = createStore((state = [], action) => {
    console.log("store");
});

export default store;