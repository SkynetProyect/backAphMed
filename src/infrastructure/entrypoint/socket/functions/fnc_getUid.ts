export default function getUid(id: string, users: { [uuid: string]: string}){
    return Object.keys(users).find((uid) => users[uid] === id);
}   