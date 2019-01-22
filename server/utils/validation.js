const { Users } = require('./users');

var isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
}

var isDuplicated = (name, userList) => {

    var user = userList.getUserByName(name);

    // users > 0 then is duplicated
    if (user.length > 0) {
        return true;
    }
    else {
        return false;
    }

}

module.exports = {
    isRealString,

    isDuplicated
}