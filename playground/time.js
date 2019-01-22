var moment = require('moment');

var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm:ss a'));