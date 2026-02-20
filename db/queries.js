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

module.exports = {
    getAllUsernames,
    insertUsername,
};
