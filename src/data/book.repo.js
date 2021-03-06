'use-strict'

const mysql = require('pg');
const provider = require('./providers/postgres_provider');

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

    const findById = async ({ id }) => {
        try {
            let sql = mysql.format("SELECT * FROM book WHERE id=?", [id]);
            const result = await provider.query(sql);
            return result.rows

        } catch (err) {
            console.error(err)
            Promise.reject(err)
        }
    }

    const deleteById = async ({ id }) => {
        try {
            let sql = mysql.format("UPDATE book SET is_available=false WHERE id=?", [id]);
            const result = await provider.query(sql);
            return "libro eliminado."

        } catch (err) {
            console.error(err)
            Promise.reject(err)
        }

    }

    return {
        findAll: findAll,
        createBook: create,
        findById: findById,
        deleteById: deleteById
    }
}

module.exports = bookRepo();