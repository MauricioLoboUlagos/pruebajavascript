'use-strict'

const router = require('express').Router();
const {bookService} = require("../services");

router.get('/', function (req, res) {
    try {
        let books = await bookService.findAll();
        return res.json(books);
    } catch (err) {
        return res.status(500).json(err)
    }
});

router.post('/', function (req, res) {
    try {
        let body = req.body;
        let data = await bookService.create(body);

        if (!data) {
            return res.status(400).json("Error al insertar registro.");
        }

        if (data.error) {
            return res.status(400).json(data.message);
        }

        return res.status(201).json(data);
    } catch (err) {
        return res.status(500).json(err)
    }
});

router.get('/:id', function (req, res) {
    try {
        let book = await bookService.findById(req.params);
        return res.json(book);
    } catch (err) {
        return res.status(500).json(err)
    }
});

router.put('/:id', function (req, res) {
    res.send("Modificar libro ID=" + req.params.id);
});

router.delete('/:id', async function (req, res) {
    try {
        let book = await bookService.delete(req.params);
        return res.json(book);
    } catch (err) {
        return res.status(500).json(err)
    }
});
