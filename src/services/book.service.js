'use-strict'

const { bookRepo } = require('../data')

const bookService = () => {
    const findAll = async () => {
        try {
            return await bookRepo.findAll();
        } catch (error) {
            return Promise.reject({ error: true, message: error })
        }
    }

    // create new user on database
    const createBook = async ({ name, author, editorial, year }) => {
        try {
            if (!name) {
                console.error("UserService.createUser email is empty")
                return { error: true, message: "email is required" }
            }
            if (!author) {
                console.error("UserService.createUser password is empty")
                return { error: true, message: "password is required" }
            }
            if (!editorial) {
                console.error("UserService.createUser password is empty")
                return { error: true, message: "password is required" }
            }
            if (!year) {
                console.error("UserService.createUser password is empty")
                return { error: true, message: "password is required" }
            }

            return await bookRepo.create({name, author, editorial, year });
        } catch (error) {
            return Promise.reject({ message: error })
        }
    }
    // find book on database
    const findById = (id) => {
        try {
            return await bookRepo.findById(id);
        } catch (error) {
            return Promise.reject({ error: true, message: error })
        }
    }
    
    // delete book on database
    const deleteBook = (id) => {
        try {
            return await bookRepo.delete(id);
        } catch (error) {
            return Promise.reject({ error: true, message: error })
        }
    }

    return {
        findAll: findAll,
        create: createBook,
        find: findById,
        delete: deleteBook
    }
}

module.exports = bookService();