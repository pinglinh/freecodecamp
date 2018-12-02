let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let numberOfOnlineUsers = 0;
  for (let userName in obj) {
    if (obj[userName].online === true) {
      numberOfOnlineUsers++;
    }
  }
  console.log(numberOfOnlineUsers);
  return numberOfOnlineUsers;
}

console.log(countOnline(users));
