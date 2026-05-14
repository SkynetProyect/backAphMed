import { Server as HTTPServer } from 'http';
import { Socket, Server } from 'socket.io';
import disconnect from './events/disconnect';
import getUid from './functions/fnc_getUid';
import sendMessage from './functions/fnc_sendMessage';
import handshake from './events/handshake';

export class ServerSocket {
    public static instance: ServerSocket;
    public io: Server;

    public users: { [uuid: string]: string};

    constructor(server: HTTPServer) {
        ServerSocket.instance = this;
        this.users = {};
        this.io = new Server(server, {
            serveClient: false,
            pingInterval: 10000,
            pingTimeout: 5000,
            cookie: false,
            cors: {
                origin: '*'
            }
        });

        this.io.on('connection', this.StartListeners);
        console.info('Socket server started');
    }

    StartListeners = (socket: Socket) => {
        
        socket.on('handshake', (callback: (uid: string) => void) => {
                this.users = handshake(socket, this.users, callback);
            });

        socket.on('disconnect', () => {
            this.users = disconnect(socket, this.users);
        });

        


    }


}
