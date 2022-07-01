'use-strict'

const router = require('express').Router();
const {bookService} = require("../services");

router.get('/', function (req, res) {
    return res.json(bookService.findAll())
});

router.post('/', function (req, res) {
    return res.send(bookService.create())
});

router.get('/:id', function (req, res) {
    return res.send(bookService.findById())
});

router.delete('/', function (req, res) {
    return res.send(bookService.delete())
});
