import { Socket } from "socket.io";
import getUid from "../functions/fnc_getUid";
import { v4 } from 'uuid';

export default function handshake( socket: Socket, users: { [uuid: string]: string}, callback: (uid: string) => void) {
    const reconnected = Object.values(users).includes(socket.id);
                if(reconnected){
                    console.info('User reconnected: ' + socket.id);
                    const uid = getUid(socket.id, users);
                    if(uid){
                        console.info('sending callback for reconnect ...');
                        callback(uid);
                        return users;
                    }
                }
                const uid = v4();
                users[uid] = socket.id;
                console.info('New user connected with uid: ' + uid);
                callback(uid);
                return users;
            }
        