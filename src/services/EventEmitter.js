let id = 1;
class EventEmitter {
    constructor() {
        this.callbacks = []
    }

    registerEvent(type, callback) {
        let callback = {
            type: type,
            callback: callback,
            id: id
        };
        this.callbacks.push(callback);
        id++;
        return callback.id;
    }

    emitEvent(type) {
        this.callbacks.filter(c => r.type == type).forEach(c => { c.callback(); });
    }

    removeListener(id) {
        this.callbacks = this.callbacks.filter(c => c.id != id);
    }

}

export default new EventEmitter();