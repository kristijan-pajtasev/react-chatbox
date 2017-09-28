import MessagesService from './MessagesService';

class SocketService {
    constructor(url) {
        this.socket = new WebSocket(`ws://${url}`, 'echo-protocol');
        this.socket.onmessage = this.onMessage;
    }
    onMessage(e) {
        try {
            const data = JSON.parse(e.data);
            if(!!data.type && data.type === 'MESSAGE') {
                MessagesService.addMessage({ message: data.message, username: data.username });
            }
        } catch(e) { }
    }
}

export default SocketService;