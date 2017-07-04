var someUser = {
  name: 'Jordan'
}

function nameFormatter(user) {
  return user.name = 'Oops';
}

nameFormatter(someUser);
console.log(someUser.name);

function nameFormatter(user) {
  return user.name = 'Oops';
}

var varName = 'Jordan';
nameFormatter(varName);
console.log(varName);
