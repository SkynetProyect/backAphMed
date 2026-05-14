export default function sendMessage(name: string, users: string[],io ,  payload?: Object) {
    users.forEach( id => payload ?
            io.to(id).emit(name, payload) :
            io.to(id).emit(name)
    )
}
