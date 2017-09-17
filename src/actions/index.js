import { ADD_MESSAGES } from "../constants"

export const sendMessage = (message) => ({ type: ADD_MESSAGES, message: message });
