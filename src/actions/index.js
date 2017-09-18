import { SAVE_MESSAGE } from "../constants"

export const sendMessage = (message) => ({ type: SAVE_MESSAGE, message: message });
