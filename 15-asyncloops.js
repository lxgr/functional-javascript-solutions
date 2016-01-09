function loadUsers(userIds, load, done) {
  var users = []
  var count = 0
  userIds.forEach(function(curr, i) {
    load(curr, function(res) {
        users[i] = res;
        if (++count === userIds.length) done(users);
    })
  })
}

module.exports = loadUsers

