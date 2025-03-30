
users = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }]



  const whosOnline = (friends) => {
    const status = {
      online: [],
      offline: [],
      away: []
    }
  
    for(const friend of friends) {
      if(friend.status === 'offline') {
        status.offline.push(friend.username)
      }
      else {
        if(friend.lastActivity > 10 && friend.status === 'online') {
          status.away.push(friend.username)
        } else {
          status.online.push(friend.username)
        } 
      }
    }
    for(const guests in status) {
      if(status[guests].length === 0) {
        delete status[guests];
      }
    }
    return status;
  }
  