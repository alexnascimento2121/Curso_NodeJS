const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('metade do processo...')
});

console.log('iniciando processo...');
eventEmitter.emit('start');
console.log('finalizando processo...');