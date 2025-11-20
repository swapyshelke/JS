// Custom event emitter

class EventEmitter {
  // on, emit, off
}

const event = new EventEmitter();
event.on("greet", (msg) => console.log(msg));
event.emit("greet", "Hello!");


