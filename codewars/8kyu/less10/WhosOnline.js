// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
// The input data has the following structure:

[{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, 
{
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
}, 
{
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
}]


const whosOnline = (friends) => {
    const friendStatus = {'online': [], 'offline': [], 'away': []}
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].lastActivity > 10 && friends[i].status === 'online') {
            friendStatus.away.push(friends.username)
        } else if (friends[i].lastActivity <= 10 && friends[i].status === 'online') {
            friendStatus.online.push(friends.username)
        } else if (friends[i].status === 'offline') {
            friendStatus.offline.push(friends.username)
        }
    }

    return friendStatus
}