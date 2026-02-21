const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("Select * from usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("Insert into usernames (username) values ($1)", [
        username,
    ]);
}

async function searchUser(param) {
    const { rows } = await pool.query('SELECT * FROM usernames WHERE username LIKE $1', [`%${param}%`]);
    return rows;
}

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUser
};
