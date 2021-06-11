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

function updateUser(){
    if (params){
        const defer = q.defer();

        const query = conn.query('UPDATE users SET first_name = ?, last_name = ?, company_name = ?, phone = ?, email = ? WHERE id = ?', 
                    [params.first_name, params.last_name, params.company_name, params.phone, params.email], function (error, result) {
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
    addUser : addUser,
    getUserByEmail: getUserByEmail,
    getAllUsers: getAllUsers
}