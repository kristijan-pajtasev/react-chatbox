import { ADD_MESSAGES } from "../constants"

export const saveMessage = (message) => ({ type: ADD_MESSAGES, message: message });
