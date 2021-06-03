const bcrypt = require("bcrypt");
const config = require("config");

function hash_password(password){
    const saltRounds = config.get("salt");

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

module.exports = {
    hash_password : hash_password
}