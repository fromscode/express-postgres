#! /usr/bin/env node

const { Client } = require("pg");

const query = `
CREATE TABLE usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);;

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

const host = process.env.host;
const user = process.env.user;
const database = process.env.database;
const password = process.env.password;
const port = process.env.db_port;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${user}:${password}@${host}:${port}/${database}`,
    });
    await client.connect();
    try {
        await client.query(query);
        console.log("Created usernames table with three fields");
    } catch (err) {
        console.log(err.message);
    } finally {
        await client.end();
        console.log("done");
    }
}

main();
