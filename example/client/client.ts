import { io } from "socket.io-client";

const head = document.getElementById('head')
head!.innerHTML = 'new Head';
const messages = document.getElementById('messages');
// const item = document.createElement('li');
// item.textContent = 'hello';
// messages!.appendChild(item);
const truckSocket = io('/trucks')

truckSocket.on('truck message', function(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    messages!.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});