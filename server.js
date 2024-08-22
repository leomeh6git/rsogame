const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8090 });

let cipherPhrase = 'No cipher phrase set.';

server.on('connection', ws => {
    // Send the current cipher phrase to the new client
    ws.send(cipherPhrase);
    
    // Broadcast any new cipher phrase to all clients
    ws.on('message', message => {
        cipherPhrase = message;
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(cipherPhrase);
            }
        });
    });
    ws.on('error', error => {
        console.error('WebSocket Error: ', error);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');