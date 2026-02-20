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

const uri = process.env.db_uri;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: uri,
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
