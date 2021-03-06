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

function getUserByEmail(email){
    if(email){
        const defer = q.defer();

        const query = conn.query('SELECT * FROM users WHERE ?', {email: email}, function(err, result){
            if(err){
                defer.reject(err);
            }
            else {
                defer.resolve(result);
            }
        });
        return defer.promise;
    }
    return false;
}

function getAllUsers(){
    const defer = q.defer();
        
    const query = conn.query('SELECT * FROM users ', function(err, users){
        if(err){
            defer.reject(err);
        }
        else {
            defer.resolve(users);
        }
    });

    return defer.promise;
}

module.exports = {
    addUser : addUser,
    getUserByEmail: getUserByEmail,
    getAllUsers: getAllUsers
}