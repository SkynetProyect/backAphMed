import { Socket } from "socket.io";
import getUid from "../functions/fnc_getUid";

export default function disconnect(socket:Socket, users: { [uuid: string]: string}) {

    const uid = getUid(socket.id, users);
    if(uid){
        delete users[uid];
        console.info('User disconnected: ' + uid);
    }
 
    return users;
}

        