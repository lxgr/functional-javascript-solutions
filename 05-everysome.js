function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(subUser => goodUsers.some(goodUser => subUser.id === goodUser.id));
    }
}

module.exports = checkUsersValid
