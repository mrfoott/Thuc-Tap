const q = require("q");
const db = require("../common/database");

const conn = db.getConnection();

function addUser(users){
    if (users){
        const defer = q.defer();

        const query = conn.query('INSERT INTO users SET ?', users, function (error, result, fields) {
            if(error){
                defer.reject(error);
            }
            else {
                defer.resolve(result);
            }
        });
        return defer.promise;
    }
    return false;
}

module.exports = {
    addUser : addUser
}