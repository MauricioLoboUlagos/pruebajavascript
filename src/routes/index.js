module.exports = (app) => {
    app.use('/books', require('./book.routes'))
    app.use('/products', require('./product.routes'))
};