'use-strict'

const mysql = require('mysql');
const provider = require('./providers/mysql_provider');

const bookRepo = () => {
    const findAll = async () => {
        try {
            // con MySQL providers
            // return await provider.query("SELECT * FROM users");

            // con PostgresProvider providers
            let books = await provider.query("SELECT * FROM book");
            return users.rows;
        } catch (err) {
            console.error(err)
            Promise.reject(err)
        }
    }
    const create = async ({ name, author, editorial, year }) => {
        try {
            // con MySQL providers
            // let sql = mysql.format("INSERT INTO users(name, email, password) VALUES (?, ?, ?)", [name, email, password]);

            // con MySQL providers
            // return result.affectedRows > 0 ? {
            //     id: result.insertId, name, email, password
            // } : null;

            // con PostgresProvider providers
            let sql = mysql.format("INSERT INTO books(name, author, editorial, year) VALUES (?, ?, ?, ?) RETURNING id", [name, author, editorial, year]);
            const result = await provider.query(sql);
            return result.rowCount > 0 ? {
                id: result.rows[0].id, name, author, editorial, year
            } : null;

        } catch (err) {
            console.error(err)
            Promise.reject(err)
        }
    }

    return {
        findAll: findAll,
        createBook: create
    }
}

module.exports = bookRepo();