class SocketService {
    constructor(url = 'ws://127.0.0.1:8080') {
        this.socket = new WebSocket(url, 'echo-protocol');
        this.socket.onmessage = this.onMessage;
    }
    onMessage(e) {
        console.log(`message received: ${e.data}`);
    }
}

export default SocketService;